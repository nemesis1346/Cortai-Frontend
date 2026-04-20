import guestsBreakdownIconUrl from '../../../assets/guests-breakdown.svg?url'
import { fitnessPageMock } from '../../../data/mock'

type GuestsPanelProps = { className?: string }

export default function GuestsPanel({ className }: GuestsPanelProps) {
	const g = fitnessPageMock.guests
	const adultPct = g.adults + g.kids > 0 ? Math.round((100 * g.adults) / (g.adults + g.kids)) : 0
	return (
		<div className={`flex flex-col gap-6 rounded-2xl border border-border bg-card p-4 ${className ?? ''}`}>
			<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
				<div className="inline-flex items-center gap-2 text-[1.125rem] font-medium text-text">
					<img src={guestsBreakdownIconUrl} alt="" className="h-5 w-5 shrink-0" />
					<span>Guests</span>
				</div>
				<div className="justify-self-center text-[0.75rem] text-text-dim bg-[color:var(--primitive-semantic-normal-10)] rounded-[0.1875rem] px-2 py-1">
					{g.capacityPercent}% capacity
				</div>
				<span className="justify-self-end text-[0.875rem] text-text-dim">{g.now} now</span>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex flex-row flex-wrap items-center justify-between gap-2 text-[0.8125rem]">
					<div className="flex flex-row items-center gap-2">
						<span className="text-brand">Adults</span>
						<span className="text-text">{g.adults} now</span>
						<span className="text-text-dim">38 as today</span>
					</div>
					<div className="flex flex-row items-center gap-2">
						<span className="text-warn">Kids</span>
						<span className="text-text">{g.kids} now</span>
						<span className="text-text-dim">5 as today</span>
					</div>
				</div>
				<div className="h-[0.5rem] overflow-hidden rounded-full bg-[color:var(--primitive-brand-900)]">
					<div className="flex h-full w-full">
						<div className="h-full bg-brand" style={{ width: `${adultPct}%` }} />
						<div className="h-full bg-warn" style={{ width: `${100 - adultPct}%` }} />
					</div>
				</div>
			</div>
		</div>
	)
}
