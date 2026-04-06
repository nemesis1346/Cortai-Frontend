import Card, { CardHeader, CardBody } from '../../components/Card'
import { Clock, User, Bell, Search, Filter, ExternalLink } from 'lucide-react'

export default function ActionQueue() {
	const rows = [
		{ id: 1, title: 'Extra Bath Towels (2)', room: '305', source: 'Mr. Thompson', ago: '12m', status: 'Pending', color: 'bg-yellow-400/15 text-yellow-300' },
		{ id: 2, title: 'AC Not Working - Guest Complaint', room: '512', source: 'Mrs. Davis', ago: '12m', status: 'Pending', color: 'bg-yellow-400/15 text-yellow-300' },
		{ id: 3, title: 'AC Not Working - Room 512', room: '-', source: 'System Alert', ago: '25m', status: 'Urgent', color: 'bg-red-400/15 text-red-300' },
		{ id: 4, title: 'Firm Pillow Request', room: '401', source: 'Mr. Lee', ago: '8m', status: 'Assigned', color: 'bg-green-400/15 text-green-300' },
		{ id: 5, title: 'Clogged Bathroom Drain', room: '718', source: 'Mrs. Brown', ago: '12m', status: 'In Progress', color: 'bg-sky-400/15 text-sky-300' },
		{ id: 6, title: 'VIP Arrival - Suite 901', room: '-', source: 'System Alert', ago: 'ETA 2:00 pm', status: 'VIP', color: 'bg-purple-400/15 text-purple-300' },
		{ id: 7, title: 'Late Checkout Request', room: '602', source: 'Mr. Garcia', ago: '19m', status: 'Pending', color: 'bg-yellow-400/15 text-yellow-300' },
	]
	return (
		<Card className="min-h-[547px]">
			<CardHeader
				left={
					<div className="flex items-center gap-2">
						<Bell className="w-4 h-4 text-[#00D4C0]" />
						<span className="card-title">Action Queue</span>
					</div>
				}
				middle={
					<div className="hidden md:flex items-center gap-2 text-xs">
						<span className="px-3 py-1 rounded-[3px] bg-white/10 text-white/80">11 queue</span>
						<span className="px-3 py-1 rounded-[3px] bg-white/10 text-white/80">6 guest(s)</span>
						<span className="px-3 py-1 rounded-[3px] bg-red-500/20 text-red-300">4 alert(s)</span>
					</div>
				}
				right={
					<div className="flex items-center gap-3 text-white/80">
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
				}
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
								className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full ${
									r.status === 'Urgent' ? 'bg-red-400'
									: r.status === 'Assigned' ? 'bg-green-400'
									: r.status === 'Pending' ? 'bg-yellow-400'
									: 'bg-white/40'
								}`} 
							/> 
							<div>
								<div className="text-[14px] text-white/90">{r.title}</div>
								<div className="flex items-center gap-3 text-xs text-text-mute mt-1">
									<span className="flex items-center gap-1"><User className="w-3 h-3" /> {r.source}</span>
								</div>
							</div>
							<div>
								<span className="px-2 py-0.5 rounded-md bg-white/5 border border-border text-xs text-white/70">{r.room}</span>
							</div>
							<div className="flex items-center gap-1 text-xs text-white/70">
								<Clock className="w-3 h-3 text-[#00D4C0]" /> {r.ago}
							</div>
							<div>
								<span className={`px-3 py-1 rounded-[3px] text-xs ${r.color}`}>{r.status}</span>
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

