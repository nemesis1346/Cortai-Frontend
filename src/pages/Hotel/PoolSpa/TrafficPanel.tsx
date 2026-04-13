import { Clock } from 'lucide-react'
import { Line } from '@ant-design/plots'
import { useMemo } from 'react'
import { poolPageMock } from '../../../data/mock'

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
			color: ['#00D4C0', '#f59e0b'],
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
					labelFill: 'rgba(255,255,255,0.55)',
					lineStroke: 'rgba(255,255,255,0.12)',
					tickStroke: 'rgba(255,255,255,0.15)',
					grid: null,
				},
				y: {
					labelFill: 'rgba(255,255,255,0.55)',
					lineStroke: 'rgba(255,255,255,0.12)',
					tickStroke: 'rgba(255,255,255,0.15)',
					grid: {
						line: {
							style: {
								stroke: 'rgba(255,255,255,0.12)',
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
							? '#F84247'
							: d.zone === 'Pool'
								? '#00D4C0'
								: '#f59e0b',
					fill:
						(d.zone === 'Pool' && peakPoolSet.has(d.time)) || (d.zone === 'Spa' && peakSpaSet.has(d.time))
							? '#F84247'
							: '#0b0f13',
					lineWidth: 1,
				}),
			},
		}),
		[maxCount],
	)
	return (
		<div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
			<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
				<div className="text-[18px] text-white inline-flex items-center gap-2 min-w-0">
					<Clock className="w-4 h-4 text-[#00d4c0] shrink-0" />
					<span className="truncate">Traffic Throughout the Day</span>
				</div>
				<div className="justify-self-center inline-flex flex-wrap items-center justify-center gap-4 text-[12px]">
					<span className="inline-flex items-center gap-1 text-white/60">
						<span className="w-2.5 h-2.5 rounded-sm rotate-45 bg-[#F84247] inline-block" />
						Peak
					</span>
					<span className="inline-flex items-center gap-1 text-white/60">
						<span className="w-2.5 h-2.5 rounded-full bg-[#00D4C0] inline-block" />
						Pool
					</span>
					<span className="inline-flex items-center gap-1 text-white/60">
						<span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] inline-block" />
						Spa
					</span>
				</div>
				<span className="justify-self-end rounded-[3px] bg-white/10 px-2 py-1 text-[12px] text-white/50 whitespace-nowrap">
					6:00 am – 8:00 pm
				</span>
			</div>
			<div className="mt-4 h-[320px]">
				<Line {...lineConfig} />
			</div>
		</div>
	)
}
