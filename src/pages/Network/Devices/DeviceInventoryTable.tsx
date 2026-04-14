import { Monitor } from 'lucide-react'
import { useMemo, useState } from 'react'
import { CardBody, CardHeader } from '../../../components/Card'
import type { DeviceInventoryFilter, DeviceInventoryRow } from './types'

const TRAFFIC_COLOR = '#4FD1C5'

const FILTERS: { id: DeviceInventoryFilter; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'active', label: 'Active' },
	{ id: 'iot', label: 'IoT' },
	{ id: 'guest', label: 'Guest' },
]

const STATUS_CLASS: Record<DeviceInventoryRow['status'], string> = {
	active: 'bg-emerald-950/50 text-emerald-400',
	idle: 'bg-white/[0.07] text-white/45',
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
						<Monitor className="h-5 w-5 shrink-0 text-[#00D4C0]" strokeWidth={1.75} />
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
									className={`rounded-[5px] px-3 py-2 text-[12px] font-medium transition ${selected ? 'border border-[#00D4C0] text-white' : 'border border-transparent text-white/55 hover:text-white/80'}`}
								>
									{f.label}
								</button>
							)
						})}
					</nav>
				)}
				right={<span className="rounded-[3px] bg-white/[0.06] px-2 py-1 text-[11px] font-medium text-white/55">{totalBadge}</span>}
			/>
			<CardBody className="pt-1">
				<div className="overflow-x-auto">
					<div className="min-w-[960px]">
						<div className="mt-2 grid grid-cols-[minmax(9rem,1.15fr)_minmax(4.5rem,0.45fr)_minmax(7rem,0.75fr)_minmax(9rem,0.95fr)_minmax(4.5rem,0.35fr)_minmax(3rem,0.25fr)_minmax(4.5rem,0.35fr)] items-end gap-3 border-b border-white/[0.06] pb-2.5 text-[10px] font-semibold uppercase tracking-wide text-white/40">
							<div>Device</div>
							<div>OS</div>
							<div>Source</div>
							<div>Source</div>
							<div>Traffic</div>
							<div>Apps</div>
							<div className="text-right">Status</div>
						</div>
						<div className="divide-y divide-white/[0.06]">
							{visible.map((row) => (
								<div
									key={row.id}
									className="grid grid-cols-[minmax(9rem,1.15fr)_minmax(4.5rem,0.45fr)_minmax(7rem,0.75fr)_minmax(9rem,0.95fr)_minmax(4.5rem,0.35fr)_minmax(3rem,0.25fr)_minmax(4.5rem,0.35fr)] items-center gap-3 py-3 text-[13px] transition hover:bg-white/[0.02]"
								>
									<div className="min-w-0 font-normal leading-snug tracking-tight text-white/[0.92]">{row.device}</div>
									<div className="min-w-0 text-white/50">{row.os}</div>
									<div className="min-w-0 font-mono text-[12px] leading-normal tracking-tight text-white/50">{row.sourceIp}</div>
									<div className="min-w-0 font-mono text-[12px] leading-normal tracking-tight text-white/50">{row.sourceMac}</div>
									<div className="tabular-nums font-medium" style={{ color: TRAFFIC_COLOR }}>{row.traffic}</div>
									<div className="tabular-nums text-white/50">{row.apps}</div>
									<div className="min-w-0 text-right">
										<span className={`inline-flex items-center  rounded-[4px] px-2 py-1 text-[12px] font-medium ${STATUS_CLASS[row.status]}`}>
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
