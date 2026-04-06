import KPI from '../../components/KPI'
import { kpis } from '../../data/mock'

export default function KpiPanel() {
	return (
		<div className="grid grid-cols-3 gap-4 min-h-[180px] w-full lg:basis-1/2 lg:flex-1">
			{kpis.map(x => (
				<KPI key={x.label} {...x} />
			))}
		</div>
	)
}

