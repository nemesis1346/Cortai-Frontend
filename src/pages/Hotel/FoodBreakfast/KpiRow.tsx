import { ExternalLink } from 'lucide-react'

const kpis = [
	{ label: 'Guest Served', value: '156', valueClass: 'text-text', showLink: true },
	{ label: 'Current / Capacity', value: '42 / 80', valueClass: 'text-text' },
	{ label: 'First Guest', value: '6:15 am', valueClass: 'text-warn' },
	{ label: 'Buffet Dwell', value: '8m', valueClass: 'text-text' },
	{ label: 'Dine-in Time', value: '24m', valueClass: 'text-text' },
	{ label: 'Maintenance', value: '68 / 7:45 am', valueClass: 'text-danger' },
]

export default function KpiRow() {
	return (
		<section className="grid grid-cols-2 xl:grid-cols-6 gap-3">
			{kpis.map((kpi) => (
				<div key={kpi.label} className="rounded-2xl border border-border bg-panel p-4">
					<div className="flex flex-row items-center justify-between text-[14px] text-text-dim">
						<span className="text-[14px] text-text-dim">{kpi.label}</span>
						{kpi.showLink ? <ExternalLink className="w-4 h-4 text-text-dim" /> : <span />}
					</div>
					<div className={`text-[24px] leading-none mt-2 ${kpi.valueClass}`}>{kpi.value}</div>
				</div>
			))}
		</section>
	)
}
