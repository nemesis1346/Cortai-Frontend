import { Waves, Thermometer, Users } from 'lucide-react'
import { Progress } from 'antd'
import { poolPageMock } from '../../../data/mock'

function parseTempF(s: string) {
	return Number.parseInt(s.replace(/\D/g, ''), 10) || 0
}

function TempGauge({ fahrenheit, min = 75, max = 110 }: { fahrenheit: number; min?: number; max?: number }) {
	const pct = Math.min(100, Math.max(0, ((fahrenheit - min) / (max - min)) * 100))
	return (
		<div className="flex shrink-0 items-end gap-1">
			<div className="relative h-[52px] w-2.5 shrink-0">
				<div
					className="absolute -right-1 w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-r-white"
					style={{ bottom: `calc(${pct}% - 5px)` }}
				/>
			</div>
			<div className="h-[52px] w-2 shrink-0 overflow-hidden rounded-sm border border-white/15">
				<div className="flex h-full flex-col">
					<div className="flex-1 bg-[#ea580c]/95" />
					<div className="flex-1 bg-[#16a34a]/95" />
				</div>
			</div>
		</div>
	)
}

function StatBlock({ value, label }: { value: string; label: string }) {
	return (
		<div className="flex min-w-[3.25rem] flex-col items-center gap-1 text-center">
			<div className="text-[17px] font-semibold leading-tight text-white sm:text-[18px]">{value}</div>
			<div className="text-[11px] leading-tight text-white/45">{label}</div>
		</div>
	)
}

function TempBlock({ tempLabel, fahrenheit }: { tempLabel: string; fahrenheit: number }) {
	return (
		<div className="flex shrink-0 items-center gap-2">
			<TempGauge fahrenheit={fahrenheit} />
			<div className="flex flex-col gap-2 justify-between">
				<span className="text-[19px] font-bold leading-none text-[#22c55e] sm:text-[21px]">{tempLabel}</span>
				<span className="text-[11px] text-white/45">Temp.</span>
			</div>
		</div>
	)
}

function CapacityRing({ percent, strokeColor, railColor }: { percent: number; strokeColor: string; railColor: string }) {
	return (
		<div className="flex shrink-0 items-center gap-2">
			<Progress
				type="circle"
				percent={percent}
				size={40}
				strokeWidth={15}
				strokeLinecap="round"
				strokeColor={strokeColor}
				railColor={railColor}
				format={() => null}
			/>
			<span className="text-[17px] font-medium text-white/50">{percent}%</span>
		</div>
	)
}

export default function PoolPanel() {
	const p = poolPageMock.poolStatus
	const s = poolPageMock.spaStatus
	const g = poolPageMock.guestsRatio
	const adultPct = Math.round((100 * g.adults) / (g.adults + g.kids))
	const poolF = parseTempF(p.temp)
	const spaF = parseTempF(s.temp)

	return (
		<div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
			<section className="pb-4">
				<div className="flex items-start justify-between gap-2">
					<div className="flex items-center gap-2 text-[18px] font-medium text-white">
						<Waves className="h-5 w-5 shrink-0 text-[#00d4c0]" />
						<span>Pool</span>
					</div>
					<span className="text-[12px] text-white/40">{p.maxVisitors} max</span>
				</div>
				<div className="mt-4 flex flex-row items-center justify-between gap-x-3 gap-y-5 sm:gap-x-4 md:gap-x-6">
					<TempBlock tempLabel={p.temp} fahrenheit={poolF} />
					<StatBlock value={p.avgDwell} label="Avg. Dwell" />
					<StatBlock value={String(p.peakVisitors)} label="Peak" />
					<StatBlock value={String(p.currentVisitors)} label="Now" />
					<CapacityRing percent={p.capacityPercent} strokeColor="#00D4C0" railColor="#00D4C033" />
				</div>
			</section>

			<section className="border-t border-white/10 py-4">
				<div className="flex items-start justify-between gap-2">
					<div className="flex items-center gap-2 text-[18px] font-medium text-white">
						<Thermometer className="h-5 w-5 shrink-0 text-[#00d4c0]" />
						<span>Spa / Hot Tub</span>
					</div>
					<span className="text-[12px] text-white/40">{s.maxVisitors} max</span>
				</div>
				<div className="mt-4 flex flex-row items-center justify-between gap-x-3 gap-y-5 sm:gap-x-4 md:gap-x-6">
					<TempBlock tempLabel={s.temp} fahrenheit={spaF} />
					<StatBlock value={s.avgDwell} label="Avg. Dwell" />
					<StatBlock value={String(s.visitorsToday)} label="Today" />
					<StatBlock value={String(s.currentVisitors)} label="Now" />
					<CapacityRing percent={s.capacityPercent} strokeColor="#00D4C0" railColor="#00D4C033" />
				</div>
			</section>

			<section className="border-t flex flex-col gap-2 border-white/10 pt-4 ">
				<div className="flex flex-wrap items-start justify-between gap-2">
					<div className="flex items-center gap-2 text-[18px] font-medium text-white">
						<Users className="h-5 w-5 shrink-0 text-[#00d4c0]" />
						<span>Guests Breakdown</span>
					</div>
					<span className="text-[13px] text-white/40">Total today: {g.totalToday}</span>
				</div>
				<div className="mt-4 flex flex-wrap items-start justify-between gap-4">
					<div className="min-w-[7rem]">
						<span className="text-[14px] text-[#00d4c0]">Adults</span>
						<span className="text-[14px] ml-2 text-white">{g.adultsNow} now</span>
						<span className="ml-2 text-[14px] text-white/45">{g.adultsToday} today</span>
					</div>
					<span className="rounded-[3px] bg-white/10 px-2 py-1 text-[12px] text-white/65">Ratio: {g.adults}:{g.kids}</span>
					<div className="min-w-[7rem] text-left sm:text-right">
						<span className="text-[13px] font-medium text-[#00d4c0]">Kids</span>
						<span className="text-[14px] ml-2 text-white">{g.kidsNow} now</span>
						<span className="ml-2 text-[13px] text-white/45">{g.kidsToday} today</span>
					</div>
				</div>
				<div className="mt-4 h-[8px] overflow-hidden rounded-full bg-[#0f2a2a]">
					<div className="flex h-full w-full">
						<div className="h-full bg-[#00D4C0]" style={{ width: `${adultPct}%` }} />
						<div className="h-full bg-[#f59e0b]" style={{ width: `${100 - adultPct}%` }} />
					</div>
				</div>
			</section>
		</div>
	)
}
