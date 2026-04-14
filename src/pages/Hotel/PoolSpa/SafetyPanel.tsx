import { AlertCircle, AlertTriangle, OctagonAlert, PersonStanding } from 'lucide-react'
import { poolPageMock } from '../../../data/mock'
import { primitive } from '../../../theme/tokens.generated'

type ViolationKind = 'slip' | 'running' | 'jumping'

function ViolationIcon({ kind, className }: { kind: ViolationKind; className?: string }) {
	const cn = `h-4 w-4 shrink-0 ${className ?? ''}`
	if (kind === 'slip') return <OctagonAlert className={cn} strokeWidth={2} />
	if (kind === 'running') return <AlertCircle className={cn} strokeWidth={2} />
	return <AlertTriangle className={cn} strokeWidth={2} />
}

function SummaryIcon({ id }: { id: ViolationKind }) {
	if (id === 'slip') return <OctagonAlert className="h-5 w-5 text-danger" strokeWidth={2} />
	if (id === 'running') return <AlertCircle className="h-5 w-5 text-warn" strokeWidth={2} />
	return <AlertTriangle className="h-5 w-5 text-[color:var(--primitive-accent-orange)]" strokeWidth={2} />
}

export default function SafetyPanel() {
	const sum = poolPageMock.safetySummary
	return (
		<div className="rounded-2xl border border-border bg-panel p-4">
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-2">
				<div className="flex items-center gap-2 min-w-0">
					<PersonStanding className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
					<span className="text-[18px] font-medium text-text">Safety Violations</span>
				</div>
				<div className="flex justify-center sm:justify-center">
					<span
						className="rounded-[3px] px-2 py-1 text-[13px] font-semibold"
						style={{ background: primitive.SemanticDanger10, color: primitive.SemanticDanger }}
					>
						{sum.activeCount} active
					</span>
				</div>
				<div className="text-[13px] text-text-dim sm:justify-self-end">{sum.todayCount} today</div>
			</div>

			<div className="mt-5 flex flex-row flex-wrap justify-between gap-6 border-b border-border pb-5 ">
				{sum.categories.map((c) => (
					<div key={c.id} className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-left">
						<div className="flex flex-row items-center gap-2">
							<SummaryIcon id={c.id} />
							<div
								className={`text-[18px] font-bold leading-none ${
									c.id === 'slip' ? 'text-danger' : 'text-warn'
								}`}
							>
								{c.count}
							</div>
						</div>
						<div className="text-[14px] leading-snug text-text-dim">
							{c.label} · Avg {c.avgPerDay}/day
						</div>
					</div>
				))}
			</div>

			<div className="mt-5 text-[15px] font-medium text-text">Today&apos;s Detections</div>
			<div className="mt-3 overflow-x-auto rounded-xl">
				<div className="min-w-[520px] sm:min-w-0">
					{poolPageMock.safetyRows.map((row, i) => (
						<div
							key={row.id}
							className={`grid grid-cols-[0.4fr_1.5fr_0.5fr_0.3fr] gap-2 py-3 text-[13px] items-center ${i > 0 ? 'border-t border-border' : ''}`}
						>
							<div className="flex min-w-0 items-center gap-2">
								<ViolationIcon
									kind={row.kind}
									className={
										row.kind === 'slip'
											? 'text-danger'
											: row.kind === 'running'
												? 'text-warn'
												: 'text-[color:var(--primitive-accent-orange)]'
									}
								/>
								<span className="truncate text-text">{row.type}</span>
							</div>
							<span className="min-w-0 break-words text-text-dim">{row.location}</span>
							<span className="text-text-dim whitespace-nowrap">{row.time}</span>
							<div className="flex justify-end">
								{row.status === 'Resolved' ? (
									<span
										className="rounded-[3px] px-2 py-1 text-[12px] font-medium"
										style={{ background: primitive.SemanticSuccess10, color: primitive.SemanticSuccess }}
									>
										Resolved
									</span>
								) : (
									<span
										className="inline-flex items-center gap-1 rounded-[3px] px-2 py-1 text-[12px] font-medium text-danger"
										style={{ background: primitive.SemanticDanger10 }}
									>
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
