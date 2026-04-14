import { useEffect, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import type { Room } from './types'

type DetailTab = 'overview' | 'assets' | 'history'

type SelectedRoom = {
	room: Room
	level: number
} | null

export default function RoomDetailAside({
	selectedRoom,
	visible,
	onClose,
}: {
	selectedRoom: SelectedRoom
	visible: boolean
	onClose: () => void
}) {
	const [activeDetailTab, setActiveDetailTab] = useState<DetailTab>('overview')

	useEffect(() => {
		if (selectedRoom) setActiveDetailTab('overview')
	}, [selectedRoom])

	return (
		<aside
			className={`hidden 2xl:block h-full min-h-[780px] overflow-y-auto rounded-2xl border border-border bg-card p-4 md:p-5 transition-all duration-300 ${
				visible ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'
			}`}
		>
			{selectedRoom ? (
				<>
					<div className="flex flex-row items-start justify-between border-b border-border pb-3">
						<div>
							<div className="flex items-center gap-2">
								<div className="text-[18px] text-text leading-none">Room {selectedRoom.room.no}</div>
								<span className="rounded-md bg-panel px-1 py-1 !text-[12px] text-text-dim">Occupied</span>
							</div>
							<div className="mt-1 text-[14px] text-text-dim">One-Bedroom Suite - Floor {selectedRoom.level}</div>
						</div>
						<button
							type="button"
							onClick={onClose}
							className="w-9 h-9 rounded-md text-text-dim inline-flex items-center justify-center"
						>
							<X className="w-5 h-5" />
						</button>
					</div>
					<div className="mt-4 flex flex-row items-center gap-4 text-[12px]">
						<button
							type="button"
							onClick={() => setActiveDetailTab('overview')}
							className={`rounded-md border px-3 py-2 ${activeDetailTab === 'overview' ? 'border-brand text-brand' : 'border-transparent text-text-dim'}`}
						>
							Overview
						</button>
						<button
							type="button"
							onClick={() => setActiveDetailTab('assets')}
							className={`rounded-md border px-3 py-2 ${activeDetailTab === 'assets' ? 'border-brand text-brand' : 'border-transparent text-text-dim'}`}
						>
							Equipment &amp; Assets
						</button>
						<button
							type="button"
							onClick={() => setActiveDetailTab('history')}
							className={`rounded-md border px-3 py-2 ${activeDetailTab === 'history' ? 'border-brand text-brand' : 'border-transparent text-text-dim'}`}
						>
							Service History
						</button>
					</div>
					{activeDetailTab === 'overview' ? (
						<>
							<div className="mt-4 grid grid-cols-4 gap-4">
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-text">3 / 4</div>
									<div className="text-[12px] text-text-dim">Occupancy</div>
								</div>
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-warn">{selectedRoom.room.temp}°F</div>
									<div className="text-[12px] text-text-dim">Temperature</div>
								</div>
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-info">40%</div>
									<div className="text-[12px] text-text-dim">Humidity</div>
								</div>
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-ok">45dB</div>
									<div className="text-[12px] text-text-dim">PTAC Noise</div>
								</div>
							</div>
							<div className="mt-5">
								<div className="text-[16px] text-text mb-4">Room Details</div>
								<div className="space-y-2 text-[14px]">
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Room Type</span><span className="text-text">One-Bedroom Suite</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Floor</span><span className="text-text">Floor {selectedRoom.level}</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Max Occupancy</span><span className="text-text">4 guests</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Current Occupancy</span><span className="text-text">3 guests</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Guest</span><span className="text-text">Ms. Wilson</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Check-In</span><span className="text-text">Feb 11, 2026</span></div>
									<div className="flex justify-between pb-2"><span className="text-text-dim">Check-Out</span><span className="text-text">Feb 20, 2026</span></div>
								</div>
							</div>
							<div className="mt-5">
								<div className="text-[16px] text-text mb-2">PTAC / Climate</div>
								<div className="space-y-2 text-[14px]">
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Model</span><span className="text-text">Amana PTC153G35</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Serial</span><span className="text-text">AMN-201-2023</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Mode</span><span className="text-info">Cooling</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Noise Level</span><span className="text-text"><span className="text-ok">45 dB</span> / 55 dB max</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Last Service</span><span className="text-text">Apr 2025</span></div>
									<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Install Date</span><span className="text-text">Dec 2022</span></div>
								</div>
								<div className="mt-4">
									<div className="flex justify-between text-text-dim text-[14px] mb-2">
										<span>Filter Life Remaining</span>
										<span className="inline-flex items-center gap-1 text-ok"><CheckCircle2 className="w-5 h-5" />57%</span>
									</div>
									<div className="h-[8px] rounded-full bg-panel overflow-hidden">
										<div className="h-full w-[57%] bg-brand" />
									</div>
								</div>
							</div>
						</>
					) : null}
					{activeDetailTab === 'assets' ? (
						<div className="mt-5">
							<div className="grid grid-cols-[1fr_2fr_1fr_1fr] border-b border-border pb-3 text-[10px] tracking-wide text-text-dim">
								<div>EQUIPMENT</div>
								<div>MODEL / SERIAL</div>
								<div>STATUS</div>
								<div className="text-right">NEXT SERVICE</div>
							</div>
							<div className="divide-y divide-border">
								{[
									{ name: 'PTAC Unit', type: 'HVAC', model: 'Amana PTC153G35', serial: 'AMN-201', next: 'Jul 2035' },
									{ name: 'Mini Fridge', type: 'Appliance', model: 'Danby DCR044B', serial: 'DNB-201', next: 'Nov 2031' },
									{ name: 'Microwave', type: 'Appliance', model: 'Panasonic NN-SN686S', serial: 'PAN-201', next: 'Dec 2028' },
									{ name: 'TV', type: 'Entertainment', model: 'Samsung HG50AU800', serial: 'SAM-201', next: 'N/A' },
									{ name: 'Safe', type: 'Security', model: 'Elsafe Zenith', serial: 'ELS-201', next: 'Oct 2032' },
									{ name: 'Hair Dryer', type: 'Amenity', model: 'Conair 1875W', serial: 'CON-1875W', next: 'N/A' },
								].map((row) => (
									<div key={row.name} className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center py-4">
										<div className="flex flex-col items-start gap-2">
											<div className="text-[14px] leading-tight text-text">{row.name}</div>
											<div className="text-[12px] text-text-dim">{row.type}</div>
										</div>
										<div className="flex flex-col items-start gap-2">
											<div className="text-[14px] leading-tight text-text-dim">{row.model}</div>
											<div className="text-[12px] text-text-dim">{row.serial}</div>
										</div>
										<div>
											<span className="inline-flex rounded-[3px] bg-[color:var(--primitive-semantic-success-10)] px-2 py-1 text-[12px] text-ok">Operational</span>
										</div>
										<div className="text-right text-[12px] text-text-dim">{row.next}</div>
									</div>
								))}
							</div>
						</div>
					) : null}
					{activeDetailTab === 'history' ? (
						<div className="mt-5">
							<div className="grid grid-cols-[1.1fr_2.1fr_1fr] border-b border-border pb-3 text-[10px] tracking-wide text-text-dim">
								<div>DATE</div>
								<div>MODEL</div>
								<div className="text-right">TECHNICAL</div>
							</div>
							<div className="divide-y divide-border">
								{[
									{ date: 'Feb 10, 2025', model: 'PTAC filter replaced', tech: 'Mike R.' },
									{ date: 'Jan 22, 2025', model: 'Deep clean post-checkout', tech: 'Sofia H.' },
									{ date: 'Dec 15, 2024', model: 'Bathroom caulking repair', tech: 'James T.' },
									{ date: 'Nov 8, 2024', model: 'TV firmware update', tech: 'IT Team' },
								].map((item) => (
									<div key={`${item.date}-${item.model}`} className="grid grid-cols-[1.1fr_2.1fr_1fr] items-center py-5">
										<div className="text-[14px] text-text-dim">{item.date}</div>
										<div className="text-[14px] text-text">{item.model}</div>
										<div className="text-right text-[14px] text-text-dim">{item.tech}</div>
									</div>
								))}
							</div>
						</div>
					) : null}
				</>
			) : null}
		</aside>
	)
}
