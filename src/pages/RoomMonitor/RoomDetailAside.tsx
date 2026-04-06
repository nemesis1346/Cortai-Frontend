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
			className={`hidden 2xl:block h-full min-h-[780px] overflow-y-auto rounded-2xl border border-white/10 bg-[#12191d] p-4 md:p-5 transition-all duration-300 ${
				visible ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'
			}`}
		>
			{selectedRoom ? (
				<>
					<div className="flex flex-row items-start justify-between border-b border-white/10 pb-3">
						<div>
							<div className="flex items-center gap-2">
								<div className="text-[18px] text-white leading-none">Room {selectedRoom.room.no}</div>
								<span className="rounded-md bg-white/10 px-1 py-1 !text-[12px] text-white/50">Occupied</span>
							</div>
							<div className="mt-1 text-[14px] text-white/50">One-Bedroom Suite - Floor {selectedRoom.level}</div>
						</div>
						<button
							type="button"
							onClick={onClose}
							className="w-9 h-9 rounded-md text-white/70 inline-flex items-center justify-center"
						>
							<X className="w-5 h-5" />
						</button>
					</div>
					<div className="mt-4 flex flex-row items-center gap-4 text-[12px]">
						<button
							type="button"
							onClick={() => setActiveDetailTab('overview')}
							className={`rounded-md border px-3 py-2 ${activeDetailTab === 'overview' ? 'border-[#00D4C0] text-[#00D4C0]' : 'border-transparent text-white/70'}`}
						>
							Overview
						</button>
						<button
							type="button"
							onClick={() => setActiveDetailTab('assets')}
							className={`rounded-md border px-3 py-2 ${activeDetailTab === 'assets' ? 'border-[#00D4C0] text-[#00D4C0]' : 'border-transparent text-white/70'}`}
						>
							Equipment &amp; Assets
						</button>
						<button
							type="button"
							onClick={() => setActiveDetailTab('history')}
							className={`rounded-md border px-3 py-2 ${activeDetailTab === 'history' ? 'border-[#00D4C0] text-[#00D4C0]' : 'border-transparent text-white/70'}`}
						>
							Service History
						</button>
					</div>
					{activeDetailTab === 'overview' ? (
						<>
							<div className="mt-4 grid grid-cols-4 gap-4">
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-white">3 / 4</div>
									<div className="text-[12px] text-white/50">Occupancy</div>
								</div>
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-amber-400">{selectedRoom.room.temp}°F</div>
									<div className="text-[12px] text-white/50">Temperature</div>
								</div>
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-sky-400">40%</div>
									<div className="text-[12px] text-white/50">Humidity</div>
								</div>
								<div className="flex flex-col items-start gap-2">
									<div className="text-[18px] leading-none text-green-500">45dB</div>
									<div className="text-[12px] text-white/50">PTAC Noise</div>
								</div>
							</div>
							<div className="mt-5">
								<div className="text-[16px] text-white mb-4">Room Details</div>
								<div className="space-y-2 text-[14px]">
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Room Type</span><span className="text-white/80">One-Bedroom Suite</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Floor</span><span className="text-white/80">Floor {selectedRoom.level}</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Max Occupancy</span><span className="text-white/80">4 guests</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Current Occupancy</span><span className="text-white/80">3 guests</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Guest</span><span className="text-white/80">Ms. Wilson</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Check-In</span><span className="text-white/80">Feb 11, 2026</span></div>
									<div className="flex justify-between pb-2"><span className="text-white/50">Check-Out</span><span className="text-white/80">Feb 20, 2026</span></div>
								</div>
							</div>
							<div className="mt-5">
								<div className="text-[16px] text-white mb-2">PTAC / Climate</div>
								<div className="space-y-2 text-[14px]">
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Model</span><span className="text-white/80">Amana PTC153G35</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Serial</span><span className="text-white/80">AMN-201-2023</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Mode</span><span className="text-sky-400/80">Cooling</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Noise Level</span><span className="text-white/80"><span className="text-green-500">45 dB</span> / 55 dB max</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Last Service</span><span className="text-white/80">Apr 2025</span></div>
									<div className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">Install Date</span><span className="text-white/80">Dec 2022</span></div>
								</div>
								<div className="mt-4">
									<div className="flex justify-between text-white/60 text-[14px] mb-2">
										<span>Filter Life Remaining</span>
										<span className="inline-flex items-center gap-1 text-green-500"><CheckCircle2 className="w-5 h-5" />57%</span>
									</div>
									<div className="h-[8px] rounded-full bg-white/10 overflow-hidden">
										<div className="h-full w-[57%] bg-[#11c5bc]" />
									</div>
								</div>
							</div>
						</>
					) : null}
					{activeDetailTab === 'assets' ? (
						<div className="mt-5">
							<div className="grid grid-cols-[1fr_2fr_1fr_1fr] border-b border-white/20 pb-3 text-[10px] tracking-wide text-white/40">
								<div>EQUIPMENT</div>
								<div>MODEL / SERIAL</div>
								<div>STATUS</div>
								<div className="text-right">NEXT SERVICE</div>
							</div>
							<div className="divide-y divide-white/20">
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
											<div className="text-[14px] leading-tight text-white/90">{row.name}</div>
											<div className="text-[12px] text-white/40">{row.type}</div>
										</div>
										<div className="flex flex-col items-start gap-2">
											<div className="text-[14px] leading-tight text-white/40">{row.model}</div>
											<div className="text-[12px] text-white/40">{row.serial}</div>
										</div>
										<div>
											<span className="inline-flex rounded-[3px] bg-[#04D4001A] px-2 py-1 text-[12px] text-[#04D400]">Operational</span>
										</div>
										<div className="text-right text-[12px] text-white/40">{row.next}</div>
									</div>
								))}
							</div>
						</div>
					) : null}
					{activeDetailTab === 'history' ? (
						<div className="mt-5">
							<div className="grid grid-cols-[1.1fr_2.1fr_1fr] border-b border-white/20 pb-3 text-[10px] tracking-wide text-white/40">
								<div>DATE</div>
								<div>MODEL</div>
								<div className="text-right">TECHNICAL</div>
							</div>
							<div className="divide-y divide-white/20">
								{[
									{ date: 'Feb 10, 2025', model: 'PTAC filter replaced', tech: 'Mike R.' },
									{ date: 'Jan 22, 2025', model: 'Deep clean post-checkout', tech: 'Sofia H.' },
									{ date: 'Dec 15, 2024', model: 'Bathroom caulking repair', tech: 'James T.' },
									{ date: 'Nov 8, 2024', model: 'TV firmware update', tech: 'IT Team' },
								].map((item) => (
									<div key={`${item.date}-${item.model}`} className="grid grid-cols-[1.1fr_2.1fr_1fr] items-center py-5">
										<div className="text-[14px] text-white/40">{item.date}</div>
										<div className="text-[14px] text-white/90">{item.model}</div>
										<div className="text-right text-[14px] text-white/40">{item.tech}</div>
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
