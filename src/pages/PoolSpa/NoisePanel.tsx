import { AudioWaveform } from 'lucide-react'
import { poolPageMock } from '../../data/mock'

function dbToBottomPercent(db: number) {
	const min = 58
	const max = 82
	const p = ((db - min) / (max - min)) * 100
	return Math.min(94, Math.max(6, p))
}

function dbTextClass(db: number) {
	if (db < 70) return 'text-[#22c55e]'
	if (db < 76) return 'text-[#f59e0b]'
	return 'text-[#f87171]'
}

export default function NoisePanel() {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
			<div className="text-[18px] text-white inline-flex items-center gap-2">
				<AudioWaveform className="w-5 h-5 text-[#00d4c0]" />
				<span>Noise Levels</span>
			</div>
			<div className="mt-5 grid grid-cols-2 gap-6">
				{poolPageMock.noiseLevels.map((z) => (
					<div key={z.label} className="flex flex-row items-center gap-2">
						<div className="flex flex-row items-stretch gap-1.5">
							<div className="relative w-3 shrink-0 flex items-end justify-center" style={{ height: 30 }}>
								<div
									className="absolute left-2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-r-white"
									style={{ bottom: `calc(${dbToBottomPercent(z.db)}% - 5px)` }}
								/>
							</div>
							<div className="flex h-[88px] w-2.5 shrink-0 flex-col rounded-sm overflow-hidden border border-white/15">
								<div className="flex-1 bg-[#b91c1c]/95" />
								<div className="flex-1 bg-[#d97706]/95" />
								<div className="flex-1 bg-[#15803d]/95" />
							</div>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className={`text-[18px] ${dbTextClass(z.db)}`}>{z.db}dB</div>
							<div className="text-[15px] text-white/45 text-center">{z.label}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
