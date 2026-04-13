import { Users } from 'lucide-react'
import { fitnessPageMock } from '../../../data/mock'

type GuestsPanelProps = { className?: string }

export default function GuestsPanel({ className }: GuestsPanelProps) {
	const g = fitnessPageMock.guests
	const adultPct = g.adults + g.kids > 0 ? Math.round((100 * g.adults) / (g.adults + g.kids)) : 0
	return (
		<div className={`flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4 ${className ?? ''}`}>
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-2 text-[18px] font-medium text-white">
					<Users className="h-5 w-5 text-[#00d4c0]" strokeWidth={1.75} />
					<span>Guests</span>
				</div>
				<span className="text-[14px] text-white/45">{g.now} now</span>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex flex-row flex-wrap items-center justify-between gap-2 text-[13px]">
					<div className="flex flex-row items-center gap-2">
						<span className="text-[#00D4C0]">Adults</span> 
						<span className="text-white">{g.adults} now</span>
						<span className="text-white/45">38 as today</span>
					</div>
					<div className="text-[12px] text-white/45 bg-white/5 rounded-[3px] px-2 py-1">{g.capacityPercent}% capacity</div>
					<div className="flex flex-row items-center gap-2">
						<span className="text-[#f59e0b]">Kids</span>
						<span className="text-white">{g.kids} now</span>
						<span className="text-white/45">5 as today</span>
					</div>
				</div>
				<div className="h-[8px] overflow-hidden rounded-full bg-[#0f2a2a]">
					<div className="flex h-full w-full">
						<div className="h-full bg-[#00D4C0]" style={{ width: `${adultPct}%` }} />
						<div className="h-full bg-[#f59e0b]" style={{ width: `${100 - adultPct}%` }} />
					</div>
				</div>
			</div>
		</div>
	)
}
