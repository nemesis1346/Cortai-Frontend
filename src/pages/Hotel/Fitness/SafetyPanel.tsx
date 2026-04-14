import { AlertCircle, Clock, ShieldAlert } from 'lucide-react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'

export default function SafetyPanel() {
	const s = fitnessPageMock.safety
	return (
		<Card className="rounded-2xl border border-border bg-panel">
			<CardHeader
				left={(
					<div className="flex items-center gap-2 text-[18px] font-medium text-text">
						<ShieldAlert className="h-5 w-5 text-brand" strokeWidth={1.75} />
						<span>Safety</span>
					</div>
				)}
				middle={<span />}
				right={<span className="text-[13px] text-text-dim">{s.today} today</span>}
			/>
			<CardBody className="pt-0">
				<div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-3 sm:gap-4 sm:pt-4">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<AlertCircle className="h-5 w-5 shrink-0 text-danger" strokeWidth={2} />
							<span className="text-[18px] font-bold leading-none text-danger">{s.slipFall}</span>
						</div>
						<div className="text-[12px] text-text-dim">Slip/Fall</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="text-[18px] font-bold leading-none text-warn">{s.equipMisuse}</div>
						<div className="text-[12px] text-text-dim">Equip Misuse</div>
					</div>
					<div className="flex min-w-0 flex-col divide-y divide-border border-t border-border pt-4 sm:border-t-0 sm:pt-0 sm:pl-2">
						{s.log.map((row) => (
							<div key={row.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
								<span className="min-w-0 text-[13px] text-text-dim">{row.title}</span>
								<span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] text-text-dim">
									<Clock className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
									{row.time}
								</span>
							</div>
						))}
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
