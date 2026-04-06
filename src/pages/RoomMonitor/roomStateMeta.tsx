import { BedDouble, Eye, Wrench, Crown, AlertTriangle, Moon, DoorOpen } from 'lucide-react'
import type { RoomState, StateMeta } from './types'

const roomStateMeta: Record<RoomState, StateMeta> = {
	occupied: { label: 'Occupied', color: 'text-white/70', icon: <BedDouble className="w-3 h-3" /> },
	cleaned: { label: 'cleaned', color: 'text-green-500', icon: <DoorOpen className="w-3 h-3" /> },
	cleaning: { label: 'Cleaning required', color: 'text-amber-400', icon: <Wrench className="w-3 h-3" /> },
	inspected: { label: 'Inspected', color: 'text-sky-400', icon: <Eye className="w-3 h-3" /> },
	maintenance: { label: 'Maintenance', color: 'text-red-400', icon: <Wrench className="w-3 h-3" /> },
	vip: { label: 'VIP', color: 'text-yellow-500', icon: <Crown className="w-3 h-3" /> },
	alert: { label: 'Alert', color: 'text-rose-400', icon: <AlertTriangle className="w-3 h-3" /> },
	dnd: { label: 'DND', color: 'text-violet-400', icon: <Moon className="w-3 h-3" /> },
}

export default roomStateMeta

