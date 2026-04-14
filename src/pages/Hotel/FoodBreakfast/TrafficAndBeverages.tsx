import { Clock, Coffee, ExternalLink } from 'lucide-react'
import turnoverIcon from '../../../assets/table-turnover.svg'
import { Area } from '@ant-design/plots'
import { chart } from '../../../theme/fromExport'
import { chartHex, primitive } from '../../../theme/tokens.generated'

const trafficData = [
	{ time: '6:00', guests: 2 },
	{ time: '6:15', guests: 6 },
	{ time: '6:30', guests: 14 },
	{ time: '6:45', guests: 30 },
	{ time: '7:00', guests: 42 },
	{ time: '7:15', guests: 55 },
	{ time: '7:30', guests: 64 },
	{ time: '7:45', guests: 68 },
	{ time: '8:00', guests: 66 },
	{ time: '8:15', guests: 61 },
	{ time: '8:30', guests: 55 },
	{ time: '8:45', guests: 44 },
	{ time: '9:00', guests: 33 },
	{ time: '9:15', guests: 24 },
	{ time: '9:30', guests: 17 },
]

const isPeakPoint = (time: string) => time === '7:45'

const trafficConfig = {
	data: trafficData,
	xField: 'time',
	yField: 'guests',
	smooth: true,
	tooltip: {
		items: [{ channel: 'y', name: 'Guests' }],
	},
	interaction: {
		tooltip: { marker: false },
	},
	style: {
		fill: `linear-gradient(-90deg, ${primitive.NeutralShadow20} 68%, ${primitive.BrandShadow30} 100%)`,
	},
	scale: {
		x: {
			type: 'point',
			tickCount: 4,
		},
		y: {
			domain: [0, 68],
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
			stroke: chartHex.brand,
			lineWidth: 2,
		},
	},
	point: {
		size: (d: { time: string }) => (isPeakPoint(d.time) ? 6 : 3),
		shape: (d: { time: string }) => (isPeakPoint(d.time) ? 'diamond' : 'circle'),
		style: (d: { time: string }) => ({
			stroke: isPeakPoint(d.time) ? chartHex.danger : chartHex.brand,
			fill: isPeakPoint(d.time) ? chartHex.danger : chartHex.bg,
			lineWidth: 1,
		}),
	},
}

export default function TrafficAndBeverages() {
	return (
		<section className="grid grid-cols-1 xl:grid-cols-[1.35fr_1fr] gap-4">
			<div className="rounded-2xl border border-border bg-panel p-4">
				<div className="grid grid-cols-[1fr_auto_1fr] items-center">
					<div className="text-[18px] text-text inline-flex items-center gap-2">
						<Clock className="w-4 h-4 text-brand" />
						<span>Guest Traffic Timeline</span>
					</div>

					<div className="justify-self-center inline-flex items-center gap-4 text-[12px]">
						<span className="inline-flex items-center gap-1 text-text-dim">
							<span className="w-2.5 h-2.5 rotate-45 bg-danger inline-block" />
							Peak (68)
						</span>
						<span className="inline-flex items-center gap-1 text-text-dim">
							<span className="w-2.5 h-2.5 rounded-full bg-brand inline-block" />
							Now (42)
						</span>
					</div>

					<span className="justify-self-end rounded-[3px] bg-panel px-2 py-1 text-[12px] text-text-dim">
						6:00 am - 10:00 am
					</span>
				</div>

				<div className="mt-4 h-[320px]">
					<Area {...trafficConfig} />
				</div>
			</div>

			<div className="rounded-2xl border border-border bg-panel p-4">
				<div className="grid grid-cols-[1fr_1fr] items-center">
					<div className="text-[18px] text-text inline-flex items-center gap-2">
						<Coffee className="w-4 h-4 text-brand" />
						<span>Beverages</span>
					</div>
					<span className="justify-self-end rounded-[3px] px-2 py-1 text-[12px] text-text-dim">
						By zone traffic
					</span>
				</div>

				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-1 pt-4">
						<div className="flex justify-between text-text-dim text-[12px]">
							<span>Tea / Coffee</span>
							<span>80%</span>
						</div>
						<div className="mt-1 h-[8px] rounded-full bg-[color:var(--primitive-brand-900)]">
							<div className="h-full w-[80%] rounded-full bg-brand" />
						</div>
					</div>

					<div className="flex flex-col gap-1 pt-4">
						<div className="flex justify-between text-text-dim text-[12px]">
							<span>Other</span>
							<span>45%</span>
						</div>
						<div className="mt-1 h-[8px] rounded-full bg-[color:var(--primitive-brand-900)]">
							<div className="h-full w-[45%] rounded-full bg-brand" />
						</div>
					</div>
				</div>

				<div className="mt-6 border-t border-border pt-4">
					<div className="text-[18px] text-text inline-flex items-center gap-2">
						<img src={turnoverIcon} className="w-6 h-6" alt="" />
						<span>Table Turnover</span>
					</div>

					<div className="mt-3 grid grid-cols-3 gap-6">
						<div className="flex flex-col gap-3">
							<div className="text-text text-[18px] leading-none">30</div>
							<div className="text-text-dim text-[12px] inline-flex items-center gap-1">
								<span>Tables</span>
								<ExternalLink className="w-3.5 h-3.5" />
							</div>
						</div>
						<div className="flex flex-col gap-3 items-center">
							<div className="flex flex-row gap-3 items-center">
								<div className="text-text text-[18px] leading-none">4.2x</div>
								<div className="text-ok text-[14px] md:text-[16px]">-4% ↓</div>
							</div>
							<div className="text-text-dim text-[12px] inline-flex items-center gap-1">
								<span>Avg. Turns</span>
								<ExternalLink className="w-3.5 h-3.5" />
							</div>
						</div>
						<div className="flex flex-col gap-3 items-end text-right">
							<div className="flex flex-row gap-3 items-center">
								<div className="text-text text-[18px] leading-none">1m 45s</div>
								<div className="text-ok text-[14px] md:text-[16px]">-2% ↓</div>
							</div>
							<div className="text-text-dim text-[12px] inline-flex items-center gap-1">
								<span>Avg. Wipe Down</span>
								<ExternalLink className="w-3.5 h-3.5" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
