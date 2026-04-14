import Card, { CardHeader, CardBody } from '../../../components/Card'
import { Clock, User, Bell, Search, Filter, ExternalLink } from 'lucide-react'

const STATUS_BADGE: Record<string, string> = {
	Pending: 'bg-[color:var(--primitive-accent-yellow-10)] text-warn',
	Urgent: 'bg-[color:var(--primitive-semantic-danger-10)] text-danger',
	Assigned: 'bg-[color:var(--primitive-semantic-success-10)] text-ok',
	'In Progress': 'bg-[color:var(--primitive-accent-blue-10)] text-info',
	VIP: 'bg-[color:var(--primitive-accent-purple-10)] text-[color:var(--primitive-accent-purple)]',
}

const ROW_BAR: Record<string, string> = {
	Urgent: 'bg-danger',
	Assigned: 'bg-ok',
	Pending: 'bg-warn',
	'In Progress': 'bg-info',
	VIP: 'bg-[color:var(--primitive-accent-purple)]',
}

export default function ActionQueue() {
	const rows = [
		{ id: 1, title: 'Extra Bath Towels (2)', room: '305', source: 'Mr. Thompson', ago: '12m', status: 'Pending' },
		{ id: 2, title: 'AC Not Working - Guest Complaint', room: '512', source: 'Mrs. Davis', ago: '12m', status: 'Pending' },
		{ id: 3, title: 'AC Not Working - Room 512', room: '-', source: 'System Alert', ago: '25m', status: 'Urgent' },
		{ id: 4, title: 'Firm Pillow Request', room: '401', source: 'Mr. Lee', ago: '8m', status: 'Assigned' },
		{ id: 5, title: 'Clogged Bathroom Drain', room: '718', source: 'Mrs. Brown', ago: '12m', status: 'In Progress' },
		{ id: 6, title: 'VIP Arrival - Suite 901', room: '-', source: 'System Alert', ago: 'ETA 2:00 pm', status: 'VIP' },
		{ id: 7, title: 'Late Checkout Request', room: '602', source: 'Mr. Garcia', ago: '19m', status: 'Pending' },
	]
	return (
		<Card className="min-h-[547px]">
			<CardHeader
				left={(
					<div className="flex items-center gap-2">
						<Bell className="w-4 h-4 text-brand" />
						<span className="card-title">Action Queue</span>
					</div>
				)}
				middle={(
					<div className="hidden md:flex items-center gap-2 text-xs">
						<span className="rounded-[3px] bg-[color:var(--primitive-white-shadow-10)] px-3 py-1 text-text">11 queue</span>
						<span className="rounded-[3px] bg-[color:var(--primitive-white-shadow-10)] px-3 py-1 text-text">6 guest(s)</span>
						<span className="rounded-[3px] bg-[color:var(--primitive-semantic-danger-10)] px-3 py-1 text-danger">4 alert(s)</span>
					</div>
				)}
				right={(
					<div className="flex items-center gap-3 text-text">
						<button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-card" aria-label="Search">
							<Search className="w-4 h-4" />
						</button>
						<button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-card" aria-label="Filter">
							<Filter className="w-4 h-4" />
						</button>
						<button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-card" aria-label="Open">
							<ExternalLink className="w-4 h-4" />
						</button>
					</div>
				)}
			/>
			<CardBody>
				<div className="overflow-x-auto">
					<div className="min-w-[620px] sticky top-0 z-[1] text-[11px] text-text-mute py-3 pl-5 grid grid-cols-[40%_70px_100px_100px_100px] gap-3 border-b border-border">
						<div>ITEM / SOURCE</div>
						<div>ROOM</div>
						<div className="flex items-center gap-1"><Clock className="w-3 h-3" />TIME</div>
						<div>STATUS</div>
						<div className="text-right">ACTION</div>
					</div>
					<div className="min-w-[620px] divide-y divide-border">
						{rows.map((r) => (
							<div key={r.id} className="relative py-2 pl-5 grid grid-cols-[40%_70px_100px_100px_100px] gap-3 items-center">
								<span
									className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full ${ROW_BAR[r.status] ?? 'bg-[color:var(--primitive-white-shadow-40)]'}`}
								/>
								<div>
									<div className="text-[14px] text-text">{r.title}</div>
									<div className="flex items-center gap-3 text-xs text-text-mute mt-1">
										<span className="flex items-center gap-1"><User className="w-3 h-3" /> {r.source}</span>
									</div>
								</div>
								<div>
									<span className="rounded-[3px] bg-[color:var(--primitive-white-shadow-5)] px-2 py-1 text-xs text-text-dim">{r.room}</span>
								</div>
								<div className="flex items-center gap-1 text-xs text-text-dim">
									<Clock className="w-3 h-3 text-brand" /> {r.ago}
								</div>
								<div>
									<span className={`rounded-[3px] px-3 py-1 text-xs ${STATUS_BADGE[r.status] ?? ''}`}>{r.status}</span>
								</div>
								<div className="text-right">
									<button className="px-2 py-1 !text-[12px] rounded-md border border-border hover:bg-card">Assign</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
