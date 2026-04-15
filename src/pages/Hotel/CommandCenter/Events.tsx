import Card, { CardBody, CardHeader } from '../../../components/Card'
import { CalendarDays, ExternalLink, MoreHorizontal } from 'lucide-react'
import { eventsMock, type EventStatus } from '../../../data/mock'

function StatusPill({ status }: { status: EventStatus }) {
	const color =
		status === 'Live' ? 'bg-[color:var(--primitive-semantic-success-10)] text-ok'
		: status === 'Open' ? 'bg-[color:var(--primitive-semantic-normal-10)] text-text-dim'
		: 'bg-[color:var(--primitive-accent-yellow-10)] text-warn'
	return <span className={`px-2 py-1 rounded-[3px] !text-[12px] ${color}`}>{status}</span>
}

export default function Events() {
	return (
		<Card className="min-h-[220px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<CalendarDays size={20} className="text-brand" />
						<h3 className="card-title">{eventsMock.title}</h3>
					</div>
				}
				middle={<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] text-text-dim px-2 py-1 !text-[12px]">{eventsMock.count} events</span>}
				right={
					<div className="flex items-center gap-3 text-text-dim">
						<MoreHorizontal className="w-5 h-5" />
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="overflow-x-auto">
				<div className="min-w-[520px] grid grid-cols-[1fr_100px_100px] items-center pt-1 text-text-dim !text-[10px] border-border border-b">
					<p>EVENT</p>
					<p>TIME</p>
					<p className="text-right">STATUS</p>
				</div>
				<div className="min-w-[520px] divide-y divide-border">
					{eventsMock.items.map((e) => (
						<div key={e.id} className="grid grid-cols-[1fr_100px_100px] items-center justify-between py-3">
							<div>
								<div className="text-text !text-[14px]">{e.title}</div>
								<div className="!text-[12px] text-text-dim mt-1">{e.subtitle}</div>
							</div>
							<div className="text-text-dim !text-[14px]">{e.time}</div>
							<div className="text-right !text-[14px]"><StatusPill status={e.status} /></div>
						</div>
					))}
				</div>
				</div>
			</CardBody>
		</Card>
	)
}
 
