import { AppWindow } from 'lucide-react'
import type { SdWanAppRoute } from './types'

type ApplicationRoutingProps = {
	items: SdWanAppRoute[]
}

function DotMeter({ filled }: { filled: number }) {
	return (
		<div className="flex gap-1" aria-hidden>
			{[0, 1, 2, 3, 4].map((i) => (
				<span
					key={i}
					className={`h-1.5 w-1.5 rounded-full ${i < filled ? 'bg-[#00D4C0]' : 'bg-white/15'}`}
				/>
			))}
		</div>
	)
}

export default function ApplicationRouting({ items }: ApplicationRoutingProps) {
	return (
		<section className="card p-4">
			<div className="mb-4 flex items-center gap-2">
				<AppWindow className="h-5 w-5 shrink-0 text-[#00D4C0]" strokeWidth={1.75} />
				<h3 className="card-title !mb-0 text-[15px]">Application Routing</h3>
			</div>
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
				{items.map((app) => (
					<div key={app.id} className="rounded-lg border border-white/[0.06] bg-white/[0.02] flex flex-col gap-4 p-5">
						<div className="flex items-start justify-between gap-2">
							<div className="min-w-0 text-[14px] font-semibold text-white/80">{app.name}</div>
							<DotMeter filled={app.performanceDots} />
						</div>
						<div className="pt-3 text-[14px] flex flex-row justify-between items-center">
							<span className="truncate text-right text-white/40">{app.circuit}</span>
							<span className="text-white/80">{app.bandwidth}</span>
							<span className="text-white/40">{app.sessions} Sessions</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
