import { themeDark } from './tokens.generated'

export const chartAxisColorFallback = {
	text: themeDark['GlobalGeneral-txt'],
	textMute: themeDark['GlobalDivider-txt'],
	textDim: themeDark['GlobalShadow-txt'],
	border: themeDark['GlobalLine-divider'],
} as const

export function readResolvedChartColor(cssVar: string, fallback: string) {
	if (typeof document === 'undefined') return fallback
	const probe = document.createElement('div')
	probe.style.cssText = `position:absolute;left:0;top:0;visibility:hidden;pointer-events:none;color:var(${cssVar});`
	document.documentElement.appendChild(probe)
	const resolved = getComputedStyle(probe).color
	document.documentElement.removeChild(probe)
	if (!resolved || resolved === 'rgba(0, 0, 0, 0)') return fallback
	return resolved
}
