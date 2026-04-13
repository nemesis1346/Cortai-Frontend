import { SD_WAN_CYAN, SD_WAN_NEON } from './constants'
import type { SdWanCircuit } from './types'

type CircuitCardProps = {
	circuit: SdWanCircuit
}

export default function CircuitCard({ circuit }: CircuitCardProps) {
	const isPrimary = circuit.role === 'primary'

	return (
		<div
			className={`card p-4 ${isPrimary ? 'border-2' : 'border border-white/[0.08]'}`}
			style={isPrimary ? { borderColor: `${SD_WAN_NEON}66` } : undefined}
		>
			<div className="mb-4 flex flex-col gap-2 pb-2 sm:flex-row sm:items-start sm:justify-between">
				<div className="text-[18px] text-white/80">{circuit.name}</div>
				<div className="text-[12px] text-white/45 rounded-[3px] px-2 py-1 bg-white/[0.08]">{circuit.subtitle}</div>
				{isPrimary ? (
					<span
						className="w-fit rounded-[3px] bg-[#00D4C01A] px-2 py-1 text-[11px] font-medium"
						style={{ borderColor: SD_WAN_CYAN, color: SD_WAN_CYAN }}
					>
						Primary
					</span>
				) : (
					<span className="w-fit rounded-[3px] bg-[#00D4C01A] px-2 py-1 text-[11px] font-medium text-white/60">
						Backup
					</span>
				)}
			</div>
			<div className="flex flex-row justify-between items-center">
				<div className='flex flex-col items-start justify-start gap-1'>
					<div className="text-[18px] font-semibold text-white/80">{circuit.headline.speed}</div>
					<div className="text-[14px] text-white/45">Speed</div>
				</div>
				<div className='flex flex-col items-start justify-start gap-1'>
					<div className="text-[18px] font-semibold" style={{ color: SD_WAN_NEON }}>{circuit.headline.health}</div>
					<div className="text-[14px] text-white/45">Health Score</div>
				</div>
				<div className='flex flex-col items-start justify-start gap-1'>
					<div className="text-[18px] font-semibold text-white/80">{circuit.headline.cost}</div>
					<div className="text-[14px] text-white/45">Cost</div>
				</div>
				<div className='flex flex-col items-start justify-start gap-1'>
					<div className="text-[18px] font-semibold text-white/80">{circuit.headline.sla}</div>
					<div className="text-[14px] text-white/45">SLA</div>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-5 mt-4">
				<div className='flex flex-row items-center justify-between border-t border-white/10 pt-1'>
					<div className="text-[14px] text-white/45">Latency</div>
					<div
						className={`text-[14px] ${isPrimary ? '' : 'text-white'}`}
						style={isPrimary ? { color: SD_WAN_NEON } : undefined}
					>
						{circuit.detail.latency}
					</div>
				</div>
				<div className='flex flex-row items-center justify-between border-t border-white/10 pt-1'>
					<div className="text-[14px] text-white/45">Jitter</div>
					<div
						className={`text-[14px] ${isPrimary ? '' : 'text-white'}`}
						style={isPrimary ? { color: SD_WAN_NEON } : undefined}
					>
						{circuit.detail.jitter}
					</div>
				</div>
				<div className='flex flex-row items-center justify-between border-t border-white/10 pt-1'>
					<div className="text-[14px] text-white/45">Packet Loss</div>
					<div
						className={`text-[14px] ${isPrimary ? '' : 'text-white'}`}
						style={isPrimary ? { color: SD_WAN_NEON } : undefined}
					>
						{circuit.detail.packetLoss}
					</div>
				</div>
				<div className='flex flex-row items-center justify-between border-t border-white/10 pt-1'>
					<div className="text-[14px] text-white/45">Utilization</div>
					<div className="text-[14px] ${isPrimary ? '' : 'text-white'}">{circuit.detail.utilization}</div>
				</div>
			</div>
		</div>
	)
}
