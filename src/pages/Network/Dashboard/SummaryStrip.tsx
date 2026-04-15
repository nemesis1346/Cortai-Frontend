import { ExternalLink } from 'lucide-react'
import { Progress } from 'antd'
import { chartHex, primitive } from '../../../theme/tokens.generated'
import type { SummaryMetric } from './types'

const toneClassMap: Record<NonNullable<SummaryMetric['tone']>, string> = {
	teal: 'text-brand',
	green: 'text-ok',
	red: 'text-danger',
	blue: 'text-info',
}

const rail = chartHex.brandRail

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
					strokeColor={primitive.SemanticSuccess}
					trailColor={rail}
					format={() => null}
				/>
				<span className="text-[10px] text-text">{v.footnote}</span>
			</div>
		)
	}
	if (v.type === 'bars') {
		return (
			<div className="flex flex-row h-16 items-end justify-end gap-2">
				<div className="flex flex-col items-end justify-end gap-0.5">
					<span className="text-[10px] text-text">{v.left.value}</span>
					<div className="h-8 w-5 bg-text/80" />
					<span className="text-[9px] text-text">{v.left.label}</span>
				</div>
				<div className="flex flex-col items-center gap-0.5">
					<span className="text-[10px] text-brand">{v.right.value}</span>
					<div className="h-10 w-5 bg-brand" />
					<span className="text-[9px] text-text">{v.right.label}</span>
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
				strokeColor={chartHex.brand}
				trailColor={rail}
				format={() => null}
			/>
			<span className="text-[10px] text-text">{v.maxLabel}</span>
		</div>
	)
}

export default function SummaryStrip({ metrics }: SummaryStripProps) {
	return (
		<section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{metrics.map((metric) => (
				<div
					key={metric.id}
					className="relative rounded-xl border border-border bg-card p-3.5"
				>
					<div className="absolute right-3 top-3">
						<button
							type="button"
							className="inline-flex text-text-dim transition-colors hover:text-text"
							aria-label="Open"
						>
							<ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
						</button>
					</div>
					<div className="flex flex-row items-center justify-between gap-2 pr-7">
						<div className="min-w-0 flex-1 flex flex-col gap-2">
							<div className="text-[14px] text-text">{metric.label}</div>
							<div className={`text-[24px] font-semibold leading-none ${toneClassMap[metric.tone ?? 'teal']}`}>
								{metric.value}
							</div>
							<div className="text-[12px] text-text">{metric.subvalue}</div>
						</div>
						<MetricVisual metric={metric} />
					</div>
				</div>
			))}
		</section>
	)
}
