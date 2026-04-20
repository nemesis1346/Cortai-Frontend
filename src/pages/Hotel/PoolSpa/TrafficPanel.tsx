import { Clock } from 'lucide-react'
import { Area } from '@ant-design/plots'
import { useMemo } from 'react'
import { poolPageMock } from '../../../data/mock'
import { chartAxisColorFallback, readResolvedChartColor } from '../../../theme/resolvedChartColors'
import { useThemePreference } from '../../../theme/ThemePreferenceProvider'
import { chartHex, primitive } from '../../../theme/tokens.generated'

const peakPoolSet = new Set(poolPageMock.peakPoolTimes)
const peakSpaSet = new Set(poolPageMock.peakSpaTimes)

function isPeakPool(d?: { time?: string; zone?: string }) {
	return d?.zone === 'Pool' && typeof d.time === 'string' && peakPoolSet.has(d.time)
}

function isPeakSpa(d?: { time?: string; zone?: string }) {
	return d?.zone === 'Spa' && typeof d.time === 'string' && peakSpaSet.has(d.time)
}

export default function TrafficPanel() {
	const { effective } = useThemePreference()
	const spaColor = primitive.SemanticWarning70
	const yTicks = [0, 5, 10, 15, 20]
	const xTicks = ['6:00 am', '8:00 am', '10:00 am', '12:00 pm', '2:00 pm', '4:00 pm', '6:00 pm', '8:00 pm']

	const areaConfig = useMemo(() => {
		const text = readResolvedChartColor('--color-text', chartAxisColorFallback.text)
		const textDim = readResolvedChartColor('--color-text-dim', chartAxisColorFallback.textDim)
		const textMute = readResolvedChartColor('--color-text-mute', chartAxisColorFallback.textMute)
		const border = readResolvedChartColor('--color-border', chartAxisColorFallback.border)
		const gridHorizontal = {
			stroke: border,
			lineDash: [4, 4],
			opacity: 0.72,
		}
		const gridVertical = {
			stroke: textMute,
			lineDash: [3, 5],
			opacity: 0.5,
		}
		return {
			data: poolPageMock.trafficSeries,
			xField: 'time',
			yField: 'count',
			colorField: 'zone',
			seriesField: 'zone',
			smooth: true,
			height: 320,
			autoFit: true,
			inset: 0,
			legend: false,
			tooltip: {
				items: [{ channel: 'y', name: 'Visitors' }],
			},
			interaction: {
				tooltip: { marker: false },
			},
			scale: {
				x: {
					type: 'point' as const,
					padding: 0.08,
					tickMethod: () => xTicks,
				},
				y: {
					domain: [0, 20],
					nice: false,
					tickMethod: () => yTicks,
				},
				color: {
					domain: ['Pool', 'Spa'],
					range: [chartHex.brand, spaColor],
				},
			},
			axis: {
				x: {
					labelFill: text,
					lineStroke: border,
					lineLineWidth: 1,
					tickStroke: border,
					grid: {
						line: {
							style: gridVertical,
						},
					},
				},
				y: {
					labelFill: textDim,
					lineStroke: border,
					lineLineWidth: 1,
					tickStroke: border,
					grid: {
						line: {
							style: gridHorizontal,
						},
					},
				},
			},
			style: {
				fill: (d: { zone: string }) =>
					d.zone === 'Pool'
						? `linear-gradient(180deg, ${primitive.BrandShadow30} 0%, ${primitive.BrandShadow10} 50%, transparent 86%)`
						: `linear-gradient(180deg, ${primitive.SemanticWarning10} 0%, ${primitive.SemanticWarning10} 52%, transparent 86%)`,
			},
			line: {
				style: {
					lineWidth: 2.5,
					opacity: 0.98,
				},
			},
			point: {
				size: (d?: { time?: string; zone?: string }) => {
					if (isPeakPool(d) || isPeakSpa(d)) return 8
					return 4
				},
				shape: (d?: { time?: string; zone?: string }) => {
					if (isPeakPool(d) || isPeakSpa(d)) return 'diamond'
					return d?.zone === 'Pool' ? 'circle' : 'square'
				},
				style: (d?: { time?: string; zone?: string }) => {
					if (isPeakPool(d)) {
						return { stroke: chartHex.danger, fill: chartHex.danger, lineWidth: 1 }
					}
					if (isPeakSpa(d)) {
						return { stroke: chartHex.danger, fill: chartHex.danger, lineWidth: 1 }
					}
					if (d?.zone === 'Pool') {
						return { stroke: chartHex.brand, fill: chartHex.bg, lineWidth: 1.5 }
					}
					return { stroke: spaColor, fill: spaColor, lineWidth: 1 }
				},
			},
			theme: { type: effective === 'dark' ? 'classicDark' : 'classic' },
		} as Record<string, unknown>
	}, [effective, spaColor, xTicks])

	return (
		<div className="rounded-2xl border border-border bg-card p-4">
			<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
				<div className="inline-flex min-w-0 items-center gap-2 text-[1.125rem] text-text">
					<Clock className="h-4 w-4 shrink-0 text-brand" />
					<span className="truncate">Traffic Throughout the Day</span>
				</div>
				<div className="justify-self-center inline-flex flex-wrap items-center justify-center gap-4 text-[0.75rem]">
					<span className="inline-flex items-center gap-1.5 text-text-dim">
						<span className="inline-block h-2.5 w-2.5 rotate-45 bg-danger" aria-hidden />
						Peak
					</span>
					<span className="inline-flex items-center gap-1.5 text-text-dim">
						<span
							className="inline-block h-2.5 w-2.5 rounded-full border"
							style={{ borderColor: chartHex.brand }}
							aria-hidden
						/>
						Pool
					</span>
					<span className="inline-flex items-center gap-1.5 text-text-dim">
						<span className="inline-block h-2 w-2" style={{ backgroundColor: spaColor }} aria-hidden />
						Spa
					</span>
				</div>
				<span className="justify-self-end whitespace-nowrap rounded-[0.125rem] bg-[color:var(--primitive-white-shadow-5)] px-2 py-1 text-[0.75rem] text-text">
					6:00 am – 8:00 pm
				</span>
			</div>
			<div className="mt-4 rounded-lg p-2">
				<div className="min-h-0 min-w-0 w-full">
					<Area
						{...areaConfig}
						className="block w-full min-w-0"
						containerStyle={{ width: '100%', minWidth: 0, height: 320 }}
					/>
				</div>
			</div>
		</div>
	)
}
