import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const exportPath = path.join(root, 'src/assets/export.json')
const cssOut = path.join(root, 'src/theme/tokens.generated.css')
const tsOut = path.join(root, 'src/theme/tokens.generated.ts')

const data = JSON.parse(fs.readFileSync(exportPath, 'utf8'))

const primitiveRoot = data.find((x) => x.Primitive)?.Primitive?.modes?.['Mode 1']
const themeDarkRoot = data.find((x) => x.Theme)?.Theme?.modes?.Dark
const themeLightRoot = data.find((x) => x.Theme)?.Theme?.modes?.Light

if (!primitiveRoot || !themeDarkRoot || !themeLightRoot) {
	console.error('generate-tokens: missing Primitive.Mode 1 or Theme.modes.Dark / Light')
	process.exit(1)
}

function collectColorLeaves(obj, pathParts, bag) {
	if (!obj || typeof obj !== 'object') return
	if (obj.$type === 'color' && typeof obj.$value === 'string') {
		bag[pathParts.join('.')] = obj.$value
		return
	}
	for (const [k, v] of Object.entries(obj)) {
		if (k.startsWith('$')) continue
		collectColorLeaves(v, [...pathParts, k], bag)
	}
}

const primitiveUnresolved = {}
collectColorLeaves(primitiveRoot, [], primitiveUnresolved)

const themeUnresolved = {}
collectColorLeaves(themeDarkRoot, [], themeUnresolved)

const themeLightUnresolved = {}
collectColorLeaves(themeLightRoot, [], themeLightUnresolved)

function walkPath(root, segments) {
	let n = root
	for (const s of segments) {
		if (!n || typeof n !== 'object') return undefined
		n = n[s]
	}
	return n
}

function getByPathString(objRoot, dotPath) {
	const segments = dotPath.split('.')
	return walkPath(objRoot, segments)
}

function resolveOnce(val, primitiveMap, themeMap, themeRootForRefs) {
	if (typeof val !== 'string' || !val.startsWith('{') || !val.endsWith('}')) return val
	const inner = val.slice(1, -1)
	if (primitiveMap[inner] !== undefined && !String(primitiveMap[inner]).startsWith('{')) {
		return primitiveMap[inner]
	}
	if (themeMap[inner] !== undefined && !String(themeMap[inner]).startsWith('{')) {
		return themeMap[inner]
	}
	const node = getByPathString(primitiveRoot, inner)
	if (node && typeof node === 'object' && node.$type === 'color' && node.$value) {
		return node.$value
	}
	const tnode = getByPathString(themeRootForRefs, inner)
	if (tnode && typeof tnode === 'object' && tnode.$type === 'color' && tnode.$value) {
		return tnode.$value
	}
	return val
}

function resolveMap(map, themeRootForRefs) {
	const out = { ...map }
	let changed = true
	let guard = 0
	while (changed && guard < 50) {
		guard++
		changed = false
		for (const [k, v] of Object.entries(out)) {
			if (typeof v !== 'string') continue
			const next = resolveOnce(v, out, out, themeRootForRefs)
			if (next !== v) {
				out[k] = next
				changed = true
			}
		}
	}
	for (const [k, v] of Object.entries(out)) {
		if (typeof v === 'string' && v.startsWith('{')) {
			const next = resolveOnce(v, out, out, themeRootForRefs)
			out[k] = next
		}
	}
	return out
}

const primitiveResolved = resolveMap(primitiveUnresolved, themeDarkRoot)
const themeResolved = resolveMap(themeUnresolved, themeDarkRoot)
const themeLightResolved = resolveMap(themeLightUnresolved, themeLightRoot)

function toVarName(prefix, dotPath) {
	return `--${prefix}-${dotPath.replace(/\./g, '-').replace(/\s+/g, '-').toLowerCase()}`
}

function toCamel(dotPath) {
	return dotPath
		.split('.')
		.map((part, i) => {
			const words = part.trim().split(/\s+/)
			return words.map((w, j) => (i === 0 && j === 0 ? w : w[0].toUpperCase() + w.slice(1))).join('')
		})
		.join('')
}

const css = [':root {']

for (const [k, v] of Object.entries(primitiveResolved)) {
	if (typeof v !== 'string' || v.startsWith('{')) continue
	css.push(`  ${toVarName('primitive', k)}: ${v};`)
}

for (const [k, v] of Object.entries(themeResolved)) {
	if (typeof v !== 'string' || v.startsWith('{')) continue
	css.push(`  ${toVarName('theme-dark', k)}: ${v};`)
}

for (const [k, v] of Object.entries(themeLightResolved)) {
	if (typeof v !== 'string' || v.startsWith('{')) continue
	css.push(`  ${toVarName('theme-light', k)}: ${v};`)
}

