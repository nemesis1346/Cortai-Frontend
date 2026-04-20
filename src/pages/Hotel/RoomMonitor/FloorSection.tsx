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
		<Card className="rounded-[0.625rem] bg-card/30">
			<CardHeader
				left={
					<div className="inline-flex items-center gap-2 text-[1.125rem] font-semibold text-text">
						<DoorOpen className="h-5 w-5 shrink-0 text-brand" />
						<span>Floor {floor.level}</span>
					</div>
				}
				middle={
					<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text-dim">
						20 rooms / {floor.occupied} occupied
					</span>
				}
				right={
					<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-small">
						<span className="text-ok">{floor.clean} clean</span>
						<span className="text-text-mute"> / </span>
						<span className="text-warn">{floor.dirty} dirty</span>
					</span>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-2 gap-[1.25rem] sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10">
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
