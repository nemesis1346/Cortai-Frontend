import { Pie } from '@ant-design/plots'
import { useMemo } from 'react'
import { CardBody, CardHeader } from '../../../components/Card'
import { chartAxisColorFallback, readResolvedChartColor } from '../../../theme/resolvedChartColors'
import { useThemePreference } from '../../../theme/ThemePreferenceProvider'
import { chartHex, primitive } from '../../../theme/tokens.generated'
import type { CategorySlice } from './types'

type CategoryDistributionCardProps = {
	slices: CategorySlice[]
}

const CHART_MIN_HEIGHT = 280
const SLICE_GAP_STROKE = chartHex.card

export default function CategoryDistributionCard({ slices }: CategoryDistributionCardProps) {
	const { effective } = useThemePreference()
	const chartData = useMemo(
		() =>
			slices.map((s) => ({
				legendLabel: `${s.label}: ${s.pct}%`,
				value: s.pct,
				labelText: `${s.label} ${s.pct}%`,
				color: s.color,
				labelColor: s.color,
			})),
		[slices],
	)

	const config = useMemo(
		() => {
			const legendText = readResolvedChartColor('--color-text', chartAxisColorFallback.text)
			return {
				data: chartData,
				angleField: 'value',
				colorField: 'legendLabel',
				innerRadius: 0.62,
				scale: {
					color: {
						domain: chartData.map((d) => d.legendLabel),
						range: chartData.map((d) => d.color),
					},
				},
				style: {
					inset: 0.045,
					stroke: SLICE_GAP_STROKE,
					lineWidth: 2,
				},
				label: {
					text: 'labelText',
					position: 'outside',
					style: {
						fill: (d: { labelColor?: string; color?: string }) => d.labelColor ?? d.color ?? primitive.WhiteShadow100,
						fontSize: 12,
					},
				},
				legend: {
					color: {
						title: false,
						position: 'right',
						rowPadding: 10,
						itemLabelFill: legendText,
						itemLabelFontSize: 12,
					},
				},
				tooltip: {
					items: [{ channel: 'y', name: 'Share', valueFormatter: (v: number) => `${v}%` }],
				},
				theme: { type: effective === 'dark' ? 'classicDark' : 'classic' },
				height: CHART_MIN_HEIGHT,
				autoFit: true,
				containerStyle: {
					width: '90%',
					minHeight: CHART_MIN_HEIGHT,
					overflow: 'visible',
				},
			} as Record<string, unknown>
		},
		[chartData, effective],
	)

	return (
		<div className="card flex min-h-0 flex-1 flex-col p-4">
			<CardHeader left={<h3 className="card-title !mb-0">Category Distribution</h3>} />
			<CardBody className="min-h-[280px] flex-1 overflow-visible pt-2">
				<div className="flex w-full min-h-[260px] items-center justify-center">
					<Pie {...config} />
				</div>
			</CardBody>
		</div>
	)
}
