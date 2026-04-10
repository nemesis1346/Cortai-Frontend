import { AlertCircle, AlertTriangle, OctagonAlert, PersonStanding } from 'lucide-react'
import { poolPageMock } from '../../data/mock'

type ViolationKind = 'slip' | 'running' | 'jumping'

function ViolationIcon({ kind, className }: { kind: ViolationKind; className?: string }) {
	const cn = `h-4 w-4 shrink-0 ${className ?? ''}`
	if (kind === 'slip') return <OctagonAlert className={cn} strokeWidth={2} />
	if (kind === 'running') return <AlertCircle className={cn} strokeWidth={2} />
	return <AlertTriangle className={cn} strokeWidth={2} />
}

function SummaryIcon({ id }: { id: ViolationKind }) {
	if (id === 'slip') return <OctagonAlert className="h-5 w-5 text-red-500" strokeWidth={2} />
	if (id === 'running') return <AlertCircle className="h-5 w-5 text-amber-400" strokeWidth={2} />
	return <AlertTriangle className="h-5 w-5 text-[#ea580c]" strokeWidth={2} />
}

export default function SafetyPanel() {
	const sum = poolPageMock.safetySummary
	return (
		<div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-2">
				<div className="flex items-center gap-2 min-w-0">
					<PersonStanding className="h-5 w-5 shrink-0 text-[#00d4c0]" strokeWidth={1.75} />
					<span className="text-[18px] font-medium text-white">Safety Violations</span>
				</div>
				<div className="flex justify-center sm:justify-center">
					<span className="rounded-[3px] bg-[#F842471A] px-2 py-1 text-[13px] font-semibold text-[#F84247]">
						{sum.activeCount} active
					</span>
				</div>
				<div className="text-[13px] text-white/45 sm:justify-self-end">{sum.todayCount} today</div>
			</div>

			<div className="mt-5 flex flex-row flex-wrap justify-between gap-6 border-b border-white/10 pb-5 ">
				{sum.categories.map((c) => (
					<div key={c.id} className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-left">
						<div className="flex flex-row items-center gap-2">
							<SummaryIcon id={c.id} />
							<div
								className={`text-[18px] font-bold leading-none ${
									c.id === 'slip'
										? 'text-[#f87171]'
										: c.id === 'running'
											? 'text-[#fb923c]'
											: 'text-[#fb923c]'
								}`}
							>
								{c.count}
							</div>
						</div>
						<div className="text-[14px] leading-snug text-white/45">
							{c.label} · Avg {c.avgPerDay}/day
						</div>
					</div>
				))}
			</div>

			<div className="mt-5 text-[15px] font-medium text-white/80">Today&apos;s Detections</div>
			<div className="mt-3 overflow-x-auto rounded-xl">
				<div className="min-w-[520px] sm:min-w-0">
					{poolPageMock.safetyRows.map((row, i) => (
						<div
							key={row.id}
							className={`grid grid-cols-[0.4fr_1.5fr_0.5fr_0.3fr] gap-2 py-3 text-[13px] items-center ${i > 0 ? 'border-t border-white/[0.06]' : ''}`}
						>
							<div className="flex min-w-0 items-center gap-2">
								<ViolationIcon
									kind={row.kind}
									className={
										row.kind === 'slip'
											? 'text-red-400'
											: row.kind === 'running'
												? 'text-amber-400'
												: 'text-[#ea580c]'
									}
								/>
								<span className="truncate text-white/95">{row.type}</span>
							</div>
							<span className="min-w-0 break-words text-white/50">{row.location}</span>
							<span className="text-white/50 whitespace-nowrap">{row.time}</span>
							<div className="flex justify-end">
								{row.status === 'Resolved' ? (
									<span className="rounded-[3px] bg-[#14532d]/50 px-2 py-1 text-[12px] font-medium text-[#22c55e]">
										Resolved
									</span>
								) : (
									<span className="inline-flex items-center gap-1 rounded-[3px] bg-[#450a0a] px-2 py-1 text-[12px] font-medium text-red-400">
										<AlertCircle className="h-3.5 w-3.5 shrink-0" />
										Active
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
