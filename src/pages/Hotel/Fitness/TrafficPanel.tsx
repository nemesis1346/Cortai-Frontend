import { Clock } from 'lucide-react'
import { Area } from '@ant-design/plots'
import { useMemo } from 'react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'

const CHART_HEIGHT = 300

const gridLineStyle = {
	stroke: 'rgba(255,255,255,0.1)',
	lineDash: [2, 4],
}

export default function TrafficPanel() {
	const peakTime = fitnessPageMock.peakTime
	const meta = fitnessPageMock.trafficTimeline
	const maxGuests = 18
	const areaConfig = useMemo(
		() => ({
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
				fill: 'linear-gradient(180deg, rgba(0, 212, 192, 0.28) 0%, rgba(0, 0, 0, 0) 75%)',
			},
			scale: {
				x: { type: 'point' as const, padding: 0.08 },
				y: {
					domain: [0, maxGuests],
					nice: false,
					ticks: [0, 5, 9, 14, 18],
				},
			},
			axis: {
				x: {
					labelFill: 'rgba(255,255,255,0.55)',
					lineStroke: 'rgba(255,255,255,0.12)',
					tickStroke: 'rgba(255,255,255,0.15)',
					grid: {
						line: {
							style: gridLineStyle,
						},
					},
				},
				y: {
					labelFill: 'rgba(255,255,255,0.55)',
					lineStroke: 'rgba(255,255,255,0.12)',
					tickStroke: 'rgba(255,255,255,0.15)',
					grid: {
						line: {
							style: gridLineStyle,
						},
					},
				},
			},
			line: {
				style: {
					stroke: '#00D4C0',
					lineWidth: 2,
				},
			},
			point: {
				size: (d: { time: string }) => (d.time === peakTime ? 7 : 3),
				shape: (d: { time: string }) => (d.time === peakTime ? 'diamond' : 'circle'),
				style: (d: { time: string }) => ({
					stroke: d.time === peakTime ? '#F84247' : '#00D4C0',
					fill: d.time === peakTime ? '#F84247' : '#0b0f13',
					lineWidth: 1,
				}),
			},
		}),
		[peakTime],
	)
	return (
		<Card className="flex w-full min-w-0 flex-col rounded-2xl border border-white/10 bg-[#FFFFFF08]">
			<CardHeader
				left={(
					<div className="flex min-w-0 items-center gap-2 text-[18px] text-white">
						<Clock className="h-4 w-4 shrink-0 text-[#00d4c0]" />
						<span className="truncate">Guest Traffic Timeline</span>
					</div>
				)}
				middle={(
					<div className="flex max-w-[min(100%,22rem)] flex-wrap items-center justify-center gap-3 text-[12px] text-white/55 sm:gap-4">
						<span className="inline-flex items-center gap-1.5">
							<span className="inline-block h-2.5 w-2.5 rotate-45 bg-[#F84247]" />
							Peak ({meta.peakGuests})
						</span>
						<span className="inline-flex items-center gap-1.5">
							<span className="h-2.5 w-2.5 rounded-full bg-[#00D4C0]" />
							Guests ({meta.legendGuests})
						</span>
					</div>
				)}
				right={(
					<div className="flex flex-wrap justify-end gap-2">
						<span className="rounded-[3px] bg-white/[0.08] px-2 py-1 text-[11px] text-white/55">
							First guest {meta.firstGuest}
						</span>
						<span className="rounded-[3px] bg-white/[0.08] px-2 py-1 text-[11px] text-white/55">
							Peak {meta.peakGuests} @ {meta.peakAt}
						</span>
					</div>
				)}
			/>
			<CardBody className="pt-0">
				<div className="w-full">
					<Area {...areaConfig} />
				</div>
			</CardBody>
		</Card>
	)
}
