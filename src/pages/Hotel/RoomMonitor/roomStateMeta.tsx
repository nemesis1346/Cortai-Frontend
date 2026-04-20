import { Eye, Wrench, Crown, AlertTriangle, Moon } from 'lucide-react'
import type { RoomState, StateMeta } from './types'
import cleanedSvg from '../../../assets/room-state-cleaned.svg?raw'
import cleaningSvg from '../../../assets/room-state-cleaning.svg?raw'
import occupiedSvg from '../../../assets/room-state-occupied.svg?raw'

const iconLg = 'h-4 w-4 shrink-0'

function RoomStateSvg({ src, className }: { src: string; className?: string }) {
	return (
		<span
			className={`inline-flex text-current [&>svg]:block [&>svg]:h-full [&>svg]:w-full ${className ?? ''}`}
			dangerouslySetInnerHTML={{ __html: src }}
			aria-hidden
		/>
	)
}

const roomStateMeta: Record<RoomState, StateMeta> = {
	occupied: { label: 'Occupied', color: 'text-text-dim', icon: <RoomStateSvg src={occupiedSvg} className={iconLg} /> },
	cleaned: { label: 'cleaned', color: 'text-ok', icon: <RoomStateSvg src={cleanedSvg} className={iconLg} /> },
	cleaning: { label: 'Cleaning required', color: 'text-warn', icon: <RoomStateSvg src={cleaningSvg} className={iconLg} /> },
	inspected: { label: 'Inspected', color: 'text-info', icon: <Eye className={iconLg} /> },
	maintenance: { label: 'Maintenance', color: 'text-danger', icon: <Wrench className={iconLg} /> },
	vip: { label: 'VIP', color: 'text-warn', icon: <Crown className={iconLg} /> },
	alert: { label: 'Alert', color: 'text-danger', icon: <AlertTriangle className={iconLg} /> },
	dnd: { label: 'DND', color: 'text-[color:var(--primitive-accent-purple)]', icon: <Moon className={iconLg} /> },
}

export default roomStateMeta
