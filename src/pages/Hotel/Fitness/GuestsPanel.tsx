import { Users } from 'lucide-react'
import { fitnessPageMock } from '../../../data/mock'

type GuestsPanelProps = { className?: string }

export default function GuestsPanel({ className }: GuestsPanelProps) {
	const g = fitnessPageMock.guests
	const adultPct = g.adults + g.kids > 0 ? Math.round((100 * g.adults) / (g.adults + g.kids)) : 0
	return (
		<div className={`flex flex-col gap-6 rounded-2xl border border-border bg-panel p-4 ${className ?? ''}`}>
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-2 text-[18px] font-medium text-text">
					<Users className="h-5 w-5 text-brand" strokeWidth={1.75} />
					<span>Guests</span>
				</div>
				<span className="text-[14px] text-text-dim">{g.now} now</span>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex flex-row flex-wrap items-center justify-between gap-2 text-[13px]">
					<div className="flex flex-row items-center gap-2">
						<span className="text-brand">Adults</span>
						<span className="text-text">{g.adults} now</span>
						<span className="text-text-dim">38 as today</span>
					</div>
					<div className="text-[12px] text-text-dim bg-[color:var(--primitive-semantic-normal-10)] rounded-[3px] px-2 py-1">{g.capacityPercent}% capacity</div>
					<div className="flex flex-row items-center gap-2">
						<span className="text-warn">Kids</span>
						<span className="text-text">{g.kids} now</span>
						<span className="text-text-dim">5 as today</span>
					</div>
				</div>
				<div className="h-[8px] overflow-hidden rounded-full bg-[color:var(--primitive-brand-900)]">
					<div className="flex h-full w-full">
						<div className="h-full bg-brand" style={{ width: `${adultPct}%` }} />
						<div className="h-full bg-warn" style={{ width: `${100 - adultPct}%` }} />
					</div>
				</div>
			</div>
		</div>
	)
}
