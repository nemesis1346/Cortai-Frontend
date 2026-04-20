import type { SummaryItem } from './types'

export default function SummaryStrip({ items }: { items: SummaryItem[] }) {
	return (
		<section className="grid grid-cols-2 gap-[1.25rem] md:grid-cols-3 xl:grid-cols-6">
			{items.map((x) => (
				<div
					key={x.label}
					className="rounded-[0.55rem]  bg-card px-[1.25rem] py-[1.25rem]"
				>
					<div className="text-small truncate leading-none text-text-dim">{x.label}</div>
					<div className={`mt-1 text-[1.5rem] font-semibold leading-none tracking-tight ${x.color}`}>{x.value}</div>
				</div>
			))}
		</section>
	)
}
