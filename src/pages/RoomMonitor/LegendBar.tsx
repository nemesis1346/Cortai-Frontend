import { Wifi } from 'lucide-react'
import roomStateMeta from './roomStateMeta'
import type { RoomState } from './types'

export default function LegendBar() {
	return (
		<section className="flex flex-wrap items-center justify-between gap-3">
			<div className="flex flex-wrap items-center gap-4">
				{(Object.keys(roomStateMeta) as RoomState[]).map((k) => (
					<div key={k} className={`inline-flex items-center gap-1 !text-[11px] ${roomStateMeta[k].color}`}>
						{roomStateMeta[k].icon}
						<span className="text-white/50">{roomStateMeta[k].label}</span>
					</div>
				))}
			</div>
			<div className="flex items-center gap-2">
				<span className="inline-flex items-center gap-1 rounded-[3px] bg-[#00d4c01a] px-3 py-1 text-[#00d4c0] text-[11px]">
					<Wifi className="w-4 h-4" /> 128 Kb/s
				</span>
				<span className="rounded-[3px] bg-red-500/20 px-2 py-1 text-[11px] text-red-400">4 critical</span>
			</div>
		</section>
	)
}

