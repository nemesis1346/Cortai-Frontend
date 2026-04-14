import { DoorOpen } from 'lucide-react'
import type { Floor } from './types'
import RoomCell from './RoomCell'
import Card, { CardBody, CardHeader } from '../../../components/Card'

export default function FloorSection({
	floor,
	selectedRoomNo,
	onSelectRoom,
}: {
	floor: Floor
	selectedRoomNo?: number
	onSelectRoom?: (roomNo: number) => void
}) {

	return (
		<Card className="bg-card p-2 md:p-4">
			<CardHeader
				left={
					<div className="inline-flex items-center gap-2 text-text !text-[18px]">
					<DoorOpen className="w-5 h-5 text-brand" />
					<span>Floor {floor.level}</span>
					</div>
				}
				middle={
					<span className="rounded-[3px] bg-[color:var(--primitive-white-shadow-10)] px-2 py-1 text-[12px] text-text-dim">20 rooms / {floor.occupied} occupied</span>
				}
				right={
					<div className="flex gap-2">
						<span className="rounded-[3px] bg-[color:var(--primitive-white-shadow-10)] px-2 py-1 text-[12px]">
							<span className="text-ok">{floor.clean} clean</span>
							<span className="text-text-mute"> / </span>
							<span className="text-warn">{floor.dirty} dirty</span>
						</span>
					</div>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-2">
					{floor.rooms.map((room) => (
						<RoomCell
							key={room.no}
							room={room}
							active={selectedRoomNo === room.no}
							onSelect={() => onSelectRoom?.(room.no)}
						/>
					))}
				</div>
			</CardBody>
		</Card>
	)
}

