import { ExternalLink } from 'lucide-react'
import { poolPageMock } from '../../../data/mock'

export default function KpiRow() {
	return (
		<section className="grid grid-cols-2 gap-[1.25rem] xl:grid-cols-6">
			{poolPageMock.kpis.map((kpi) => (
				<div
					key={kpi.label}
					className="rounded-2xl border border-border/30 bg-card p-4"
				>
					<div className="flex flex-row items-center justify-between text-[0.875rem] text-text-dim">
						<span className="text-[0.875rem] text-text-mute">{kpi.label}</span>
						{kpi.showLink ? <ExternalLink className="w-4 h-4 text-text-mute" /> : <span />}
					</div>
					<div className={`mt-2 text-[1.5rem] leading-none ${kpi.valueClass}`}>{kpi.value}</div>
				</div>
			))}
		</section>
	)
}
