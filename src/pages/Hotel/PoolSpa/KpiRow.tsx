import { ExternalLink } from 'lucide-react'
import { poolPageMock } from '../../../data/mock'

export default function KpiRow() {
	return (
		<section className="grid grid-cols-2 xl:grid-cols-6 gap-3">
			{poolPageMock.kpis.map((kpi) => (
				<div key={kpi.label} className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
					<div className="flex flex-row items-center justify-between text-[14px] text-white/50">
						<span className="text-[14px] text-white/40">{kpi.label}</span>
						{kpi.showLink ? <ExternalLink className="w-4 h-4 text-white/40" /> : <span />}
					</div>
					<div className={`text-[24px] leading-none mt-2 ${kpi.valueClass}`}>{kpi.value}</div>
				</div>
			))}
		</section>
	)
}
