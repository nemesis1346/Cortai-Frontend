import type { CSSProperties } from 'react'
import { Monitor } from 'lucide-react'
import { useMemo, useState } from 'react'
import { CardBody, CardHeader } from '../../../components/Card'
import { primitive } from '../../../theme/tokens.generated'
import type { DeviceInventoryFilter, DeviceInventoryRow } from './types'

const FILTERS: { id: DeviceInventoryFilter; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'active', label: 'Active' },
	{ id: 'iot', label: 'IoT' },
	{ id: 'guest', label: 'Guest' },
]

const STATUS_STYLE: Record<DeviceInventoryRow['status'], CSSProperties> = {
	active: { background: primitive.SemanticSuccess10, color: primitive.SemanticSuccess },
	idle: { background: primitive.SemanticNormal10, color: primitive.SemanticNormal },
}

const STATUS_LABEL: Record<DeviceInventoryRow['status'], string> = {
	active: 'Active',
	idle: 'Idle',
}

type DeviceInventoryTableProps = {
	rows: DeviceInventoryRow[]
	totalBadge: string
}

function filterRows(rows: DeviceInventoryRow[], filter: DeviceInventoryFilter) {
	if (filter === 'all') return rows
	return rows.filter((r) => r.segment === filter)
}

export default function DeviceInventoryTable({ rows, totalBadge }: DeviceInventoryTableProps) {
	const [filter, setFilter] = useState<DeviceInventoryFilter>('all')
	const visible = useMemo(() => filterRows(rows, filter), [rows, filter])

	return (
		<div className="card p-4">
			<CardHeader
				left={(
					<div className="flex items-center gap-2">
						<Monitor className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
						<h3 className="card-title !mb-0 text-[15px] font-semibold">Device Inventory</h3>
					</div>
				)}
				middle={(
					<nav className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Device filters">
						{FILTERS.map((f) => {
							const selected = filter === f.id
							return (
								<button
									key={f.id}
									type="button"
									onClick={() => setFilter(f.id)}
									className={`rounded-[5px] px-3 py-2 text-[12px] font-medium transition ${selected ? 'border border-brand text-text' : 'border border-transparent text-text-dim hover:text-text'}`}
								>
									{f.label}
								</button>
							)
						})}
					</nav>
				)}
				right={<span className="rounded-[3px] bg-panel px-2 py-1 text-[11px] font-medium text-text-dim">{totalBadge}</span>}
			/>
			<CardBody className="pt-1">
				<div className="overflow-x-auto">
					<div className="min-w-[960px]">
						<div className="mt-2 grid grid-cols-[minmax(9rem,1.15fr)_minmax(4.5rem,0.45fr)_minmax(7rem,0.75fr)_minmax(9rem,0.95fr)_minmax(4.5rem,0.35fr)_minmax(3rem,0.25fr)_minmax(4.5rem,0.35fr)] items-end gap-3 border-b border-border pb-2.5 text-[10px] font-semibold uppercase tracking-wide text-text-dim">
							<div>Device</div>
							<div>OS</div>
							<div>Source</div>
							<div>Source</div>
							<div>Traffic</div>
							<div>Apps</div>
							<div className="text-right">Status</div>
						</div>
						<div className="divide-y divide-border">
							{visible.map((row) => (
								<div
									key={row.id}
									className="grid grid-cols-[minmax(9rem,1.15fr)_minmax(4.5rem,0.45fr)_minmax(7rem,0.75fr)_minmax(9rem,0.95fr)_minmax(4.5rem,0.35fr)_minmax(3rem,0.25fr)_minmax(4.5rem,0.35fr)] items-center gap-3 py-3 text-[13px] transition hover:bg-panel"
								>
									<div className="min-w-0 font-normal leading-snug tracking-tight text-text">{row.device}</div>
									<div className="min-w-0 text-text-dim">{row.os}</div>
									<div className="min-w-0 font-mono text-[12px] leading-normal tracking-tight text-text-dim">{row.sourceIp}</div>
									<div className="min-w-0 font-mono text-[12px] leading-normal tracking-tight text-text-dim">{row.sourceMac}</div>
									<div className="tabular-nums font-medium text-brand">{row.traffic}</div>
									<div className="tabular-nums text-text-dim">{row.apps}</div>
									<div className="min-w-0 text-right">
										<span
											className="inline-flex items-center rounded-[4px] px-2 py-1 text-[12px] font-medium"
											style={STATUS_STYLE[row.status]}
										>
											{STATUS_LABEL[row.status]}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</CardBody>
		</div>
	)
}
