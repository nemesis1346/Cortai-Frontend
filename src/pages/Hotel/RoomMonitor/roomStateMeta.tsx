import { BedDouble, Eye, Wrench, Crown, AlertTriangle, Moon, DoorOpen } from 'lucide-react'
import type { RoomState, StateMeta } from './types'

const roomStateMeta: Record<RoomState, StateMeta> = {
	occupied: { label: 'Occupied', color: 'text-text-dim', icon: <BedDouble className="w-3 h-3" /> },
	cleaned: { label: 'cleaned', color: 'text-ok', icon: <DoorOpen className="w-3 h-3" /> },
	cleaning: { label: 'Cleaning required', color: 'text-warn', icon: <Wrench className="w-3 h-3" /> },
	inspected: { label: 'Inspected', color: 'text-info', icon: <Eye className="w-3 h-3" /> },
	maintenance: { label: 'Maintenance', color: 'text-danger', icon: <Wrench className="w-3 h-3" /> },
	vip: { label: 'VIP', color: 'text-warn', icon: <Crown className="w-3 h-3" /> },
	alert: { label: 'Alert', color: 'text-danger', icon: <AlertTriangle className="w-3 h-3" /> },
	dnd: { label: 'DND', color: 'text-[color:var(--primitive-accent-purple)]', icon: <Moon className="w-3 h-3" /> },
}

export default roomStateMeta