const appAliases = {
	'--color-bg': 'var(--theme-dark-global-body-bkg)',
	'--color-card': 'var(--primitive-neutral-850)',
	'--color-elevated': 'var(--theme-dark-global-popup-bkg)',
	'--color-panel': 'var(--theme-dark-widget-default-bkg)',
	'--color-border': 'var(--theme-dark-global-line-divider)',
	'--color-text': 'var(--theme-dark-global-general-txt)',
	'--color-text-dim': 'var(--theme-dark-global-shadow-txt)',
	'--color-text-mute': 'var(--theme-dark-global-divider-txt)',
	'--color-brand': 'var(--primitive-brand-500)',
	'--color-brand-muted': 'var(--primitive-brand-shadow-10)',
	'--color-ok': 'var(--primitive-semantic-success)',
	'--color-warn': 'var(--primitive-semantic-warning)',
	'--color-danger': 'var(--primitive-semantic-danger)',
	'--color-info': 'var(--primitive-accent-blue)',
	'--shadow-inner-card': 'inset 0 1px 0 var(--primitive-white-shadow-5)',
}

const appAliasesLight = {
	'--color-bg': 'var(--theme-light-global-body-bkg)',
	'--color-card': 'var(--theme-light-cards-bkg)',
	'--color-elevated': 'var(--theme-light-global-popup-bkg)',
	'--color-panel': 'var(--theme-light-widget-default-bkg)',
	'--color-border': 'var(--theme-light-global-line-divider)',
	'--color-text': 'var(--theme-light-global-general-txt)',
	'--color-text-dim': 'var(--theme-light-global-shadow-txt)',
	'--color-text-mute': 'var(--theme-light-global-divider-txt)',
	'--color-brand': 'var(--primitive-brand-600)',
	'--color-brand-muted': 'var(--primitive-brand-shadow-10)',
	'--color-ok': 'var(--primitive-semantic-success)',
	'--color-warn': 'var(--primitive-semantic-warning)',
	'--color-danger': 'var(--primitive-semantic-danger)',
	'--color-info': 'var(--primitive-accent-blue)',
	'--shadow-inner-card': 'inset 0 1px 0 var(--primitive-neutral-shadow-10)',
}

css.push('}')
css.push('')
css.push('@theme {')

for (const [alias, ref] of Object.entries(appAliases)) {
	css.push(`  ${alias}: ${ref};`)
}

css.push('}')
css.push('')
css.push('html[data-theme="light"] {')

for (const [alias, ref] of Object.entries(appAliasesLight)) {
	css.push(`  ${alias}: ${ref};`)
}

css.push('}')
css.push('')

fs.writeFileSync(cssOut, css.join('\n') + '\n', 'utf8')

const brand = primitiveResolved['Brand.500'] || '#00d4c0'
const brandHex6 = brand.match(/^#([0-9a-fA-F]{6})$/)?.[1] ?? '00d4c0'

const chartHex = {
	brand,
	brandRail: `#${brandHex6}33`,
	bg: primitiveResolved['Neutral.900'],
	card: primitiveResolved['Neutral.850'],
	rail: primitiveResolved['Neutral.800'],
	ok: primitiveResolved['Semantic.Success'],
	warn: primitiveResolved['Semantic.Warning'],
	danger: primitiveResolved['Semantic.Danger'],
	info: primitiveResolved['Accent.Blue'],
}

const primTs = {}
for (const [k, v] of Object.entries(primitiveResolved)) {
	if (typeof v === 'string' && !v.startsWith('{')) primTs[toCamel(k)] = v
}
const themeTs = {}
for (const [k, v] of Object.entries(themeResolved)) {
	if (typeof v === 'string' && !v.startsWith('{')) themeTs[toCamel(k)] = v
}

const themeLightTs = {}
for (const [k, v] of Object.entries(themeLightResolved)) {
	if (typeof v === 'string' && !v.startsWith('{')) themeLightTs[toCamel(k)] = v
}

const ts = `/** Generated by scripts/generate-tokens.mjs — do not edit. Source: src/assets/export.json */
export const primitive = ${JSON.stringify(primTs, null, '\t')} as const

export const themeDark = ${JSON.stringify(themeTs, null, '\t')} as const

export const themeLight = ${JSON.stringify(themeLightTs, null, '\t')} as const

export const chartHex = ${JSON.stringify(chartHex, null, '\t')} as const
`

fs.writeFileSync(tsOut, ts, 'utf8')

console.log('generate-tokens: wrote', path.relative(root, cssOut), path.relative(root, tsOut))
