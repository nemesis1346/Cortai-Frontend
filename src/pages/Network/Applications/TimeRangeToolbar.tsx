import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import type { TimeRangeId } from './types'

const RANGES: { id: TimeRangeId; label: string }[] = [
	{ id: '1h', label: '1h' },
	{ id: '6h', label: '6h' },
	{ id: '24h', label: '24h' },
	{ id: '7d', label: '7d' },
	{ id: '1m', label: '1m' },
]

type TimeRangeToolbarProps = {
	defaultRange?: TimeRangeId
}

export default function TimeRangeToolbar({ defaultRange = '24h' }: TimeRangeToolbarProps) {
	const [active, setActive] = useState<TimeRangeId>(defaultRange)

	return (
		<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<div className="flex flex-wrap items-center gap-2">
				{RANGES.map((r) => (
					<button
						key={r.id}
						type="button"
						onClick={() => setActive(r.id)}
						className={`rounded-md p-2 text-[14px] font-medium transition ${
							active === r.id
								? 'border border-[#00D4C0] !text-[#00D4C0]'
								: 'border border-transparent text-white/50 hover:text-white/75'
						}`}
					>
						{r.label}
					</button>
				))}
				<button type="button" className="rounded-md p-1 text-white/45 hover:text-white/70" aria-label="More ranges">
					<MoreHorizontal className="h-4 w-4" strokeWidth={1.75} />
				</button>
			</div>
			<button
				type="button"
				className="w-full shrink-0 rounded-md border border-white/20 p-3 text-[14px] font-medium text-white/90 transition hover:border-white/35 hover:bg-white/[0.04] sm:w-auto"
			>
				Export Report
			</button>
		</div>
	)
}
