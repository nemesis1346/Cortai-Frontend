import { meetingPageMock } from '../../../data/mock'

export default function KpiRow() {
	return (
		<section className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
			{meetingPageMock.kpis.map((kpi) => (
				<div key={kpi.label} className="rounded-2xl border border-border bg-panel p-4">
					<div className="flex flex-row items-center justify-between text-[14px] text-text-dim">
						<span className="text-[13px] text-text-mute">{kpi.label}</span>
						<span />
					</div>
					<div className={`mt-2 text-[22px] leading-none xl:text-[24px] ${kpi.valueClass}`}>{kpi.value}</div>
				</div>
			))}
		</section>
	)
}
