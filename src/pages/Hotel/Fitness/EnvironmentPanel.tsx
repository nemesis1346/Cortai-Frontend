import { Thermometer } from 'lucide-react'
import { fitnessPageMock } from '../../../data/mock'

function EnvGauge({ pointerBottomPct }: { pointerBottomPct: number }) {
	return (
		<div className="flex shrink-0 items-end gap-0.5">
			<div className="relative h-12 w-2.5 shrink-0">
				<div
					className="absolute -right-1 w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-r-white"
					style={{ bottom: `calc(${pointerBottomPct}% - 4px)` }}
				/>
			</div>
			<div className="h-12 w-2 shrink-0 overflow-hidden rounded-sm border border-white/15">
				<div className="flex h-full flex-col">
					<div className="flex-[2] bg-[#ea580c]/95" />
					<div className="flex-[1] bg-[#16a34a]/95" />
				</div>
			</div>
		</div>
	)
}

function co2PointerPct(ppm: number) {
	const t = (Math.min(1000, Math.max(400, ppm)) - 400) / 600
	return Math.min(88, Math.max(36, 33 + t * 55))
}

function noisePointerPct(db: number) {
	const t = (Math.min(75, Math.max(40, db)) - 40) / 35
	return Math.min(32, Math.max(8, 10 + t * 22))
}

type EnvironmentPanelProps = { className?: string }

export default function EnvironmentPanel({ className }: EnvironmentPanelProps) {
	const e = fitnessPageMock.environment
	return (
		<div className={`rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4 ${className ?? ''}`}>
			<div className="flex items-center gap-2 text-[18px] font-medium text-white">
				<Thermometer className="h-5 w-5 text-[#00d4c0]" strokeWidth={1.75} />
				<span>Environment</span>
			</div>
			<div className="mt-5 flex flex-wrap items-end justify-between gap-x-2 gap-y-6 sm:gap-x-3">
				<div className="flex min-w-[4.5rem] flex-col items-start gap-1.5 text-center sm:min-w-[5rem]">
					<div className="text-[20px] font-bold leading-none text-white">{e.temp}</div>
					<div className="text-[11px] text-white/45">Temp.</div>
				</div>
				<div className="flex min-w-[4.5rem] flex-col items-start gap-1.5 text-center sm:min-w-[5rem]">
					<div className="text-[20px] font-bold leading-none text-[#38bdf8]">{e.humidity}</div>
					<div className="text-[11px] text-white/45">Humidity</div>
				</div>
				<div className="flex min-w-[4.5rem] flex-col items-start gap-1.5 text-center sm:min-w-[5rem]">
					<div className="text-[20px] font-bold leading-none text-white">{e.airChangesPerHour}</div>
					<div className="text-[11px] leading-tight text-white/45">Air Changes/hr</div>
				</div>
				<div className="flex min-w-0 items-end gap-2">
					<EnvGauge pointerBottomPct={co2PointerPct(e.co2Ppm)} />
					<div className="flex flex-col gap-1.5 pb-0.5">
						<div className="text-[20px] font-bold leading-none text-[#fb923c]">{e.co2Ppm}ppm</div>
						<div className="text-[11px] text-white/45">CO2 Level</div>
					</div>
				</div>
				<div className="flex min-w-0 items-end gap-2">
					<EnvGauge pointerBottomPct={noisePointerPct(e.noiseDb)} />
					<div className="flex flex-col gap-1.5 pb-0.5">
						<div className="text-[20px] font-bold leading-none text-[#22c55e]">{e.noiseDb}dB</div>
						<div className="text-[11px] text-white/45">Noise</div>
					</div>
				</div>
			</div>
		</div>
	)
}
