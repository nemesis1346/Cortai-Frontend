import { AlertCircle, Clock, ShieldAlert } from 'lucide-react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'

export default function SafetyPanel() {
	const s = fitnessPageMock.safety
	return (
		<Card className="rounded-2xl border border-white/10 bg-[#FFFFFF08]">
			<CardHeader
				left={(
					<div className="flex items-center gap-2 text-[18px] font-medium text-white">
						<ShieldAlert className="h-5 w-5 text-[#00d4c0]" strokeWidth={1.75} />
						<span>Safety</span>
					</div>
				)}
				middle={<span />}
				right={<span className="text-[13px] text-white/45">{s.today} today</span>}
			/>
			<CardBody className="pt-0">
				<div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-3 sm:gap-4 sm:pt-4">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<AlertCircle className="h-5 w-5 shrink-0 text-[#f87171]" strokeWidth={2} />
							<span className="text-[18px] font-bold leading-none text-[#f87171]">{s.slipFall}</span>
						</div>
						<div className="text-[12px] text-white/45">Slip/Fall</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="text-[18px] font-bold leading-none text-[#fbbf24]">{s.equipMisuse}</div>
						<div className="text-[12px] text-white/45">Equip Misuse</div>
					</div>
					<div className="flex min-w-0 flex-col divide-y divide-white/10 border-t border-white/10 pt-4 sm:border-t-0 sm:pt-0 sm:pl-2">
						{s.log.map((row) => (
							<div key={row.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
								<span className="min-w-0 text-[13px] text-white/50">{row.title}</span>
								<span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] text-white/50">
									<Clock className="h-3.5 w-3.5 text-[#00d4c0]" strokeWidth={2} />
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
