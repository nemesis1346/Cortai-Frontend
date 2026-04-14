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
								? 'border border-brand text-text'
								: 'border border-transparent text-text-dim hover:text-text'
						}`}
					>
						{r.label}
					</button>
				))}
				<button type="button" className="rounded-md p-1 text-text-mute hover:text-text-dim" aria-label="More ranges">
					<MoreHorizontal className="h-4 w-4" strokeWidth={1.75} />
				</button>
			</div>
			<button
				type="button"
				className="w-full shrink-0 rounded-md border border-border p-3 text-[14px] font-medium text-text transition hover:border-[color:var(--primitive-white-shadow-30)] hover:bg-[color:var(--primitive-white-shadow-5)] sm:w-auto"
			>
				Export Report
			</button>
		</div>
	)
}
