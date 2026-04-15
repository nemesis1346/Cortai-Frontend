import { SD_WAN_CYAN, SD_WAN_NEON } from './constants'
import type { SdWanCircuit } from './types'

type CircuitCardProps = {
	circuit: SdWanCircuit
}

export default function CircuitCard({ circuit }: CircuitCardProps) {
	const isPrimary = circuit.role === 'primary'

	return (
		<div
			className={`card p-4 ${isPrimary ? 'border-2' : 'border border-[color:var(--primitive-white-shadow-10)]'}`}
			style={isPrimary ? { borderColor: `${SD_WAN_NEON}66` } : undefined}
		>
			<div className="mb-4 flex flex-col gap-2 pb-2 sm:flex-row sm:items-start sm:justify-between">
				<div className="text-[18px] text-text">{circuit.name}</div>
				<div className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-[12px] text-text">{circuit.subtitle}</div>
				{isPrimary ? (
					<span
						className="w-fit rounded-[3px] bg-brand/10 px-2 py-1 text-[11px] font-medium"
						style={{ borderColor: SD_WAN_CYAN, color: SD_WAN_CYAN }}
					>
						Primary
					</span>
				) : (
					<span className="w-fit rounded-[3px] bg-brand/10 px-2 py-1 text-[11px] font-medium text-text-dim">
						Backup
					</span>
				)}
			</div>
			<div className="flex flex-row justify-between items-center">
				<div className="flex flex-col items-start justify-start gap-1">
					<div className="text-[18px] font-semibold text-text">{circuit.headline.speed}</div>
					<div className="text-[14px] text-text-dim">Speed</div>
				</div>
				<div className="flex flex-col items-start justify-start gap-1">
					<div className="text-[18px] font-semibold" style={{ color: SD_WAN_NEON }}>{circuit.headline.health}</div>
					<div className="text-[14px] text-text-dim">Health Score</div>
				</div>
				<div className="flex flex-col items-start justify-start gap-1">
					<div className="text-[18px] font-semibold text-text">{circuit.headline.cost}</div>
					<div className="text-[14px] text-text-dim">Cost</div>
				</div>
				<div className="flex flex-col items-start justify-start gap-1">
					<div className="text-[18px] font-semibold text-text">{circuit.headline.sla}</div>
					<div className="text-[14px] text-text-dim">SLA</div>
				</div>
			</div>
			<div className="mt-4 grid grid-cols-4 gap-5">
				<div className="flex flex-row items-center justify-between border-t border-border pt-1">
					<div className="text-[14px] text-text-dim">Latency</div>
					<div
						className={`text-[14px] ${isPrimary ? '' : 'text-text'}`}
						style={isPrimary ? { color: SD_WAN_NEON } : undefined}
					>
						{circuit.detail.latency}
					</div>
				</div>
				<div className="flex flex-row items-center justify-between border-t border-border pt-1">
					<div className="text-[14px] text-text-dim">Jitter</div>
					<div
						className={`text-[14px] ${isPrimary ? '' : 'text-text'}`}
						style={isPrimary ? { color: SD_WAN_NEON } : undefined}
					>
						{circuit.detail.jitter}
					</div>
				</div>
				<div className="flex flex-row items-center justify-between border-t border-border pt-1">
					<div className="text-[14px] text-text-dim">Packet Loss</div>
					<div
						className={`text-[14px] ${isPrimary ? '' : 'text-text'}`}
						style={isPrimary ? { color: SD_WAN_NEON } : undefined}
					>
						{circuit.detail.packetLoss}
					</div>
				</div>
				<div className="flex flex-row items-center justify-between border-t border-border pt-1">
					<div className="text-[14px] text-text-dim">Utilization</div>
					<div
						className={`text-[14px] ${isPrimary ? '' : 'text-text'}`}
						style={isPrimary ? { color: SD_WAN_NEON } : undefined}
					>
						{circuit.detail.utilization}
					</div>
				</div>
			</div>
		</div>
	)
}
