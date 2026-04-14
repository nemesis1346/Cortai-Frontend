import type { Floor, SummaryItem } from './types'
import SummaryStrip from './SummaryStrip'
import LegendBar from './LegendBar'
import FloorSection from './FloorSection'
import { useMemo, useState } from 'react'
import RoomDetailAside from './RoomDetailAside'

const summary: SummaryItem[] = [
	{ label: 'Total rooms', value: 120, color: 'text-text' },
	{ label: 'Cleaned', value: 22, color: 'text-ok' },
	{ label: 'Cleaning required', value: 14, color: 'text-warn' },
	{ label: 'Occupied', value: 68, color: 'text-text' },
	{ label: 'Inspected', value: 6, color: 'text-text' },
	{ label: 'Maintenance', value: 10, color: 'text-danger' },
]

const floors: Floor[] = [
	{
		level: 2,
		occupied: 12,
		clean: 4,
		dirty: 1,
		rooms: [
			{ no: 201, temp: 73, state: 'maintenance' }, { no: 202, temp: 69, state: 'occupied' }, { no: 203, temp: 70 },
			{ no: 204, temp: 72, state: 'inspected' }, { no: 205, temp: 71 }, { no: 206, temp: 79, state: 'cleaning' },
			{ no: 207, temp: 78, state: 'alert' }, { no: 208, temp: 70 }, { no: 209, temp: 76, state: 'cleaned' }, { no: 210, temp: 72 },
			{ no: 211, temp: 70 }, { no: 212, temp: 64 }, { no: 213, temp: 71, state: 'cleaned' }, { no: 214, temp: 68, state: 'alert' },
			{ no: 215, temp: 70 }, { no: 216, temp: 72, state: 'cleaned' }, { no: 217, temp: 74, state: 'cleaned' }, { no: 218, temp: 73 },
			{ no: 219, temp: 70, state: 'vip' }, { no: 220, temp: 71, state: 'vip' },
		],
	},
	{
		level: 3,
		occupied: 10,
		clean: 3,
		dirty: 1,
		rooms: [
			{ no: 301, temp: 70 }, { no: 302, temp: 69, state: 'inspected' }, { no: 303, temp: 71 }, { no: 304, temp: 78 },
			{ no: 305, temp: 72 }, { no: 306, temp: 74, state: 'occupied' }, { no: 307, temp: 71 }, { no: 308, temp: 74, state: 'occupied' },
			{ no: 309, temp: 74, state: 'occupied' }, { no: 310, temp: 70, state: 'cleaned' }, { no: 311, temp: 78 }, { no: 312, temp: 70, state: 'cleaned' },
			{ no: 313, temp: 70 }, { no: 314, temp: 70, state: 'cleaned' }, { no: 315, temp: 70 }, { no: 316, temp: 70 },
			{ no: 317, temp: 73, state: 'maintenance' }, { no: 318, temp: 81, state: 'cleaning' }, { no: 319, temp: 70 }, { no: 320, temp: 73, state: 'maintenance' },
		],
	},
    {
		level: 4,
		occupied: 10,
		clean: 3,
		dirty: 1,
		rooms: [
			{ no: 401, temp: 70 }, { no: 402, temp: 69, state: 'inspected' }, { no: 403, temp: 71 }, { no: 404, temp: 78 },
			{ no: 405, temp: 72 }, { no: 406, temp: 74, state: 'occupied' }, { no: 407, temp: 71 }, { no: 408, temp: 74, state: 'occupied' },
			{ no: 409, temp: 74, state: 'occupied' }, { no: 410, temp: 70, state: 'cleaned' }, { no: 411, temp: 78 }, { no: 412, temp: 70, state: 'cleaned' },
			{ no: 413, temp: 70 }, { no: 414, temp: 70, state: 'cleaned' }, { no: 415, temp: 70 }, { no: 416, temp: 70 },
			{ no: 417, temp: 73, state: 'maintenance' }, { no: 418, temp: 81, state: 'cleaning' }, { no: 419, temp: 70 }, { no: 420, temp: 73, state: 'maintenance' },
		],
	},
    {
		level: 5,
		occupied: 10,
		clean: 3,
		dirty: 1,
		rooms: [
			{ no: 501, temp: 70 }, { no: 502, temp: 69, state: 'inspected' }, { no: 503, temp: 71 }, { no: 504, temp: 78 },
			{ no: 505, temp: 72 }, { no: 506, temp: 74, state: 'occupied' }, { no: 507, temp: 71 }, { no: 508, temp: 74, state: 'occupied' },
			{ no: 509, temp: 74, state: 'occupied' }, { no: 510, temp: 70, state: 'cleaned' }, { no: 511, temp: 78 }, { no: 512, temp: 70, state: 'cleaned' },
			{ no: 513, temp: 70 }, { no: 514, temp: 70, state: 'cleaned' }, { no: 515, temp: 70 }, { no: 516, temp: 70 },
			{ no: 517, temp: 73, state: 'maintenance' }, { no: 518, temp: 81, state: 'cleaning' }, { no: 519, temp: 70 }, { no: 520, temp: 73, state: 'maintenance' },
		],
	},
]

export default function RoomMonitor() {
	const [selectedRoomNo, setSelectedRoomNo] = useState<number | null>(null)
	const selectedRoom = useMemo(() => {
		for (const floor of floors) {
			const room = floor.rooms.find((item) => item.no === selectedRoomNo)
			if (room) return { room, level: floor.level }
		}
		return null
	}, [selectedRoomNo])

	return (
		<div
			className={`h-full grid grid-cols-1 gap-4 p-4 md:p-5  transition-all duration-300 ${
				selectedRoom ? '2xl:grid-cols-[minmax(0,1fr)_440px]' : '2xl:grid-cols-[minmax(0,1fr)_0px]'
			}`}
		>
			<main className={`flex flex-col gap-3 overflow-y-auto scrollbar-none pr-1 transition-all duration-300 ${selectedRoom ? '2xl:scale-[0.995] 2xl:origin-left' : '2xl:scale-100'}`}>
				<SummaryStrip items={summary} />
				<LegendBar />
				{floors.map((floor) => (
					<FloorSection
						key={floor.level}
						floor={floor}
						selectedRoomNo={selectedRoomNo ?? undefined}
						onSelectRoom={setSelectedRoomNo}
					/>
				))}
			</main>
			<RoomDetailAside
				selectedRoom={selectedRoom}
				visible={Boolean(selectedRoom)}
				onClose={() => setSelectedRoomNo(null)}
			/>
		</div>
	)
}

