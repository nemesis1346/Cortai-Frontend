import { Bar } from '@ant-design/plots'
import { useMemo } from 'react'
import { CardBody, CardHeader } from '../../../components/Card'
import { chart, primitive } from '../../../theme/fromExport'
import type { BandwidthRow } from './types'


type ApplicationBandwidthCardProps = {
	rows: BandwidthRow[]
	totalBadge: string
	axisMax?: number
}

export default function ApplicationBandwidthCard({ rows, totalBadge, axisMax = 8 }: ApplicationBandwidthCardProps) {
	const maxGb = Math.max(axisMax, ...rows.map((r) => r.gb))

	const chartData = useMemo(
		() =>
			rows.map((r) => ({
				id: r.id,
				name: r.name,
				gb: r.gb,
				color: r.color,
				labelText: `${r.gb}Gb`,
			})),
		[rows],
	)

	const chartHeight = useMemo(() => Math.max(300, chartData.length * 34 + 58), [chartData.length])

	const config = useMemo(
		() =>
			({
				data: chartData,
				yField: 'gb',
				xField: 'name',
				colorField: 'id',
				scale: {
					y: {
						domain: [0, maxGb],
						nice: false,
					},
					color: {
						domain: chartData.map((d) => d.id),
						range: chartData.map((d) => d.color),
					},
				},
				legend: false,
				axis: {
					y: {
						labelFill: primitive.WhiteShadow40,
						lineStroke: primitive.WhiteShadow5,
						tickStroke: primitive.WhiteShadow20,
						grid: {
							line: {
								style: {
									stroke: chart.gridStroke,
									lineDash: [2, 4],
								},
							},
						},
						tickCount: 5,
					},
					x: {
						labelFill: primitive.WhiteShadow80,
						lineStroke: primitive.WhiteShadowTransparent,
						tickStroke: primitive.WhiteShadowTransparent,
						grid: null,
						labelAutoHide: false,
						labelAutoEllipsis: false,
						labelFontSize: 12,
					},
				},
				style: {
					maxWidth: 26,
					radius: 2,
				},
				height: chartHeight,
				autoFit: true,
				insetLeft: 4,
				insetRight: 4,
				insetBottom: 14,
				insetTop: 14,
				theme: { type: 'classicDark' },
				label: {
					text: 'labelText',
					position: 'right',
					offset: 8,
					style: {
						fill: primitive.WhiteShadow50,
						fontSize: 10,
					},
				},
				tooltip: {
					items: [{ channel: 'x', name: 'Bandwidth', valueFormatter: (v: number) => `${v} Gb` }],
				},
				containerStyle: {
					width: '100%',
					height: chartHeight,
					minHeight: chartHeight,
					overflow: 'visible',
				},
			}) as Record<string, unknown>,
		[chartData, chartHeight, maxGb],
	)

	return (
		<div className="card flex min-h-0 flex-1 flex-col p-4">
			<CardHeader
				left={<h3 className="card-title !mb-0 text-[15px] font-semibold">Application Bandwidth</h3>}
				right={<span className="rounded-[3px] bg-panel px-2 py-1 text-[11px] font-medium text-text-dim">{totalBadge}</span>}
			/>
			<CardBody className="overflow-visible pt-1">
				<div className="w-full overflow-visible" style={{ height: chartHeight, minHeight: chartHeight }}>
					<Bar {...config} />
				</div>
			</CardBody>
		</div>
	)
}
