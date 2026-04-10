import { GlassWater } from 'lucide-react'
import Card, { CardBody, CardHeader } from '../../components/Card'
import { fitnessPageMock } from '../../data/mock'

export default function WaterStationPanel() {
	const u = fitnessPageMock.waterStation
	return (
		<Card className="rounded-2xl border border-white/10 bg-[#FFFFFF08]">
			<CardHeader
				left={(
					<div className="flex items-center gap-2 text-[18px] font-medium text-white">
						<GlassWater className="h-5 w-5 text-[#00d4c0]" strokeWidth={1.75} />
						<span>Water Station</span>
					</div>
				)}
				middle={<span />}
				right={<span />}
			/>
			<CardBody className="pt-0">
				<div className="flex flex-row justify-between gap-6 pt-5 sm:grid-cols-3 sm:gap-8">
					<div className="flex flex-col gap-2">
						<div className="text-[18px] font-bold leading-tight text-white">
							{u.bottleFillsToday}
						</div>
						<div className="text-[12px] text-white/50">Bottle Fills Today</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[18px] font-bold leading-tight text-white">
							{u.lastFilterChange}
						</div>
						<div className="text-[12px] text-white/50">Last Filter Change</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[18px] font-bold leading-tight text-white">
							{u.filterDaysLeft}
						</div>
						<div className="text-[12px] text-white/50">Filter Days Left</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
