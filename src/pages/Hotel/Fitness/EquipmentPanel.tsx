import { useMemo } from 'react'
import { Dumbbell } from 'lucide-react'
import { Progress } from 'antd'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'
import { primitive } from '../../../theme/tokens.generated'

function formatPercent(n: number) {
	return (Number.isInteger(n) ? String(n) : n.toFixed(1)) + '%'
}

export default function EquipmentPanel() {
	const rows = fitnessPageMock.equipmentRows
	const summary = useMemo(() => {
		let inUse = 0
		let units = 0
		let uses = 0
		for (const r of rows) {
			inUse += r.ratioInUse
			units += r.ratioTotal
			uses += r.usesToday
		}
		return { inUse, units, uses }
	}, [rows])

	return (
		<Card className="rounded-2xl border border-border bg-panel">
			<CardHeader
				left={(
					<div className="flex items-center gap-2 text-[18px] font-medium text-text">
						<Dumbbell className="h-5 w-5 text-brand" strokeWidth={1.75} />
						<span>Equipment Usage</span>
					</div>
				)}
				middle={<span />}
				right={(
					<span className="text-[12px] text-text-dim">
						{summary.inUse}/{summary.units} in use · {summary.uses} uses today
					</span>
				)}
			/>
			<CardBody className="pt-0">
				<div className="mt-4 overflow-x-auto rounded-xl">
					<div className="min-w-[640px]">
						{rows.map((r) => (
							<div
								key={r.id}
								className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,5.75rem)_minmax(0,3.25rem)_minmax(0,4.75rem)_minmax(0,3.25rem)_minmax(0,0.5fr)] items-center gap-2 border-b border-border py-2.5 text-[13px] last:border-b-0"
							>
								<span className="font-medium text-text">{r.name}</span>
								<div className="flex items-center gap-2">
									<Progress
										type="circle"
										percent={r.percent}
										size={28}
										strokeWidth={12}
										strokeLinecap="round"
										strokeColor={primitive.AccentBlue}
										railColor={primitive.AccentBlue20}
										format={() => null}
									/>
									<span className="tabular-nums text-text">{formatPercent(r.percent)}</span>
								</div>
								<span className="text-center text-[13px] font-bold tabular-nums text-text">
									{r.ratioInUse}/{r.ratioTotal}
								</span>
								<span className="text-[12px] text-text-dim">{r.usesToday} uses</span>
								<span className="text-[12px] text-text-dim">{r.avgDuration}</span>
								<div className="flex justify-end">
									{r.status === 'good' ? (
										<span
											className="rounded-[3px] px-2 py-1 text-[12px] font-medium"
											style={{ background: primitive.SemanticSuccess10, color: primitive.SemanticSuccess }}
										>
											Good
										</span>
									) : (
										<span
											className="rounded-[3px] px-2 py-1 text-[12px] font-medium"
											style={{ background: primitive.SemanticWarning10, color: primitive.SemanticWarning }}
										>
											Attention
										</span>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
