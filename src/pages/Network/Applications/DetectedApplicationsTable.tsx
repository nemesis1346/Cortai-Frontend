import { FolderOpen } from 'lucide-react'
import { CardBody, CardHeader } from '../../../components/Card'
import TrendSparkline from './TrendSparkline'
import type { AppCategory, DetectedAppRow } from './types'

const BANDWIDTH_TEXT = '#4FD1C5'

const CATEGORY_BADGE: Record<AppCategory, { label: string; className: string }> = {
	business: { label: 'Business', className: 'bg-blue-600/25 text-blue-200' },
	video: { label: 'Video Conference', className: 'bg-teal-600/25 text-teal-200' },
	streaming: { label: 'Streaming', className: 'bg-red-600/25 text-red-300' },
	cloud: { label: 'Cloud', className: 'bg-amber-500/20 text-amber-200' },
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
						<FolderOpen className="h-5 w-5 shrink-0 text-[#00D4C0]" strokeWidth={1.75} />
						<h3 className="card-title !mb-0 text-[15px] font-semibold">Detected Applications</h3>
					</div>
				)}
				right={<span className="rounded-[3px] bg-white/[0.08] px-2 py-1 text-[11px] font-medium text-white/55">{totalBadge}</span>}
			/>
			<CardBody className="pt-1">
				<div className="overflow-x-auto">
					<div className="min-w-[800px]">
						<div className="mt-2 grid grid-cols-[2.5rem_minmax(0,1.5fr)_minmax(10.5rem,1fr)_5.5rem_9rem] items-end gap-3 border-b border-white/[0.06] pb-2.5 text-[10px] font-semibold uppercase tracking-wide text-white/40">
							<div>#</div>
							<div>Applications</div>
							<div>Category</div>
							<div>Bandwidth</div>
							<div className="text-right">Trend</div>
						</div>
						<div className="divide-y divide-white/[0.06]">
							{rows.map((row) => {
								const cat = CATEGORY_BADGE[row.category]
								return (
									<div
										key={row.id}
										className="grid grid-cols-[2.5rem_minmax(0,1.5fr)_minmax(10.5rem,1fr)_5.5rem_9rem] items-center gap-3 py-2 text-[13px] transition hover:bg-white/[0.02]"
									>
										<div className="tabular-nums text-white/45">{row.rank}</div>
										<div className="min-w-0 font-normal leading-snug text-white/90">{row.name}</div>
										<div className="min-w-0">
											<span className={`inline-block rounded-[3px] px-2 py-1 text-[12px] font-medium leading-tight ${cat.className}`}>
												{cat.label}
											</span>
										</div>
										<div className="tabular-nums font-medium" style={{ color: BANDWIDTH_TEXT }}>{row.bandwidthLabel}</div>
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
