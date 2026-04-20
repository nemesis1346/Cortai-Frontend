import towelRackIconUrl from '../../../assets/towel-rack.svg?url'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'

export default function SuppliesPanel() {
	const u = fitnessPageMock.supplies
	return (
		<Card className="rounded-2xl border border-border bg-card">
			<CardHeader
				left={(
					<div className="flex items-center gap-2 text-[1.125rem] font-medium text-text">
						<img src={towelRackIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<span>Supplies</span>
					</div>
				)}
				middle={<span />}
				right={(
					<span className="text-[0.75rem] text-text-dim">Last restock: {u.lastRestock}</span>
				)}
			/>
			<CardBody className="pt-0">
				<div className="flex flex-row justify-between gap-6 pt-5 sm:grid-cols-3 sm:gap-8">
					<div className="flex flex-col gap-2">
						<div className="text-[1.125rem] font-bold leading-tight text-text">
							{u.cleanTowels.current}/{u.cleanTowels.capacity}
						</div>
						<div className="text-[0.75rem] text-text-dim">Clean Towels</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[1.125rem] font-bold leading-tight text-text">
							{u.dirtyBin.current}/{u.dirtyBin.capacity}
						</div>
						<div className="text-[0.75rem] text-text-dim">Dirty Towel Bin</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-[1.125rem] font-bold leading-tight text-text">
							{u.sanitizerPct}% avg.
						</div>
						<div className="text-[0.75rem] text-text-dim">Sanitizer ({u.sanitizerStations} stations)</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
