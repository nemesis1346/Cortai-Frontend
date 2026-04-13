
import { MoreHorizontal } from 'lucide-react'

export type HotelOverviewStat = {
	id: string
	value: string
	label: string
}

type HotelOverviewCardProps = {
	title: string
	address: string
	stats: HotelOverviewStat[]
}

export default function HotelOverviewCard({ title, address, stats }: HotelOverviewCardProps) {
	return (
		<div className="rounded-xl border border-white/10 bg-[#FFFFFF08] p-3">
			<div className="flex items-start justify-between gap-3">
				<div className="flex flex-col gap-1">
					<div className="text-[18px] font-semibold text-[#00D4C0]">{title}</div>
					<div className="text-[12px] text-white/50">{address}</div>
				</div>
				<button type="button" className="inline-flex h-7 w-7 items-center justify-center rounded-md text-text-dim transition-colors hover:bg-card hover:text-white">
					<MoreHorizontal className="h-4 w-4" />
				</button>
			</div>
			<div className="mt-4 flex flex-row items-center justify-between">
				{stats.map((s) => (
					<div key={s.id} className="flex flex-col gap-1">
						<div className="text-[18px] font-semibold leading-none text-[#00D4C0]">{s.value}</div>
						<div className="text-[12px] text-white/50">{s.label}</div>
					</div>
				))}
			</div>
		</div>
	)
}
