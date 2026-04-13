import roomStateMeta from './roomStateMeta'
import type { Room } from './types'

export default function RoomCell({
	room,
	active = false,
	onSelect,
}: {
	room: Room
	active?: boolean
	onSelect?: () => void
}) {
	const meta = room.state ? roomStateMeta[room.state] : undefined
	const hoverBg =
		room.state === 'cleaned' ? 'hover:bg-green-500/10' :
		room.state === 'cleaning' ? 'hover:bg-amber-400/10' :
		room.state === 'occupied' ? 'hover:bg-white/10' :
		room.state === 'inspected' ? 'hover:bg-sky-400/10' :
		room.state === 'maintenance' ? 'hover:bg-red-400/10' :
		room.state === 'vip' ? 'hover:bg-yellow-500/10' :
		room.state === 'alert' ? 'hover:bg-rose-400/10' :
		room.state === 'dnd' ? 'hover:bg-violet-400/10' :
		'hover:bg-white/10'
	return (
		<button
			type="button"
			onClick={onSelect}
			className={`w-full rounded-[10px] border px-3 py-2 text-left transition-colors cursor-grab active:cursor-grabbing ${active ? 'border-[#00d4c0]/60 bg-[#00d4c00d]' : 'border-white/5 bg-[#FFFFFF08]'}`}
		>
			<div className={`flex items-center py-1 justify-center hover:rounded-[5px] gap-1 text-[16px] ${meta?.color ?? 'text-white/90'} ${hoverBg}`}>
				{meta?.icon}
				<span>{room.no}</span>
			</div>
			<div className={`text-center text-[11px] ${room.temp >= 78 ? 'text-amber-400' : 'text-white/60'}`}>{room.temp}°F</div>
		</button>
	)
}

