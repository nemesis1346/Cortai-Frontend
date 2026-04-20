import { ExternalLink } from 'lucide-react'
import { fitnessPageMock } from '../../../data/mock'

export default function KpiRow() {
	return (
		<section className="grid grid-cols-2 gap-[1.25rem] md:grid-cols-4 xl:grid-cols-7">
			{fitnessPageMock.kpis.map((kpi) => (
				<div key={kpi.label} className="rounded-2xl border border-border/30 bg-card p-4">
					<div className="flex flex-row items-center justify-between text-[0.875rem] text-text-dim">
						<span className="text-[0.8125rem] text-text-mute">{kpi.label}</span>
						{kpi.showLink ? <ExternalLink className="h-4 w-4 shrink-0 text-text-mute" /> : <span />}
					</div>
					<div className={`mt-2 text-[1.375rem] leading-none xl:text-[1.5rem] ${kpi.valueClass}`}>{kpi.value}</div>
				</div>
			))}
		</section>
	)
}
