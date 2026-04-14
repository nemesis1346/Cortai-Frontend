import { primitive } from './tokens.generated'

export { chartHex, primitive, themeDark } from './tokens.generated'

export const chart = {
	axisLabelFill: primitive.WhiteShadow60,
	axisLineStroke: primitive.WhiteShadow10,
	axisTickStroke: primitive.WhiteShadow20,
	gridStroke: primitive.WhiteShadow10,
	areaFillGradient: (opacityTop: string) =>
		`linear-gradient(180deg, ${opacityTop} 0%, transparent 88%)`,
} as const
