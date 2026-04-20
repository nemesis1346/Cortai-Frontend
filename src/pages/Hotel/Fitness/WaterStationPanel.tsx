import { GlassWater } from 'lucide-react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'

export default function WaterStationPanel() {
	const u = fitnessPageMock.waterStation
	return (
		<Card className="rounded-2xl border border-border bg-card">
			<CardHeader
				left={(
					<div className="flex items-center gap-2 text-[1.125rem] font-medium text-text">
						<GlassWater className="h-5 w-5 text-brand" strokeWidth={1.75} />
						<span>Water Station</span>
					</div>
				)}
				middle={<span />}
				right={<span />}
			/>
			<CardBody className="pt-0">
				<div className="flex flex-row justify-between gap-6 pt-5 sm:grid-cols-3 sm:gap-8">
					<div className="flex flex-col gap-2">
						<div className="text-[1.125rem] font-bold leading-tight text-text">
							{u.bottleFillsToday}
						</div>
						<div className="text-[0.75rem] text-text-dim">Bottle Fills Today</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[1.125rem] font-bold leading-tight text-text">
							{u.lastFilterChange}
						</div>
						<div className="text-[0.75rem] text-text-dim">Last Filter Change</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[1.125rem] font-bold leading-tight text-text">
							{u.filterDaysLeft}
						</div>
						<div className="text-[0.75rem] text-text-dim">Filter Days Left</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
