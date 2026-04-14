import type { CSSProperties } from 'react'
import { FolderOpen } from 'lucide-react'
import { CardBody, CardHeader } from '../../../components/Card'
import { primitive } from '../../../theme/tokens.generated'
import TrendSparkline from './TrendSparkline'
import type { AppCategory, DetectedAppRow } from './types'

const CATEGORY_BADGE: Record<AppCategory, { label: string; chipStyle: CSSProperties }> = {
	business: { label: 'Business', chipStyle: { background: primitive.AccentBlue10, color: primitive.AccentBlue } },
	video: { label: 'Video Conference', chipStyle: { background: primitive.BrandShadow10, color: primitive.Brand500 } },
	streaming: { label: 'Streaming', chipStyle: { background: primitive.SemanticDanger10, color: primitive.SemanticDanger } },
	cloud: { label: 'Cloud', chipStyle: { background: primitive.AccentOrange10, color: primitive.AccentOrange } },
}

type DetectedApplicationsTableProps = {
	rows: DetectedAppRow[]
	totalBadge: string
}

export default function DetectedApplicationsTable({ rows, totalBadge }: DetectedApplicationsTableProps) {
	return (
		<div className="card p-4">
			<CardHeader
				left={(
					<div className="flex items-center gap-2">
						<FolderOpen className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
						<h3 className="card-title !mb-0 text-[15px] font-semibold">Detected Applications</h3>
					</div>
				)}
				right={<span className="rounded-[3px] bg-panel px-2 py-1 text-[11px] font-medium text-text-dim">{totalBadge}</span>}
			/>
			<CardBody className="pt-1">
				<div className="overflow-x-auto">
					<div className="min-w-[800px]">
						<div className="mt-2 grid grid-cols-[2.5rem_minmax(0,1.5fr)_minmax(10.5rem,1fr)_5.5rem_9rem] items-end gap-3 border-b border-border pb-2.5 text-[10px] font-semibold uppercase tracking-wide text-text-dim">
							<div>#</div>
							<div>Applications</div>
							<div>Category</div>
							<div>Bandwidth</div>
							<div className="text-right">Trend</div>
						</div>
						<div className="divide-y divide-border">
							{rows.map((row) => {
								const cat = CATEGORY_BADGE[row.category]
								return (
									<div
										key={row.id}
										className="grid grid-cols-[2.5rem_minmax(0,1.5fr)_minmax(10.5rem,1fr)_5.5rem_9rem] items-center gap-3 py-2 text-[13px] transition hover:bg-panel"
									>
										<div className="tabular-nums text-text-dim">{row.rank}</div>
										<div className="min-w-0 font-normal leading-snug text-text">{row.name}</div>
										<div className="min-w-0">
											<span
												className="inline-block rounded-[3px] px-2 py-1 text-[12px] font-medium leading-tight"
												style={cat.chipStyle}
											>
												{cat.label}
											</span>
										</div>
										<div className="tabular-nums font-medium text-brand">{row.bandwidthLabel}</div>
										<div className="flex justify-center">
											<TrendSparkline points={row.trend} />
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</CardBody>
		</div>
	)
}
