import { useEffect, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import type { Room } from './types'

type DetailTab = 'overview' | 'assets' | 'history'

type SelectedRoom = {
	room: Room
	level: number
}

export default function RoomDetailAside({
	selectedRoom,
	onClose,
}: {
	selectedRoom: SelectedRoom
	onClose: () => void
}) {
	const [activeDetailTab, setActiveDetailTab] = useState<DetailTab>('overview')

	useEffect(() => {
		setActiveDetailTab('overview')
	}, [selectedRoom.room.no, selectedRoom.level])

	const tabBtn = (id: DetailTab, label: string) => {
		const active = activeDetailTab === id
		return (
			<button
				type="button"
				onClick={() => setActiveDetailTab(id)}
				className={
					active
						? 'inline-flex min-h-9 cursor-pointer items-center justify-center rounded-[0.375rem] border border-solid border-brand bg-brand/5 px-3 py-2 text-small font-medium text-brand transition-[background-color,border-color,color] duration-150'
						: 'inline-flex min-h-9 cursor-pointer items-center justify-center rounded-[0.375rem] border border-solid border-transparent bg-transparent px-3 py-2 text-small font-medium text-text-dim transition-[background-color,border-color,color] duration-150 hover:bg-brand/3 hover:text-text'
				}
			>
				{label}
			</button>
		)
	}

	return (
		<section className="room-detail-aside-enter w-full rounded-[0.375rem] border border-border bg-card p-[1.25rem]">
			<div className="flex flex-row items-start justify-between border-b border-border pb-3">
				<div>
					<div className="flex items-center gap-2">
						<div className="text-[1.125rem] font-semibold leading-none text-text">Room {selectedRoom.room.no}</div>
						<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text-dim">Occupied</span>
					</div>
					<div className="mt-1 text-small text-text-dim">One-Bedroom Suite - Floor {selectedRoom.level}</div>
				</div>
				<button
					type="button"
					onClick={onClose}
					className="cortai-text-btn cortai-text-btn--ghost cursor-pointer !h-9 !min-h-0 !w-9 !max-w-none !rounded-lg !px-0 !py-0"
					aria-label="Close"
				>
					<X className="h-5 w-5" />
				</button>
			</div>
			<div className="mt-4 flex flex-row flex-wrap items-center gap-2 text-small">
				{tabBtn('overview', 'Overview')}
				{tabBtn('assets', 'Equipment & Assets')}
				{tabBtn('history', 'Service History')}
			</div>
			{activeDetailTab === 'overview' ? (
				<>
					<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
						<div className="flex flex-col items-start gap-1">
							<div className="text-[1.125rem] leading-none text-text">3 / 4</div>
							<div className="text-small text-text-dim">Occupancy</div>
						</div>
						<div className="flex flex-col items-start gap-1">
							<div className="text-[1.125rem] leading-none text-warn">{selectedRoom.room.temp}°F</div>
							<div className="text-small text-text-dim">Temperature</div>
						</div>
						<div className="flex flex-col items-start gap-1">
							<div className="text-[1.125rem] leading-none text-info">40%</div>
							<div className="text-small text-text-dim">Humidity</div>
						</div>
						<div className="flex flex-col items-start gap-1">
							<div className="text-[1.125rem] leading-none text-ok">45dB</div>
							<div className="text-small text-text-dim">PTAC Noise</div>
						</div>
					</div>
					<div className="mt-5">
						<div className="mb-4 text-[1rem] font-medium text-text">Room Details</div>
						<div className="space-y-2 text-normal">
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
						<div className="mb-2 text-[1rem] font-medium text-text">PTAC / Climate</div>
						<div className="space-y-2 text-normal">
							<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Model</span><span className="text-text">Amana PTC153G35</span></div>
							<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Serial</span><span className="text-text">AMN-201-2023</span></div>
							<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Mode</span><span className="text-info">Cooling</span></div>
							<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Noise Level</span><span className="text-text"><span className="text-ok">45 dB</span> / 55 dB max</span></div>
							<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Last Service</span><span className="text-text">Apr 2025</span></div>
							<div className="flex justify-between border-b border-border pb-2"><span className="text-text-dim">Install Date</span><span className="text-text">Dec 2022</span></div>
						</div>
						<div className="mt-4">
							<div className="mb-2 flex justify-between text-normal text-text-dim">
								<span>Filter Life Remaining</span>
								<span className="inline-flex items-center gap-1 text-ok"><CheckCircle2 className="h-5 w-5" />57%</span>
							</div>
							<div className="h-2 overflow-hidden rounded-full bg-panel">
								<div className="h-full w-[57%] bg-brand" />
							</div>
						</div>
					</div>
				</>
			) : null}
			{activeDetailTab === 'assets' ? (
				<div className="mt-5">
					<div className="text-table-header grid grid-cols-[1fr_2fr_1fr_1fr] border-b border-border pb-3">
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
									<div className="text-normal leading-tight text-text">{row.name}</div>
									<div className="text-small text-text-dim">{row.type}</div>
								</div>
								<div className="flex flex-col items-start gap-2">
									<div className="text-normal leading-tight text-text-dim">{row.model}</div>
									<div className="text-small text-text-dim">{row.serial}</div>
								</div>
								<div>
									<span className="badge-chip bg-[color:var(--primitive-semantic-success-10)] text-ok">Operational</span>
								</div>
								<div className="text-right text-small text-text-dim">{row.next}</div>
							</div>
						))}
					</div>
				</div>
			) : null}
			{activeDetailTab === 'history' ? (
				<div className="mt-5">
					<div className="text-table-header grid grid-cols-[1.1fr_2.1fr_1fr] border-b border-border pb-3">
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
								<div className="text-normal text-text-dim">{item.date}</div>
								<div className="text-normal text-text">{item.model}</div>
								<div className="text-right text-normal text-text-dim">{item.tech}</div>
							</div>
						))}
					</div>
				</div>
			) : null}
		</section>
	)
}
