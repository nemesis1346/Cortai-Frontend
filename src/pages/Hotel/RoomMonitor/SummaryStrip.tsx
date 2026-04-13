import type { SummaryItem } from './types'

export default function SummaryStrip({ items }: { items: SummaryItem[] }) {
	return (
		<section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
			{items.map((x) => (
				<div key={x.label} className="rounded-[10px] border border-white/5 bg-[#FFFFFF08] px-4 py-3">
					<div className="text-[14px] text-white/50">{x.label}</div>
					<div className={`text-[24px] ${x.color}`}>{x.value}</div>
				</div>
			))}
		</section>
	)
}

