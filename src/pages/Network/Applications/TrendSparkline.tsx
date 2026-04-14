import { Area } from '@ant-design/plots'
import { useMemo } from 'react'

const TREND_LINE = '#00D4C0'
const TREND_FILL = 'linear-gradient(180deg, rgba(0, 212, 192, 0.28) 0%, rgba(0, 0, 0, 0) 88%)'

type TrendSparklineProps = {
	points: number[]
}

export default function TrendSparkline({ points }: TrendSparklineProps) {
	const data = useMemo(() => points.map((y, x) => ({ x, y })), [points])
	const maxY = useMemo(() => Math.max(...points, 0.01), [points])

	const config = useMemo(
		() =>
			({
				data,
				xField: 'x',
				yField: 'y',
				height: 44,
				width: 128,
				autoFit: false,
				smooth: true,
				legend: false,
				tooltip: false as const,
				interaction: { tooltip: false },
				style: {
					fill: TREND_FILL,
				},
				marginLeft: 20,
				line: {
					style: {
						stroke: TREND_LINE,
						lineWidth: 1.5,
					},
				},
				scale: {
					x: { type: 'point' as const, padding: 0.005 },
					y: { domain: [0, maxY * 0.4], nice: false },
				},
				axis: {
					x: false,
					y: {
						labelFill: 'rgba(255,255,255,0.38)',
						labelFontSize: 10,
						tickCount: 1,
						lineStroke: 'transparent',
						tickStroke: 'transparent',
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
			}) as Record<string, unknown>,
		[data, maxY],
	)

	return (
		<div className="flex w-full min-w-[150px] items-center justify-center">
			<div className="flex h-[44px] w-[128px] shrink-0 items-center justify-center overflow-visible">
				<Area {...config} />
			</div>
		</div>
	)
}
