import { meetingPageMock } from '../../data/mock'

export default function KpiRow() {
	return (
		<section className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
			{meetingPageMock.kpis.map((kpi) => (
				<div key={kpi.label} className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
					<div className="flex flex-row items-center justify-between text-[14px] text-white/50">
						<span className="text-[13px] text-white/40">{kpi.label}</span>
						<span />
					</div>
					<div className={`mt-2 text-[22px] leading-none xl:text-[24px] ${kpi.valueClass}`}>{kpi.value}</div>
				</div>
			))}
		</section>
	)
}
