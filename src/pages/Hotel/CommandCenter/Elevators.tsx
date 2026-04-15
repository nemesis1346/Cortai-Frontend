import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Building2, Users, MoreHorizontal } from 'lucide-react'
import { elevatorsMock } from '../../../data/mock'
import { themeDark } from '../../../theme/tokens.generated'
import { useEffect, useState } from 'react'

export default function Elevators() {
	const TOTAL_FLOORS = 13
	type ElevatorItem = {
		id: string
		status: 'Running' | 'Standing'
		floor: number
		ridersPercent: number
		Direction: 'Up' | 'Down' | 'Standing'
		pauseTicks?: number
	}
	const [items, setItems] = useState<ElevatorItem[]>(elevatorsMock.items as unknown as ElevatorItem[])

	// Manual control removed (auto mode only)

	// Auto-move elevators on a timer for mock/demo
	useEffect(() => {
		const interval = setInterval(() => {
			setItems(prev =>
				prev.map(it => {
					// Dwell pause at floor 1
					if (it.floor === 1) {
						const remaining = it.pauseTicks ?? 2
						if (remaining > 0) {
							return { ...it, pauseTicks: remaining - 1, status: 'Standing', Direction: 'Standing' }
						}
					}
					// Standing stays unless at boundary with prior movement; default to Up
					let delta = it.Direction === 'Up' ? 1 : it.Direction === 'Down' ? -1 : 1
					// Bounce at boundaries
					if (it.floor >= TOTAL_FLOORS) delta = -1
					if (it.floor <= 1) delta = 1
					const nextFloor = Math.max(1, Math.min(TOTAL_FLOORS, it.floor + delta))
					const nextDirection =
						nextFloor > it.floor ? 'Up'
						: nextFloor < it.floor ? 'Down'
						: it.Direction
					const nextStatus = nextFloor === 1 ? 'Standing' : 'Running'
					return { ...it, floor: nextFloor, Direction: nextDirection as 'Up' | 'Down' | 'Standing', status: nextStatus, pauseTicks: nextFloor === 1 ? 2 : 0 }
				}),
			)
		}, 1200)
		return () => clearInterval(interval)
	}, [])

	return (
		<Card className="min-h-[240px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Building2 size={20} className="text-brand" />
						<h3 className="card-title">Elevators</h3>
					</div>
				}
				middle={
					<span className="rounded-[6px] bg-[color:var(--primitive-semantic-normal-10)] px-3 py-1 !text-[12px] text-text-dim">
						{elevatorsMock.ridesToday} rides today
					</span>
				}
				right={
					<div className="text-text">
						<MoreHorizontal className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody className="flex flex-row gap-7">
				<div className="flex flex-row gap-3 ">
					{items.map((e) => {
						const bottomPct = ((e.floor - 1) / (TOTAL_FLOORS - 1)) * 100
						return (
						<div key={e.id} className="flex flex-col items-center gap-3">
							<div className="text-text-dim !text-[14px] font-semibold">{e.id.replace('E', 'ELV-')}</div>
							<div className={`px-2 py-1 rounded-[3px] !text-[12px] ${e.status === 'Running' ? 'bg-[color:var(--primitive-semantic-success-10)] text-ok' : 'bg-[color:var(--primitive-semantic-danger-10)] text-danger'}`}>
								{e.status}
							</div>
							<div className="relative h-35 w-[16px] rounded bg-bg">
								<div className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out" style={{ bottom: `calc(${bottomPct}% - 8px)` }}>
									<div
										className="px-2 py-1 rounded-[4px] min-w-[40px]"
										style={{
											background: e.status === 'Running' ? themeDark['WidgetDefaultElevator-success'] : themeDark['WidgetDefaultElevator-danger'],
											color: e.status === 'Running' ? themeDark['WidgetDefaultElevator-txt-success'] : themeDark['WidgetDefaultElevator-txt-danger'],
										}}
									>
										<div className="flex items-center gap-1 justify-center">
											<span className="!text-[12px]">{e.floor}</span>
											<div className="flex flex-col leading-none">
												<svg
													className={`w-3 h-3 fill-current cursor-not-allowed ${e.Direction === 'Up' ? 'opacity-100' : 'opacity-50'}`}
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<polygon points="12,5 19,19 5,19" />
												</svg>
												<svg
													className={`w-3 h-3 -mt-0.5 rotate-180 fill-current cursor-not-allowed ${e.Direction === 'Down' ? 'opacity-100' : 'opacity-50'}`}
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<polygon points="12,5 19,19 5,19" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="text-text-dim !text-[11px]">{`Riders: ${e.ridersPercent}%`}</div>
						</div>
						)
					})}
				</div>
                <div className="flex flex-col w-full">
					<div className="flex flex-col gap-2">
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-text">{elevatorsMock.waitingNow}</div>
							<div className="!text-[14px] text-text-dim">Waiting now / {elevatorsMock.waitingAvg} avg</div>
						</div>
						<div className="flex flex-wrap items-center gap-2">
							{elevatorsMock.alerts.map((a) => (
								<span
									key={a.id}
									className={`inline-flex items-center gap-2 rounded-md px-2 py-1 !text-[11px] ${
										a.color === 'red' ? 'bg-[color:var(--primitive-semantic-danger-10)] text-danger' : 'bg-[color:var(--primitive-accent-yellow-10)] text-warn'
									}`}
								>
									{a.text} <Users className="w-4 h-4 text-text-dim" />
								</span>
							))}
						</div>
					</div>
					<div className="my-3 h-px bg-border" />
					<div>
						<div className="!text-[18px] font-semibold text-text">{elevatorsMock.longestWait}</div>
						<div className="!text-[14px] text-text-mute mt-1">Longest waits today / {elevatorsMock.longestAvg} avg</div>
						<div className="mt-3 flex flex-wrap items-center gap-3">
							{elevatorsMock.timeline.map(t => (
								<span key={t.id} className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 !text-[12px] text-text">
									<span className="text-danger font-medium">{t.left}</span>
									{' · '}{t.mid}{' · '}{t.right}
								</span>
							))}
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

