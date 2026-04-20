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
			className={`w-full cursor-pointer rounded-[0.55rem] border border-transparent bg-card/80 px-3 py-2 text-left transition-colors hover:border-border ${active ? 'border-brand/60 bg-brand/5' : ''}`}
		>
			<div className={`flex items-center justify-center gap-1 py-1 text-[1rem] hover:rounded-[0.25rem] ${meta?.color ?? 'text-text'} ${hoverBg}`}>
				{meta?.icon}
				<span>{room.no}</span>
			</div>
			<div className={`text-center text-small ${room.temp >= 78 ? 'text-warn' : 'text-text-dim'}`}>{room.temp}°F</div>
		</button>
	)
}
