import Card, { CardBody, CardHeader } from '../../components/Card'
import { CalendarDays, ExternalLink, MoreHorizontal } from 'lucide-react'
import { eventsMock, type EventStatus } from '../../data/mock'

function StatusPill({ status }: { status: EventStatus }) {
	const color =
		status === 'Live' ? 'bg-green-500/20 text-green-400'
		: status === 'Open' ? 'bg-white/20 text-white/80'
		: 'bg-amber-500/20 text-amber-300'
	return <span className={`px-2 py-1 rounded-md !text-[12px] ${color}`}>{status}</span>
}

export default function Events() {
	return (
		<Card className="min-h-[220px]">
			<CardHeader
				left={
					<div className="flex items-center gap-1">
						<CalendarDays size={20} className="text-teal-400" />
						<h3 className="card-title !m-auto">{eventsMock.title}</h3>
					</div>
				}
				middle={<span className="rounded-[3px] bg-[#A9AEB51A] text-white/70 px-2 py-1 !text-[12px]">{eventsMock.count} events</span>}
				right={
					<div className="flex items-center gap-3 text-white/60">
						<MoreHorizontal className="w-5 h-5" />
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-[1fr_100px_100px] items-center pt-1 text-white/50 !text-[10px] border-border border-b">
					<p>EVENT</p>
					<p>TIME</p>
					<p className="text-right">STATUS</p>
				</div>
				<div className="divide-y divide-white/10">
					{eventsMock.items.map((e) => (
						<div key={e.id} className="grid grid-cols-[1fr_100px_100px] items-center justify-between py-3">
							<div>
								<div className="text-white !text-[14px]">{e.title}</div>
								<div className="!text-[12px] text-white/50 mt-1">{e.subtitle}</div>
							</div>
							<div className="text-white/50 !text-[14px]">{e.time}</div>
							<div className="text-right !text-[14px]"><StatusPill status={e.status} /></div>
						</div>
					))}
				</div>
			</CardBody>
		</Card>
	)
}
 
