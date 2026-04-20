import Card, { CardBody, CardHeader } from '../../../components/Card'
import { ArrowUpDown, MoreHorizontal, ExternalLink, X, Phone } from 'lucide-react'
import { Progress } from 'antd'
import { useEffect, useState } from 'react'
import { housekeepingMock } from '../../../data/mock'
import { primitive } from '../../../theme/tokens.generated'
import requestIcon from '../../../assets/request-icon.svg'
import housekeepingIconUrl from '../../../assets/housekeeping.svg?url'

export default function Housekeeping() {
	const [openModal, setOpenModal] = useState(false)
	const [modalEntered, setModalEntered] = useState(false)
	const staffRows = [
		{ id: 1, name: 'Maria Sanchez', request: 3, guest: 'x4521', room: '305', rooms: '8 / 14', state: 'warn' },
		{ id: 2, name: 'James Wilson', request: 5, guest: 'x4522', room: '512', rooms: '12 done', state: 'done' },
		{ id: 3, name: 'Aisha Patel', request: 4, guest: 'x4523', room: '401', rooms: 'In transit', state: 'transit' },
		{ id: 4, name: 'Carlos Mendez', request: 5, guest: 'x4525', room: '', rooms: 'On break', state: 'break' },
		{ id: 5, name: 'Sophie Chen', request: 7, guest: 'x4527', room: '718', rooms: '5 / 10', state: 'warn' },
		{ id: 6, name: 'Tatiana Arcand', request: 3, guest: 'x4528', room: '308', rooms: '12 done', state: 'done' },
		{ id: 7, name: 'Lincoln Kenter', request: 4, guest: 'x4532', room: '406', rooms: '5 / 10', state: 'warn' },
		{ id: 8, name: 'Haylie Franci', request: 6, guest: 'x4521', room: '612', rooms: '5 / 10', state: 'warn' },
	]

	function stateClass(state: string) {
		if (state === 'done') return 'bg-[color:var(--primitive-semantic-success-10)] text-ok'
		if (state === 'transit') return 'bg-[color:var(--primitive-accent-blue-10)] text-info'
		if (state === 'break') return 'bg-[color:var(--primitive-semantic-normal-10)] text-text-dim'
		return 'bg-[color:var(--primitive-semantic-warning-10)] text-warn'
	}

	useEffect(() => {
		if (!openModal) {
			setModalEntered(false)
			return
		}
		const id = requestAnimationFrame(() => setModalEntered(true))
		return () => cancelAnimationFrame(id)
	}, [openModal])

	return (
		<>
			<Card className="min-h-[8.125rem]">
				<CardHeader
					left={
						<div className="flex items-start gap-2">
							<img src={housekeepingIconUrl} alt="" className="h-5 w-5 shrink-0" />
							<h3 className="card-title">Housekeeping</h3>
						</div>
					}
					middle={
						<div className="btn-group">
							<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text-dim">
								{housekeepingMock.rooms} rooms
							</span>
							<span className="badge-chip bg-[color:var(--primitive-semantic-warning-10)] text-warn">
								{housekeepingMock.staff} staff / {housekeepingMock.avgDiff} avg
							</span>
						</div>
					}
					right={
						<div className="card-header-actions">
							<button type="button" className="card-header-icon-btn" onClick={() => setOpenModal(true)} aria-label="More options">
								<MoreHorizontal />
							</button>
							<button type="button" className="card-header-icon-btn" aria-label="Open external">
								<ExternalLink />
							</button>
						</div>
					}
				/>

				<CardBody className="grid grid-cols-1 xl:grid-cols-[auto_auto_1fr] items-center gap-5 xl:gap-7 justify-self-between py-3">
					<div className="flex items-center gap-2">
						<Progress
							type="circle"
							percent={housekeepingMock.cleanPercent}
							size={42}
							strokeWidth={15}
							strokeLinecap="round"
							strokeColor={primitive.SemanticSuccess}
							railColor={primitive.AccentGreen20}
							format={() => null}
						/>
						<div className="flex flex-col gap-1 text-start">
							<div className="text-large-semibold text-ok">{housekeepingMock.cleanPercent}%</div>
							<div className="text-normal text-text-dim">Done {housekeepingMock.done} / {housekeepingMock.rooms}</div>
						</div>
					</div>

					<div className="flex items-center gap-2 justify-self-between">
						<Progress
							type="circle"
							percent={housekeepingMock.dirtyPercent}
							size={42}
							strokeWidth={15}
							strokeLinecap="round"
							strokeColor={primitive.SemanticWarning}
							railColor={primitive.AccentYellow20}
							format={() => null}
						/>
						<div className="flex flex-col gap-1 text-start">
							<div className="text-large-semibold text-warn">{housekeepingMock.dirtyPercent}%</div>
							<div className="text-normal text-text-dim">Efficiency</div>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[auto_auto_repeat(4,auto)] items-center gap-5 justify-self-between">
						<div className="flex flex-col gap-1">
							<div className="flex items-baseline gap-4">
								<div className="text-large-semibold text-text">{housekeepingMock.avgCleanTimeMins}m</div>
								<div className="flex items-center text-ok">
									<span className="text-normal">{housekeepingMock.turnaroundMins}m</span>
									<svg className="inline" width="0.875rem" height="0.875rem" viewBox="0 0 24 24">
										<path fill="currentColor" d="M12 21l-6-6h4V3h4v12h4z" />
									</svg>
								</div>
							</div>
							<div className="text-normal text-text-dim">Avg Clean Time</div>
						</div>
						<div className="flex flex-col gap-1 text-start">
							<div className="text-large-semibold text-text">{housekeepingMock.inProcess}</div>
							<div className="text-normal text-text-dim">In Process</div>
						</div>
						<div className="flex flex-col gap-1 text-start">
							<div className="text-large-semibold text-text">{housekeepingMock.inTransit}</div>
							<div className="text-normal text-text-dim">In Transit</div>
						</div>
						<div className="flex flex-col gap-1 text-start">
							<div className="text-large-semibold text-text">{housekeepingMock.onBreak}</div>
							<div className="text-normal text-text-dim">On Break</div>
						</div>
						<div className="flex flex-col gap-1 text-start">
							<div className="text-large-semibold text-text">{housekeepingMock.dnd}</div>
							<div className="text-normal text-text-dim">DND</div>
						</div>
					</div>
				</CardBody>
			</Card>

			{openModal && (
				<div
					className={`fixed inset-0 z-[70] p-[0.75rem] flex items-center justify-center transition-all duration-250 ${modalEntered ? 'bg-black/60' : 'bg-black/0'}`}
					onClick={() => setOpenModal(false)}
				>
					<div
						className={`w-[min(37.5rem,calc(100vw-1.5rem))] rounded-2xl border-[0.375rem] border-border bg-bg px-3 sm:px-6 overflow-hidden transition-all duration-300 ease-out ${modalEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-[0.98]'}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between py-3">
							<h3 className="text-popup-title text-text">Staff on duty</h3>
							<button type="button" onClick={() => setOpenModal(false)} className="text-text">
								<X className="h-8 w-8" />
							</button>
						</div>
						<div className="text-table-header grid min-w-[32.5rem] grid-cols-[1fr_5rem_6.25rem_5rem] border-b border-border py-3 text-text">
							<div className="inline-flex min-w-0 items-center gap-1">
								<span className="truncate">REQUEST / GUEST</span>
								<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
							</div>
							<div className="inline-flex items-center gap-1">
								ROOM
								<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
							</div>
							<div className="inline-flex items-center gap-1">
								ROOMS
								<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
							</div>
							<div className="inline-flex items-center justify-end gap-1 text-right">
								ACTION
								<ArrowUpDown className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
							</div>
						</div>
						<div className="max-h-[60vh] overflow-auto divide-y divide-border">
							{staffRows.map((s) => (
								<div key={s.id} className="py-3 min-w-[32.5rem] grid grid-cols-[1fr_5rem_6.25rem_5rem] items-center">
									<div className="flex items-center gap-3">
										<div className="relative w-[2.25rem] h-[2.25rem] rounded-full bg-brand/[0.1] flex items-center justify-center text-brand text-sm">
											{s.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
											<span className="absolute right-0 top-0 w-[0.5625rem] h-[0.5625rem] rounded-full bg-ok" />
										</div>
										<div className="flex flex-col gap-2">
											<div className="text-normal text-text">{s.name}</div>
											<div className="text-small inline-flex items-center gap-1 text-text-dim">
												<img src={requestIcon} alt="" className="w-4 h-4" />
												<span>{s.request} &nbsp; {s.guest}</span>
											</div>
										</div>
									</div>
									<div>
										{s.room ? <span className="text-normal rounded-md bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-text-dim">{s.room}</span> : null}
									</div>
									<div>
										<span className={`text-normal rounded-md px-2 py-1 ${stateClass(s.state)}`}>{s.rooms}</span>
									</div>
									<div className="text-right">
										<button
											type="button"
											className="w-[2.5rem] h-[2.5rem] rounded-[0.375rem] border border-[color:var(--primitive-white-shadow-10)] bg-[color:var(--primitive-white-shadow-2)] inline-flex items-center justify-center text-text p-[0.625rem] hover:border-[color:var(--primitive-white-shadow-20)] hover:bg-[color:var(--primitive-white-shadow-5)] focus-visible:border-[color:var(--primitive-white-shadow-20)] focus-visible:bg-[color:var(--primitive-white-shadow-5)] disabled:border-[color:var(--primitive-white-shadow-10)] disabled:bg-transparent"
										>
											<Phone className="w-[1.5rem] h-[1.5rem]" />
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="flex items-center justify-between border-t border-border py-3">
							<button type="button" onClick={() => setOpenModal(false)} className="cortai-text-btn cortai-text-btn--secondary">
								Close
							</button>
							<button type="button" className="cortai-text-btn cortai-text-btn--primary">
								Housekeeping Overview
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

