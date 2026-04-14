import { Clock } from 'lucide-react'
import { Line } from '@ant-design/plots'
import { useMemo } from 'react'
import { poolPageMock } from '../../../data/mock'
import { chart } from '../../../theme/fromExport'
import { chartHex, primitive } from '../../../theme/tokens.generated'

const peakPoolSet = new Set(poolPageMock.peakPoolTimes)
const peakSpaSet = new Set(poolPageMock.peakSpaTimes)

export default function TrafficPanel() {
	const maxCount = useMemo(
		() => Math.max(...poolPageMock.trafficSeries.map((d) => d.count), 1),
		[],
	)
	const lineConfig = useMemo(
		() => ({
			data: poolPageMock.trafficSeries,
			xField: 'time',
			yField: 'count',
			seriesField: 'zone',
			color: [chartHex.brand, chartHex.warn],
			smooth: true,
			tooltip: {
				items: [{ channel: 'y', name: 'Visitors' }],
			},
			interaction: {
				tooltip: { marker: false },
			},
			scale: {
				x: { type: 'point' as const, padding: 0.06 },
				y: {
					domain: [0, maxCount + 4],
					tickCount: 4,
					nice: true,
				},
			},
			axis: {
				x: {
					labelFill: primitive.WhiteShadow50,
					lineStroke: primitive.WhiteShadow10,
					tickStroke: primitive.WhiteShadow20,
					grid: null,
				},
				y: {
					labelFill: primitive.WhiteShadow50,
					lineStroke: primitive.WhiteShadow10,
					tickStroke: primitive.WhiteShadow20,
					grid: {
						line: {
							style: {
								stroke: chart.gridStroke,
								lineDash: [4, 4],
							},
						},
					},
				},
			},
			line: {
				style: {
					lineWidth: 2,
				},
			},
			point: {
				size: (d: { time: string; zone: string }) => {
					if (d.zone === 'Pool' && peakPoolSet.has(d.time)) return 6
					if (d.zone === 'Spa' && peakSpaSet.has(d.time)) return 6
					return 0
				},
				shape: (d: { time: string; zone: string }) => {
					if (d.zone === 'Pool' && peakPoolSet.has(d.time)) return 'diamond'
					if (d.zone === 'Spa' && peakSpaSet.has(d.time)) return 'diamond'
					return 'circle'
				},
				style: (d: { time: string; zone: string }) => ({
					stroke:
						(d.zone === 'Pool' && peakPoolSet.has(d.time)) || (d.zone === 'Spa' && peakSpaSet.has(d.time))
							? chartHex.danger
							: d.zone === 'Pool'
								? chartHex.brand
								: chartHex.warn,
					fill:
						(d.zone === 'Pool' && peakPoolSet.has(d.time)) || (d.zone === 'Spa' && peakSpaSet.has(d.time))
							? chartHex.danger
							: chartHex.bg,
					lineWidth: 1,
				}),
			},
		}),
		[maxCount],
	)
	return (
		<div className="rounded-2xl border border-border bg-panel p-4">
			<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
				<div className="text-[18px] text-text inline-flex items-center gap-2 min-w-0">
					<Clock className="w-4 h-4 text-brand shrink-0" />
					<span className="truncate">Traffic Throughout the Day</span>
				</div>
				<div className="justify-self-center inline-flex flex-wrap items-center justify-center gap-4 text-[12px]">
					<span className="inline-flex items-center gap-1 text-text-dim">
						<span className="w-2.5 h-2.5 rounded-sm rotate-45 bg-danger inline-block" />
						Peak
					</span>
					<span className="inline-flex items-center gap-1 text-text-dim">
						<span className="w-2.5 h-2.5 rounded-full bg-brand inline-block" />
						Pool
					</span>
					<span className="inline-flex items-center gap-1 text-text-dim">
						<span className="w-2.5 h-2.5 rounded-full bg-warn inline-block" />
						Spa
					</span>
				</div>
				<span className="justify-self-end rounded-[3px] bg-panel px-2 py-1 text-[12px] text-text-dim whitespace-nowrap">
					6:00 am – 8:00 pm
				</span>
			</div>
			<div className="mt-4 h-[320px]">
				<Line {...lineConfig} />
			</div>
		</div>
	)
}
