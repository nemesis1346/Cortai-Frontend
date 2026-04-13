import { SquareMinus } from 'lucide-react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'

export default function SuppliesPanel() {
	const u = fitnessPageMock.supplies
	return (
		<Card className="rounded-2xl border border-white/10 bg-[#FFFFFF08]">
			<CardHeader
				left={(
					<div className="flex items-center gap-2 text-[18px] font-medium text-white">
						<SquareMinus className="h-5 w-5 text-[#00d4c0]" strokeWidth={1.75} />
						<span>Supplies</span>
					</div>
				)}
				middle={<span />}
				right={(
					<span className="text-[12px] text-white/50">Last restock: {u.lastRestock}</span>
				)}
			/>
			<CardBody className="pt-0">
				<div className="flex flex-row justify-between gap-6 pt-5 sm:grid-cols-3 sm:gap-8">
					<div className="flex flex-col gap-2">
						<div className="text-[18px] font-bold leading-tight text-white">
							{u.cleanTowels.current}/{u.cleanTowels.capacity}
						</div>
						<div className="text-[12px] text-white/50">Clean Towels</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[18px] font-bold leading-tight text-white">
							{u.dirtyBin.current}/{u.dirtyBin.capacity}
						</div>
						<div className="text-[12px] text-white/50">Dirty Towel Bin</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[18px] font-bold leading-tight text-white">
							{u.sanitizerPct}% avg.
						</div>
						<div className="text-[12px] text-white/50">Sanitizer ({u.sanitizerStations} stations)</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
