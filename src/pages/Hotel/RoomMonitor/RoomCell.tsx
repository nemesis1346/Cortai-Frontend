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
		room.state === 'occupied' ? 'hover:bg-[color:var(--primitive-semantic-normal-10)]' :
		room.state === 'inspected' ? 'hover:bg-sky-400/10' :
		room.state === 'maintenance' ? 'hover:bg-red-400/10' :
		room.state === 'vip' ? 'hover:bg-yellow-500/10' :
		room.state === 'alert' ? 'hover:bg-rose-400/10' :
		room.state === 'dnd' ? 'hover:bg-violet-400/10' :
		'hover:bg-[color:var(--primitive-semantic-normal-10)]'
	return (
		<button
			type="button"
			onClick={onSelect}
			className={`w-full rounded-[10px] border px-3 py-2 text-left transition-colors cursor-grab active:cursor-grabbing hover:border border-border ${active ? 'border-brand/60 bg-brand/5' : 'border-[color:var(--primitive-white-shadow-5)] bg-panel'}`}
		>
			<div className={`flex items-center py-1 justify-center hover:rounded-[5px] gap-1 text-[16px] ${meta?.color ?? 'text-text'} ${hoverBg}`}>
				{meta?.icon}
				<span>{room.no}</span>
			</div>
			<div className={`text-center text-[11px] ${room.temp >= 78 ? 'text-warn' : 'text-text-dim'}`}>{room.temp}°F</div>
		</button>
	)
}

