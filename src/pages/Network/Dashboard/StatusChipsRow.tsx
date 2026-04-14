import { ExternalLink } from 'lucide-react'
import type { StatusChip, StatusChipTheme } from './types'

const cardThemeMap: Record<StatusChipTheme, string> = {
	green: 'border-border bg-[color:var(--primitive-semantic-success-10)]',
	red: 'border-warn/35 bg-[color:var(--primitive-accent-orange-10)]',
	teal: 'border-brand/35 bg-brand/10',
	purple: 'border-[color:var(--primitive-accent-purple-10)] bg-[color:var(--primitive-accent-purple-10)]',
}

const badgeThemeMap: Record<StatusChipTheme, string> = {
	green: 'bg-[color:var(--primitive-semantic-success-10)] text-ok',
	red: 'bg-[color:var(--primitive-semantic-danger-10)] text-danger',
	teal: 'bg-brand/10 text-brand',
	purple: 'bg-[color:var(--primitive-accent-purple-10)] text-[color:var(--primitive-accent-purple)]',
}

type StatusChipsRowProps = {
	items: StatusChip[]
}

export default function StatusChipsRow({ items }: StatusChipsRowProps) {
	return (
		<section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
			{items.map((item) => (
				<div
					key={item.id}
					className={`relative rounded-xl border p-3 ${cardThemeMap[item.theme]}`}
				>
					<div className="flex items-start justify-end gap-2 pr-1">
						<button
							type="button"
							className="inline-flex shrink-0 text-text-dim transition-colors hover:text-text"
							aria-label="Open"
						>
							<ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
						</button>
					</div>
					<div className="flex flex-col gap-2 justify-center items-start px-2">
						<div className="text-[14px] font-medium text-text">{item.label}</div>
						<div className="flex flex-row items-center gap-1">
							<span className={`inline-flex rounded-[3px] px-2 py-1 text-[12px] font-medium ${badgeThemeMap[item.theme]}`}>
								{item.badge}
							</span>
							{item.secondaryText ? (
								<span className="text-[12px] text-text-dim">{item.secondaryText}</span>
							) : null}
						</div>
					</div>
				</div>
			))}
		</section>
	)
}
