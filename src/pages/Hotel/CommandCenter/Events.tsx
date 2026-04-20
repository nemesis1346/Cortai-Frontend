import { ArrowUpDown, ExternalLink, MoreHorizontal } from 'lucide-react'
import calendarEventIconUrl from '../../../assets/calendar-event.svg?url'
import { eventsMock, type EventStatus } from '../../../data/mock'

function StatusPill({ status }: { status: EventStatus }) {
	const color =
		status === 'Live' ? 'bg-[color:var(--primitive-semantic-success-10)] text-ok'
		: status === 'Open' ? 'bg-[color:var(--primitive-semantic-normal-10)] text-text-dim'
		: 'bg-[color:var(--primitive-accent-yellow-10)] text-warn'
	return <span className={`badge-chip ${color}`}>{status}</span>
}

export default function Events() {
	return (
		<div className="card flex h-full min-h-[18.25rem] flex-col p-[1.25rem]">
			<div className="mb-2 flex flex-row items-center justify-between gap-2">
				<div className="card-header-left min-w-0">
					<div className="flex min-w-0 items-start gap-2">
						<img src={calendarEventIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<h3 className="card-title">{eventsMock.title}</h3>
						<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text-dim">{eventsMock.count} events</span>
					</div>
				</div>
				<div className="card-header-actions shrink-0">
					<button type="button" className="card-header-icon-btn" aria-label="More options">
						<MoreHorizontal />
					</button>
					<button type="button" className="card-header-icon-btn" aria-label="Open external">
						<ExternalLink />
					</button>
				</div>
			</div>
			<div className="min-h-0 flex-1">
				<div className="text-table-header grid min-w-[28.5rem] grid-cols-[1fr_6.25rem_6.25rem] items-center border-b border-border pt-1 text-text-dim">
					<p className="inline-flex min-w-0 items-center gap-1">
						<span className="truncate">EVENT</span>
						<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
					</p>
					<p className="inline-flex items-center gap-1 whitespace-nowrap">
						TIME
						<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
					</p>
					<p className="inline-flex items-center justify-end gap-1 text-right">
						STATUS
						<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
					</p>
				</div>
				<div className="min-w-[28.5rem] divide-y divide-border">
					{eventsMock.items.map((e) => (
						<div key={e.id} className="grid grid-cols-[1fr_6.25rem_6.25rem] items-center gap-2 py-3">
							<div className="min-w-0">
								<div className="truncate text-normal text-text">{e.title}</div>
								<div className="truncate text-small mt-1 text-text-dim">{e.subtitle}</div>
							</div>
							<div className="whitespace-nowrap text-normal text-text-dim">{e.time}</div>
							<div className="text-right text-normal whitespace-nowrap"><StatusPill status={e.status} /></div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
 
