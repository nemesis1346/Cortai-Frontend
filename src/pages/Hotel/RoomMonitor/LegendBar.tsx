import { Wifi } from 'lucide-react'
import roomStateMeta from './roomStateMeta'
import type { RoomState } from './types'

export default function LegendBar() {
	return (
		<section className="flex flex-wrap items-center justify-between gap-[1.25rem]">
			<div className="flex flex-wrap items-center gap-[1.25rem]">
				{(Object.keys(roomStateMeta) as RoomState[]).map((k) => (
					<div key={k} className={`inline-flex items-center gap-1.5 text-small ${roomStateMeta[k].color}`}>
						{roomStateMeta[k].icon}
						<span className="text-text-dim">{roomStateMeta[k].label}</span>
					</div>
				))}
			</div>
			<div className="flex items-center gap-2">
				<span className="badge-chip inline-flex items-center gap-1.5 bg-brand/10 text-brand">
					<Wifi className="h-4 w-4 shrink-0" /> 128 Kb/s
				</span>
				<span className="badge-chip bg-[color:var(--primitive-semantic-danger-10)] text-danger">4 critical</span>
			</div>
		</section>
	)
}
