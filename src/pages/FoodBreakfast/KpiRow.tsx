import { ExternalLink } from 'lucide-react'

const kpis = [
	{ label: 'Guest Served', value: '156', valueClass: 'text-white', showLink: true },
	{ label: 'Current / Capacity', value: '42 / 80', valueClass: 'text-white' },
	{ label: 'First Guest', value: '6:15 am', valueClass: 'text-[#C58B11]' },
	{ label: 'Buffet Dwell', value: '8m', valueClass: 'text-white' },
	{ label: 'Dine-in Time', value: '24m', valueClass: 'text-white' },
	{ label: 'Maintenance', value: '68 / 7:45 am', valueClass: 'text-[#F84C63]' },
]

export default function KpiRow() {
	return (
		<section className="grid grid-cols-2 xl:grid-cols-6 gap-3">
			{kpis.map((kpi) => (
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
