import Card, { CardHeader, CardBody } from '../../../components/Card'
import { ArrowUpDown, User, Search, Filter, ExternalLink } from 'lucide-react'
import bellIconUrl from '../../../assets/bell.svg?url'

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
		<Card className="min-h-[35.1875rem]">
			<CardHeader
				left={(
					<div className="flex items-start gap-2">
						<img src={bellIconUrl} alt="" className="h-5 w-5 shrink-0"/>
						<h3 className="card-title">Action Queue</h3>
					</div>
				)}
				middle={(
					<div className="btn-group hidden md:flex">
						<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text">11 queue</span>
						<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text">6 guest(s)</span>
						<span className="badge-chip bg-[color:var(--primitive-semantic-danger-10)] text-danger">4 alert(s)</span>
					</div>
				)}
				right={(
					<div className="card-header-actions">
						<button type="button" className="card-header-icon-btn" aria-label="Search">
							<Search />
						</button>
						<button type="button" className="card-header-icon-btn" aria-label="Filter">
							<Filter />
						</button>
						<button type="button" className="card-header-icon-btn" aria-label="Open">
							<ExternalLink />
						</button>
					</div>
				)}
			/>
			<CardBody>
				<div className="overflow-x-auto">
					<div className="text-table-header sticky top-0 z-[1] grid min-w-[38.75rem] grid-cols-[40%_4.375rem_6.25rem_6.25rem_6.25rem] gap-3 border-b border-border py-3 pl-5 text-text-mute">
						<div className="inline-flex min-w-0 items-center gap-1">
							<span className="truncate">ITEM / SOURCE</span>
							<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
						</div>
						<div className="inline-flex items-center gap-1">
							ROOM
							<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
						</div>
						<div className="inline-flex items-center gap-1">
							TIME
							<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
						</div>
						<div className="inline-flex items-center gap-1">
							STATUS
							<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
						</div>
						<div className="inline-flex items-center justify-end gap-1 text-right">
							ACTION
							<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
						</div>
					</div>
					<div className="min-w-[38.75rem] divide-y divide-border">
						{rows.map((r) => (
							<div key={r.id} className="relative py-2 pl-5 grid grid-cols-[40%_4.375rem_6.25rem_6.25rem_6.25rem] gap-3 items-center">
								<span
									className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full ${ROW_BAR[r.status] ?? 'bg-[color:var(--primitive-white-shadow-40)]'}`}
								/>
								<div className="min-w-0">
									<div className="truncate text-normal text-text">{r.title}</div>
									<div className="text-small mt-1 flex min-w-0 items-center gap-3 text-text-mute">
										<span className="inline-flex min-w-0 items-center gap-1 truncate"><User className="h-3 w-3 shrink-0" /> {r.source}</span>
									</div>
								</div>
								<div>
									<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text-dim">{r.room}</span>
								</div>
								<div className="text-small whitespace-nowrap text-text-dim">{r.ago}</div>
								<div>
									<span className={`badge-chip px-3 ${STATUS_BADGE[r.status] ?? ''}`}>{r.status}</span>
								</div>
								<div className="text-right">
									<button type="button" className="cortai-text-btn cortai-text-btn--secondary">Assign</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
