import { ExternalLink } from 'lucide-react'
import { Progress } from 'antd'
import type { SummaryMetric } from './types'

const toneClassMap: Record<NonNullable<SummaryMetric['tone']>, string> = {
	teal: 'text-[#00D4C0]',
	green: 'text-[#39e079]',
	red: 'text-[#fb7185]',
	blue: 'text-[#22d3ee]',
}

const rail = '#1f2937'

type SummaryStripProps = {
	metrics: SummaryMetric[]
}

function MetricVisual({ metric }: { metric: SummaryMetric }) {
	const v = metric.visual
	if (v.type === 'score') {
		return (
			<div className="flex shrink-0 flex-col items-end justify-end gap-2">
				<Progress
					type="circle"
					percent={v.percent}
					size={42}
					strokeWidth={15}
					strokeLinecap="round"
					strokeColor="#39e079"
					trailColor={rail}
					format={() => null}
				/>
				<span className="text-[10px] text-white/45">{v.footnote}</span>
			</div>
		)
	}
	if (v.type === 'bars') {
		return (
			
			<div className="flex flex-row h-16 items-end justify-end gap-2">
				<div className="flex flex-col items-end justify-end gap-0.5">
					<span className="text-[10px] text-white/50">{v.left.value}</span>
					<div className="h-8 w-5 bg-white/20" />
					<span className="text-[9px] text-white/40">{v.left.label}</span>
				</div>
				<div className="flex flex-col items-center gap-0.5">
					<span className="text-[10px] text-[#00D4C0]">{v.right.value}</span>
					<div className="h-10 w-5 bg-[#00D4C0]" />
					<span className="text-[9px] text-white/40">{v.right.label}</span>
				</div>
			</div>
		)
	}
	return (
		<div className="flex shrink-0 flex-col items-end justify-end gap-2">
			<Progress
				type="circle"
				percent={v.percent}
				size={42}
				strokeWidth={15}
				strokeLinecap="round"
				strokeColor="#00D4C0"
				trailColor={rail}
				format={() => null}
			/>
			<span className="text-[10px] text-white/45">{v.maxLabel}</span>
		</div>
	)
}

export default function SummaryStrip({ metrics }: SummaryStripProps) {
	return (
		<section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{metrics.map((metric) => (
				<div
					key={metric.id}
					className="relative rounded-xl border border-white/10 bg-[#FFFFFF08] p-3.5"
				>
					<div className="absolute right-3 top-3">
						<button
							type="button"
							className="inline-flex text-white/45 transition-colors hover:text-white"
							aria-label="Open"
						>
							<ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
						</button>
					</div>
					<div className="flex flex-row items-center justify-between gap-2 pr-7">
						<div className="min-w-0 flex-1 flex flex-col gap-2">
							<div className="text-[14px] text-white/50">{metric.label}</div>
							<div className={`text-[24px] font-semibold leading-none ${toneClassMap[metric.tone ?? 'teal']}`}>
								{metric.value}
							</div>
							<div className="text-[12px] text-white/50">{metric.subvalue}</div>
						</div>
						<MetricVisual metric={metric} />
					</div>
				</div>
			))}
		</section>
	)
}
