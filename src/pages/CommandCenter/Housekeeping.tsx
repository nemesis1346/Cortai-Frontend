import Card, { CardBody, CardHeader } from '../../components/Card'
import { BaggageClaim, MoreHorizontal, ExternalLink, X, Phone } from 'lucide-react'
import { Progress } from 'antd'
import { useEffect, useState } from 'react'
import { housekeepingMock } from '../../data/mock'
import requestIcon from '../../assets/request-icon.svg'

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
		if (state === 'done') return 'bg-green-500/20 text-green-500'
		if (state === 'transit') return 'bg-cyan-500/20 text-cyan-400'
		if (state === 'break') return 'bg-white/15 text-white/70'
		return 'bg-amber-500/20 text-amber-400'
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
			<Card className="min-h-[130px]">
				<CardHeader
					left={
						<div className="flex gap-2 !text-[18px]">
							<BaggageClaim size={20} className="text-teal-400" />
							<h3 className="card-title">Housekeeping</h3>
						</div>
					}
					middle={
						<div className="flex items-center gap-3 text-xs">
							<span className="rounded-[3px] bg-white/20 px-3 py-1 text-white/70">
								{housekeepingMock.rooms} rooms
							</span>
							<span className="rounded-[3px] bg-amber-400/30 px-3 py-1 text-amber-200">
								{housekeepingMock.staff} staff / {housekeepingMock.avgDiff} avg
							</span>
						</div>
					}
					right={
						<div className="flex items-center gap-3 text-white/80">
							<button type="button" onClick={() => setOpenModal(true)} className="inline-flex">
								<MoreHorizontal className="w-5 h-5" />
							</button>
							<ExternalLink className="w-5 h-5" />
						</div>
					}
				/>

				<CardBody className="grid grid-cols-[auto_auto_1fr] items-center gap-7 justify-self-between py-3">
					<div className="flex items-center gap-2">
						<Progress
							type="circle"
							percent={housekeepingMock.cleanPercent}
							size={42}
							strokeWidth={15}
							strokeLinecap="round"
							strokeColor="#22c55e"
							railColor="#04D40033"
							format={() => null}
						/>
						<div className="text-start">
							<div className="!text-[18px] font-semibold text-[#22c55e]">{housekeepingMock.cleanPercent}%</div>
							<div className="!text-[14px] text-white/50">Done {housekeepingMock.done} / {housekeepingMock.rooms}</div>
						</div>
					</div>

					<div className="flex items-center gap-2 justify-self-between">
						<Progress
							type="circle"
							percent={housekeepingMock.dirtyPercent}
							size={42}
							strokeWidth={15}
							strokeLinecap="round"
							strokeColor="#C58B11"
							railColor="#EDB13233"
							format={() => null}
						/>
						<div className="text-start">
							<div className="!text-[18px] font-semibold text-[#d97706]">{housekeepingMock.dirtyPercent}%</div>
							<div className="!text-[14px] text-white/50 pt-1">Efficiency</div>
						</div>
					</div>

					<div className="grid grid-cols-[auto_auto_repeat(4,auto)] items-center gap-5 justify-self-between">
						<div className="flex flex-col">
							<div className="flex items-baseline gap-4">
								<div className="!text-[18px] text-white">{housekeepingMock.avgCleanTimeMins}m</div>
								<div className="flex items-center text-green-500">
									<span className="!text-[14px]">{housekeepingMock.turnaroundMins}m</span>
									<svg className="inline" width="14" height="14" viewBox="0 0 24 24">
										<path fill="currentColor" d="M12 21l-6-6h4V3h4v12h4z" />
									</svg>
								</div>
							</div>
							<div className="!text-[14px] text-white/50 pt-1">Avg Clean Time</div>
						</div>
						<div className="text-start">
							<div className="!text-[18px] text-white">{housekeepingMock.inProcess}</div>
							<div className="!text-[14px] text-white/50 pt-1">In Process</div>
						</div>
						<div className="text-start">
							<div className="!text-[18px] text-white">{housekeepingMock.inTransit}</div>
							<div className="!text-[14px] text-white/50 pt-1">In Transit</div>
						</div>
						<div className="text-start">
							<div className="!text-[18px] text-white">{housekeepingMock.onBreak}</div>
							<div className="!text-[14px] text-white/50 pt-1">On Break</div>
						</div>
						<div className="text-start">
							<div className="!text-[18px] text-white">{housekeepingMock.dnd}</div>
							<div className="!text-[14px] text-white/50 pt-1">DND</div>
						</div>
					</div>
				</CardBody>
			</Card>

			{openModal && (
				<div
					className={`fixed inset-0 z-[70] p-3 flex items-center justify-center transition-all duration-250 ${modalEntered ? 'bg-black/60' : 'bg-black/0'}`}
					onClick={() => setOpenModal(false)}
				>
					<div
						className={`w-[600px] rounded-2xl border border-[#FFFFFF33] border-[6px] bg-[#151d22] px-6 overflow-hidden transition-all duration-300 ease-out ${modalEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-[0.98]'}`}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between py-3">
							<h3 className="!text-[18px] text-white">Staff on duty</h3>
							<button type="button" onClick={() => setOpenModal(false)} className="text-white/70">
								<X className="w-[32px] h-[32px]" />
							</button>
						</div>
						<div className="py-3 grid grid-cols-[1fr_80px_100px_80px] !text-[10px] text-white/40 border-b border-white/10">
							<div>REQUEST / GUEST</div>
							<div>ROOM</div>
							<div>ROOMS</div>
							<div className="text-right">ACTION</div>
						</div>
						<div className="max-h-[60vh] overflow-y-auto  divide-y divide-white/10 ">
							{staffRows.map((s) => (
								<div key={s.id} className="py-3 grid grid-cols-[1fr_80px_100px_80px] items-center ">
									<div className="flex items-center gap-3">
										<div className="relative w-[36px] h-[36px] rounded-full bg-white/20 flex items-center justify-center text-white/90 text-sm">
											{s.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
											<span className="absolute right-0 top-0 w-[9px] h-[9px] rounded-full bg-lime-500" />
										</div>
										<div className="flex flex-col gap-2">
											<div className="text-white !text-[14px]">{s.name}</div>
											<div className="text-white/60 !text-[12px] inline-flex items-center gap-1">
												<img src={requestIcon} alt="" className="w-4 h-4" />
												<span>{s.request} &nbsp; {s.guest}</span>
											</div>
										</div>
									</div>
									<div>
										{s.room ? <span className="rounded-md bg-white/10 px-2 py-1 !text-[14px] text-white/70">{s.room}</span> : null}
									</div>
									<div>
										<span className={`rounded-md px-2 text-[14px] py-1 ${stateClass(s.state)}`}>{s.rooms}</span>
									</div>
									<div className="text-right">
										<button type="button" className="w-[32px] h-[32px] rounded-md border border-white/15 inline-flex items-center justify-center text-white/70">
											<Phone className="w-[16px] h-[16px]" />
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="flex items-center justify-between py-3 border-t border-white/10">
							<button type="button" onClick={() => setOpenModal(false)} className="px-4 py-3 rounded-lg border border-white/15 text-white/80">Close</button>
							<button type="button" className="px-4 py-3 rounded-lg bg-[#0aa5a5] !text-[14px] text-white">Housekeeping Overview</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

