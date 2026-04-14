import Card, { CardBody, CardHeader } from '../../../../components/Card'
import { LineChart } from 'lucide-react'
import { Column } from '@ant-design/plots'
import { chartHex, primitive } from '../../../../theme/tokens.generated'

type DayPoint = {
	day: number
	predicted: number
	actual: number
	occupancyPct?: number
	deltaGuests?: number
}

type Props = {
	points?: DayPoint[]
}

export default function PredictedActual({ points }: Props) {
	const defaultPoints: DayPoint[] = [
		{ day: 1, predicted: 142, actual: 138, occupancyPct: 58, deltaGuests: 4 },
		{ day: 2, predicted: 142, actual: 148, occupancyPct: 62, deltaGuests: 4 },
		{ day: 3, predicted: 144, actual: 124, occupancyPct: 45, deltaGuests: 4 },
		{ day: 4, predicted: 110, actual: 108, occupancyPct: 48, deltaGuests: 5 },
		{ day: 5, predicted: 132, actual: 115, occupancyPct: 55, deltaGuests: 4 },
		{ day: 6, predicted: 134, actual: 128, occupancyPct: 60, deltaGuests: 4 },
		{ day: 7, predicted: 152, actual: 135, occupancyPct: 64, deltaGuests: 4 },
		{ day: 8, predicted: 142, actual: 138, occupancyPct: 58, deltaGuests: 4 },
		{ day: 9, predicted: 144, actual: 124, occupancyPct: 62, deltaGuests: 4 },
		{ day: 10, predicted: 110, actual: 108, occupancyPct: 45, deltaGuests: 5 },
		{ day: 11, predicted: 132, actual: 115, occupancyPct: 48, deltaGuests: 5 },
		{ day: 12, predicted: 148, actual: 128, occupancyPct: 55, deltaGuests: 4 },
		{ day: 13, predicted: 152, actual: 143, occupancyPct: 60, deltaGuests: 5 },
		{ day: 14, predicted: 156, actual: 148, occupancyPct: 64, deltaGuests: 4 },
	]

	const dataset = Array.isArray(points) && points.length > 0 ? points : defaultPoints
	const mappedData = dataset.flatMap((p) => [
		{ day: String(p.day), value: p.predicted, series: 'Predicted' },
		{ day: String(p.day), value: p.actual, series: 'Actual' },
	])

	const config = ({
		data: mappedData,
		xField: 'day',
		yField: 'value',
		colorField: 'series',
		group: true,
		legend: false,
		axis: {
			x: { labelAutoHide: true, labelSpacing: 9, labelFill: primitive.WhiteShadow90 },
			y: false,
		},
		style: { inset: 0 },
		height: 150,
		color: ({ series }: { series: string }) => (series === 'Predicted' ? primitive.AccentPurple10 : chartHex.brand),
		tooltip: { items: [{ channel: 'y', valueFormatter: (v: number) => `${v} guests` }] },
		theme: { type: 'classicDark' },
	} as unknown) as any
	return (
		<Card className="bg-panel">
			<CardHeader
				left={
					<div className="text-text inline-flex items-center gap-2">
						<LineChart className="w-5 h-5 text-brand" />
						<span className="text-[14px] text-text">Predicted vs Actual — Last 14 Days</span>
					</div>
				}
				right={<span className="rounded-md px-2 py-1 text-[12px] text-brand">Avg error: ±3.4 guests</span>}
			/>
			<CardBody>
				<div className="flex flex-row items-center justify-between px-6">
					{dataset ? (
						<>
							{dataset.map((p) => (
								<div key={p.day} className="flex flex-col items-center gap-3">
									<div className="text-[10px] text-text-dim border-b border-border">{p.occupancyPct != null ? `Occ: ${p.occupancyPct}%` : ''}</div>
									<div className="text-[10px] text-text-dim">{p.deltaGuests != null ? `Δ ${(p.deltaGuests > 0 ? '+' : '')}${p.deltaGuests}` : ''}</div>
									<div className="text-[10px] inline-flex items-center gap-2">
										<span className="text-brand">{p.actual}</span>
										<span style={{ color: primitive.AccentPurple }}>{p.predicted}</span>
									</div>
								</div>
							))}
						</>
					) : null}
				</div>
				<Column {...config} />
			</CardBody>
		</Card>
	)
}
