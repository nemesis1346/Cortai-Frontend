import Card, { CardHeader } from '../../../../components/Card'
import lineChartIconUrl from '../../../../assets/line-chart.svg?url'
import { Column } from '@ant-design/plots'
import { useMemo } from 'react'
import { chartAxisColorFallback, readResolvedChartColor } from '../../../../theme/resolvedChartColors'
import { useThemePreference } from '../../../../theme/ThemePreferenceProvider'
import { chartHex, primitive } from '../../../../theme/tokens.generated'

type DayPoint = {
	day: number
	predicted: number
	actual: number
	occupancyPct?: number
	deltaGuests?: number
}

type Props = {
	points?: DayPoint[]
}

const CHART_H = 200

export default function PredictedActual({ points }: Props) {
	const defaultPoints: DayPoint[] = [
		{ day: 1, predicted: 142, actual: 138, occupancyPct: 58, deltaGuests: 4 },
		{ day: 2, predicted: 142, actual: 148, occupancyPct: 62, deltaGuests: 4 },
		{ day: 3, predicted: 144, actual: 124, occupancyPct: 45, deltaGuests: 4 },
		{ day: 4, predicted: 110, actual: 108, occupancyPct: 48, deltaGuests: 5 },
		{ day: 5, predicted: 132, actual: 115, occupancyPct: 55, deltaGuests: 4 },
		{ day: 6, predicted: 134, actual: 128, occupancyPct: 60, deltaGuests: 4 },
		{ day: 7, predicted: 152, actual: 135, occupancyPct: 64, deltaGuests: 4 },
		{ day: 8, predicted: 142, actual: 138, occupancyPct: 58, deltaGuests: 4 },
		{ day: 9, predicted: 144, actual: 124, occupancyPct: 62, deltaGuests: 4 },
		{ day: 10, predicted: 110, actual: 108, occupancyPct: 45, deltaGuests: 5 },
		{ day: 11, predicted: 132, actual: 115, occupancyPct: 48, deltaGuests: 5 },
		{ day: 12, predicted: 148, actual: 128, occupancyPct: 55, deltaGuests: 4 },
		{ day: 13, predicted: 152, actual: 143, occupancyPct: 60, deltaGuests: 5 },
		{ day: 14, predicted: 156, actual: 148, occupancyPct: 64, deltaGuests: 4 },
	]

	const { effective } = useThemePreference()
	const dataset = Array.isArray(points) && points.length > 0 ? points : defaultPoints
	const mappedData = useMemo(
		() =>
			dataset.flatMap((p) => [
				{ day: String(p.day), value: p.predicted, series: 'Predicted' as const },
				{ day: String(p.day), value: p.actual, series: 'Actual' as const },
			]),
		[dataset],
	)

	const yDomainMax = useMemo(() => {
		const maxV = mappedData.reduce((m, d) => Math.max(m, d.value), 0)
		const padded = Math.ceil(maxV * 1.08)
		const step = 20
		return Math.max(step, Math.ceil(padded / step) * step)
	}, [mappedData])

	const config = useMemo(() => {
		const xLabelFill = readResolvedChartColor('--color-text', chartAxisColorFallback.text)
		return {
			data: mappedData,
			xField: 'day',
			yField: 'value',
			colorField: 'series',
			group: { padding: 0.05 },
			height: CHART_H,
			autoFit: true,
			inset: 0,
			legend: false,
			markBackground: {
				style: {
					fill: (d: { series?: string }) =>
						d.series === 'Actual' ? primitive.BrandShadow10 : primitive.AccentPurple10,
					radiusTop: 2,
				},
			},
			style: { maxWidth: 25, radiusTop: 2, inset: 0 },
			scale: {
				x: { paddingInner: 0.25, paddingOuter: 0.02 },
				y: { domain: [0, yDomainMax], nice: false },
				color: {
					domain: ['Predicted', 'Actual'],
					range: [primitive.AccentPurple, chartHex.brand],
				},
			},
			axis: {
				x: {
					labelAutoHide: true,
					labelSpacing: 4,
					labelFontSize: 10,
					labelFill: xLabelFill,
				},
				y: false,
			},
			tooltip: { items: [{ channel: 'y', valueFormatter: (v: number) => `${v} guests` }] },
			theme: { type: effective === 'dark' ? 'classicDark' : 'classic' },
		} as Record<string, unknown>
	}, [mappedData, effective, yDomainMax])

	return (
		<Card className="rounded-2xl border border-border !bg-panel">
			<CardHeader
				left={
					<div className="text-text inline-flex items-center gap-2">
						<img src={lineChartIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<span className="text-[14px] text-text">Predicted vs Actual — Last 14 Days</span>
					</div>
				}
				right={<span className="rounded-md px-2 py-1 text-[12px] text-brand">Avg error: ±3.4 guests</span>}
			/>
			<div className="flex min-w-0 w-full flex-col pt-4">
				<div className="grid w-full min-w-0 grid-cols-[repeat(14,minmax(0,1fr))] gap-x-0.5 gap-y-1 px-3">
					{dataset.map((p) => (
						<div key={p.day} className="flex min-w-0 flex-col items-center gap-0.5 pb-1">
							<div className="text-[9px] leading-tight text-text-dim border-b border-border">
								{p.occupancyPct != null ? `Occ: ${p.occupancyPct}%` : ''}
							</div>
							<div className="text-[9px] leading-tight text-text-dim">
								{p.deltaGuests != null ? `Δ ${(p.deltaGuests > 0 ? '+' : '')}${p.deltaGuests}` : ''}
							</div>
							<div className="text-[9px] inline-flex items-center gap-2">
								<span style={{ color: primitive.AccentPurple }}>{p.predicted}</span>
								<span className="text-brand">{p.actual}</span>
							</div>
						</div>
					))}
				</div>
				<div className="min-h-0 min-w-0 w-full">
					<Column
						{...config}
						className="block w-full min-w-0"
						containerStyle={{ width: '100%', minWidth: 0, height: CHART_H }}
					/>
				</div>
			</div>
		</Card>
	)
}
