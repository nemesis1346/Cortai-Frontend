import { Bar } from '@ant-design/plots'
import { useMemo } from 'react'
import { CardBody, CardHeader } from '../../../components/Card'
import { chartAxisColorFallback, readResolvedChartColor } from '../../../theme/resolvedChartColors'
import { useThemePreference } from '../../../theme/ThemePreferenceProvider'
import type { BandwidthRow } from './types'


type ApplicationBandwidthCardProps = {
	rows: BandwidthRow[]
	totalBadge: string
	axisMax?: number
}

export default function ApplicationBandwidthCard({ rows, totalBadge, axisMax = 8 }: ApplicationBandwidthCardProps) {
	const { effective } = useThemePreference()
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
		() => {
			const text = readResolvedChartColor('--color-text', chartAxisColorFallback.text)
			const textDim = readResolvedChartColor('--color-text-dim', chartAxisColorFallback.textDim)
			const textMute = readResolvedChartColor('--color-text-mute', chartAxisColorFallback.textMute)
			const border = readResolvedChartColor('--color-border', chartAxisColorFallback.border)
			return {
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
						labelFill: textDim,
						lineStroke: textMute,
						tickStroke: border,
						grid: {
							line: {
								style: {
									stroke: border,
									lineDash: [2, 4],
								},
							},
						},
						tickCount: 5,
					},
					x: {
						labelFill: text,
						lineStroke: 'transparent',
						tickStroke: 'transparent',
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
				theme: { type: effective === 'dark' ? 'classicDark' : 'classic' },
				label: {
					text: 'labelText',
					position: 'right',
					offset: 8,
					style: {
						fill: textDim,
						fontSize: 10,
					},
				},
				tooltip: {
					items: [{ channel: 'y', name: 'Bandwidth', valueFormatter: (v: number) => `${v} Gb` }],
				},
				containerStyle: {
					width: '100%',
					height: chartHeight,
					minHeight: chartHeight,
					overflow: 'visible',
				},
			} as Record<string, unknown>
		},
		[chartData, chartHeight, maxGb, effective],
	)

	return (
		<div className="card flex min-h-0 flex-1 flex-col p-4">
			<CardHeader
				left={<h3 className="card-title !mb-0 text-[15px] font-semibold">Application Bandwidth</h3>}
				right={<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-[11px] font-medium text-text">{totalBadge}</span>}
			/>
			<CardBody className="overflow-visible pt-1">
				<div className="w-full overflow-visible" style={{ height: chartHeight, minHeight: chartHeight }}>
					<Bar {...config} />
				</div>
			</CardBody>
		</div>
	)
}
