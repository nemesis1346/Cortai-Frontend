import wavesIconUrl from '../../../assets/waves.svg?url'
import guestsBreakdownIconUrl from '../../../assets/guests-breakdown.svg?url'
import { Thermometer } from 'lucide-react'
import { Progress } from 'antd'
import { poolPageMock } from '../../../data/mock'
import { chartHex } from '../../../theme/tokens.generated'

function parseTempF(s: string) {
	return Number.parseInt(s.replace(/\D/g, ''), 10) || 0
}

function TempGauge({ fahrenheit, min = 75, max = 110 }: { fahrenheit: number; min?: number; max?: number }) {
	const pct = Math.min(100, Math.max(0, ((fahrenheit - min) / (max - min)) * 100))
	return (
		<div className="flex shrink-0 items-end gap-1">
			<div className="relative h-[3.25rem] w-2.5 shrink-0">
				<div
					className="absolute -right-1 w-0 h-0 border-y-[0.3125rem] border-y-transparent border-l-[0.4375rem] border-r-[color:var(--primitive-white-shadow-100)]"
					style={{ bottom: `calc(${pct}% - 0.3125rem)` }}
				/>
			</div>
			<div className="h-[3.25rem] w-2 shrink-0 overflow-hidden rounded-sm border border-[color:var(--primitive-white-shadow-20)]">
				<div className="flex h-full flex-col">
					<div className="flex-1 bg-[color:var(--primitive-accent-orange)]" />
					<div className="flex-1 bg-[color:var(--primitive-semantic-success)]" />
				</div>
			</div>
		</div>
	)
}

function StatBlock({ value, label }: { value: string; label: string }) {
	return (
		<div className="flex min-w-[3.25rem] flex-col items-center gap-1 text-center">
			<div className="text-[1.0625rem] font-semibold leading-tight text-text sm:text-[1.125rem]">{value}</div>
			<div className="text-[0.6875rem] leading-tight text-text-dim">{label}</div>
		</div>
	)
}

function TempBlock({ tempLabel, fahrenheit }: { tempLabel: string; fahrenheit: number }) {
	return (
		<div className="flex shrink-0 items-center gap-2">
			<TempGauge fahrenheit={fahrenheit} />
			<div className="flex flex-col gap-2 justify-between">
				<span className="text-[1.1875rem] font-bold leading-none text-ok sm:text-[1.3125rem]">{tempLabel}</span>
				<span className="text-[0.6875rem] text-text-dim">Temp.</span>
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
			<span className="text-[1.0625rem] font-medium text-text-dim">{percent}%</span>
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
		<div className="rounded-2xl border border-border bg-card p-4">
			<section className="pb-4">
				<div className="flex items-start justify-between gap-2">
					<div className="flex items-center gap-2 text-[1.125rem] font-medium text-text">
						<img src={wavesIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<span>Pool</span>
					</div>
					<span className="text-[0.75rem] text-text-dim">{p.maxVisitors} max</span>
				</div>
				<div className="mt-4 flex flex-row items-center justify-between gap-x-3 gap-y-5 sm:gap-x-4 md:gap-x-6">
					<TempBlock tempLabel={p.temp} fahrenheit={poolF} />
					<StatBlock value={p.avgDwell} label="Avg. Dwell" />
					<StatBlock value={String(p.peakVisitors)} label="Peak" />
					<StatBlock value={String(p.currentVisitors)} label="Now" />
					<CapacityRing percent={p.capacityPercent} strokeColor={chartHex.brand} railColor={chartHex.brandRail} />
				</div>
			</section>

			<section className="border-t border-border py-4">
				<div className="flex items-start justify-between gap-2">
					<div className="flex items-center gap-2 text-[1.125rem] font-medium text-text">
						<Thermometer className="h-5 w-5 shrink-0 text-brand" />
						<span>Spa / Hot Tub</span>
					</div>
					<span className="text-[0.75rem] text-text-dim">{s.maxVisitors} max</span>
				</div>
				<div className="mt-4 flex flex-row items-center justify-between gap-x-3 gap-y-5 sm:gap-x-4 md:gap-x-6">
					<TempBlock tempLabel={s.temp} fahrenheit={spaF} />
					<StatBlock value={s.avgDwell} label="Avg. Dwell" />
					<StatBlock value={String(s.visitorsToday)} label="Today" />
					<StatBlock value={String(s.currentVisitors)} label="Now" />
					<CapacityRing percent={s.capacityPercent} strokeColor={chartHex.brand} railColor={chartHex.brandRail} />
				</div>
			</section>

			<section className="border-t flex flex-col gap-2 border-border pt-4 ">
				<div className="flex flex-wrap items-start justify-between gap-2">
					<div className="flex items-center gap-2 text-[1.125rem] font-medium text-text">
						<img src={guestsBreakdownIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<span>Guests Breakdown</span>
					</div>
					<span className="text-[0.8125rem] text-text-dim">Total today: {g.totalToday}</span>
				</div>
				<div className="mt-4 flex flex-wrap items-start justify-between gap-4">
					<div className="min-w-[7rem]">
						<span className="text-[0.875rem] text-brand">Adults</span>
						<span className="text-[0.875rem] ml-2 text-text">{g.adultsNow} now</span>
						<span className="ml-2 text-[0.875rem] text-text-dim">{g.adultsToday} today</span>
					</div>
					<span className="rounded-[0.1875rem] bg-[color:var(--primitive-white-shadow-5)] px-2 py-1 text-[0.75rem] text-text-dim">Ratio: {g.adults}:{g.kids}</span>
					<div className="min-w-[7rem] text-left sm:text-right">
						<span className="text-[0.8125rem] font-medium text-brand">Kids</span>
						<span className="text-[0.875rem] ml-2 text-text">{g.kidsNow} now</span>
						<span className="ml-2 text-[0.8125rem] text-text-dim">{g.kidsToday} today</span>
					</div>
				</div>
				<div className="mt-4 h-[0.5rem] overflow-hidden rounded-full bg-[color:var(--primitive-brand-900)]">
					<div className="flex h-full w-full">
						<div className="h-full bg-brand" style={{ width: `${adultPct}%` }} />
						<div className="h-full bg-warn" style={{ width: `${100 - adultPct}%` }} />
					</div>
				</div>
			</section>
		</div>
	)
}
