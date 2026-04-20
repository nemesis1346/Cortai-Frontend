import { Clock } from 'lucide-react'
import { Area } from '@ant-design/plots'
import { useMemo } from 'react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'
import { chartAxisColorFallback, readResolvedChartColor } from '../../../theme/resolvedChartColors'
import { useThemePreference } from '../../../theme/ThemePreferenceProvider'
import { chartHex, primitive } from '../../../theme/tokens.generated'

const CHART_HEIGHT = 300
export default function TrafficPanel() {
	const { effective } = useThemePreference()
	const peakGuests = fitnessPageMock.trafficTimeline.peakGuests
	const meta = fitnessPageMock.trafficTimeline
	const yTicks = [0, 5, 10, 15, 20]
	const areaConfig = useMemo(() => {
		const text = readResolvedChartColor('--color-text', chartAxisColorFallback.text)
		const textDim = readResolvedChartColor('--color-text-dim', chartAxisColorFallback.textDim)
		const textMute = readResolvedChartColor('--color-text-mute', chartAxisColorFallback.textMute)
		const border = readResolvedChartColor('--color-border', chartAxisColorFallback.border)
		const gridLineStyle = {
			stroke: border,
			lineDash: [2, 4],
		}
		return {
			data: fitnessPageMock.trafficSeries,
			xField: 'time',
			yField: 'guests',
			height: CHART_HEIGHT,
			autoFit: true,
			smooth: true,
			tooltip: {
				items: [{ channel: 'y', name: 'Guests' }],
			},
			interaction: {
				tooltip: { marker: false },
			},
			style: {
				fill: `linear-gradient(180deg, ${primitive.BrandShadow30} 0%, transparent 75%)`,
			},
			scale: {
				x: { type: 'point' as const, padding: 0.08 },
				y: {
					domain: [0, 20],
					nice: false,
					tickMethod: () => yTicks,
				},
			},
			axis: {
				x: {
					labelFill: text,
					lineStroke: textMute,
					tickStroke: border,
					grid: {
						line: {
							style: gridLineStyle,
						},
					},
				},
				y: {
					labelFill: textDim,
					lineStroke: textMute,
					tickStroke: border,
					grid: {
						line: {
							style: gridLineStyle,
						},
					},
				},
			},
			line: {
				style: {
					stroke: chartHex.brand,
					lineWidth: 2,
				},
			},
			point: {
				size: (d: { guests: number }) => (d.guests === peakGuests ? 10 : 3.5),
				shape: (d: { guests: number }) => (d.guests === peakGuests ? 'diamond' : 'circle'),
				style: (d: { guests: number }) => ({
					stroke: d.guests === peakGuests ? chartHex.bg : chartHex.brand,
					fill: d.guests === peakGuests ? chartHex.danger : chartHex.bg,
					lineWidth: d.guests === peakGuests ? 2 : 1,
				}),
			},
			theme: { type: effective === 'dark' ? 'classicDark' : 'classic' },
		}
	}, [effective, peakGuests, yTicks])
	return (
		<Card className="flex w-full min-w-0 flex-col rounded-2xl border border-border bg-card">
			<CardHeader
				left={(
					<div className="flex min-w-0 items-center gap-2 text-[1.125rem] text-text">
						<Clock className="h-4 w-4 shrink-0 text-brand" />
						<span className="truncate">Guest Traffic Timeline</span>
					</div>
				)}
				middle={(
					<div className="flex max-w-[min(100%,22rem)] flex-wrap items-center justify-center gap-3 text-[0.75rem] text-text-dim sm:gap-4">
						<span className="inline-flex items-center gap-1.5">
							<span className="inline-block h-2.5 w-2.5 rotate-45 bg-danger" />
							Peak ({meta.peakGuests})
						</span>
						<span className="inline-flex items-center gap-1.5">
							<span className="h-2.5 w-2.5 rounded-full bg-brand" />
							Guests ({meta.legendGuests})
						</span>
					</div>
				)}
				right={(
					<div className="flex flex-wrap justify-end gap-2">
						<span className="rounded-[0.1875rem] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-[0.6875rem] text-text-dim">
							First guest {meta.firstGuest}
						</span>
						<span className="rounded-[0.1875rem] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-[0.6875rem] text-text-dim">
							Peak {meta.peakGuests} @ {meta.peakAt}
						</span>
					</div>
				)}
			/>
			<CardBody className="pt-0">
				<div className="w-full rounded-lg p-2">
					<Area {...areaConfig} />
				</div>
			</CardBody>
		</Card>
	)
}
