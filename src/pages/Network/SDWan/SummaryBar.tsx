import { ExternalLink } from 'lucide-react'
import { SD_WAN_NEON } from './constants'
import type { SdWanSummaryMetric } from './types'

type SummaryBarProps = {
	items: SdWanSummaryMetric[]
}

export default function SummaryBar({ items }: SummaryBarProps) {
	return (
		<section className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
			{items.map((s) => (
				<div key={s.id} className="card relative p-3">
					{s.link && (
						<ExternalLink className="absolute right-2 top-2 h-3.5 w-3.5 text-white/35" strokeWidth={1.75} aria-hidden />
					)}
					<div className="text-[14px] text-white/45">{s.label}</div>
					<div
						className="mt-1 text-[24px]"
						style={s.valueTone === 'neon' ? { color: SD_WAN_NEON } : undefined}
					>
						{s.valueTone === 'white' ? <span className="text-white">{s.value}</span> : s.value}
					</div>
				</div>
			))}
		</section>
	)
}
