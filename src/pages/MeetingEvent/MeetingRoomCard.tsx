import { useMemo, useState } from 'react'
import { ArrowUpDown, BarChart3, Monitor, Presentation } from 'lucide-react'
import { Progress } from 'antd'
import { Column } from '@ant-design/plots'
import Card, { CardBody } from '../../components/Card'
import { meetingPageMock } from '../../data/mock'

type Room = (typeof meetingPageMock.meetingRooms)[number]
type Tab = 'overview' | 'av' | 'history'

const TABS: { id: Tab; label: string }[] = [
	{ id: 'overview', label: 'Overview & Stats' },
	{ id: 'av', label: 'AV & Equipment' },
	{ id: 'history', label: 'Event History' },
]

function EnvGauge({ pointerBottomPct }: { pointerBottomPct: number }) {
	return (
		<div className="flex shrink-0 items-end gap-0.5">
			<div className="relative h-10 w-2 shrink-0">
				<div
					className="absolute -right-1 w-0 border-y-[3px] border-y-transparent border-l-[5px] border-r-white"
					style={{ bottom: `calc(${pointerBottomPct}%)` }}
				/>
			</div>
			<div className="h-10 w-1.5 shrink-0 overflow-hidden rounded-sm border border-white/15">
				<div className="flex h-full flex-col">
					<div className="flex-[2] bg-[#eab308]/90" />
					<div className="flex-[1] bg-[#16a34a]/95" />
				</div>
			</div>
		</div>
	)
}

function noisePointerPct(db: number) {
	const t = (Math.min(75, Math.max(40, db)) - 40) / 35
	return Math.min(30, Math.max(6, 8 + t * 22))
}

const CHART_H = 240
const CHART_Y_MAX = 160
const COLOR_EVENTS = '#B758F1'
const COLOR_GUESTS = '#00D4C0'

export default function MeetingRoomCard({ room }: { room: Room }) {
	const [tab, setTab] = useState<Tab>('overview')

	const peakLabel = useMemo(() => {
		let best = { month: '', events: -1 }
		for (const row of room.monthlyUsage) {
			if (row.events > best.events) best = { month: row.month, events: row.events }
		}
		if (best.events <= 0) return ''
		return `Peak: ${best.month} (${best.events} events)`
	}, [room.monthlyUsage])

	const chartEventColor = room.chartColors?.events ?? COLOR_EVENTS
	const chartGuestColor = room.chartColors?.guests ?? COLOR_GUESTS

	const columnConfig = useMemo(() => {
		const flat = room.monthlyUsage.flatMap((m) => [
			{ month: m.month, value: m.events, series: 'Events' as const },
			{ month: m.month, value: m.guests, series: 'Guests' as const },
		])
		return {
			data: flat,
			xField: 'month',
			yField: 'value',
			colorField: 'series',
			group: { padding: 0.1 },
			height: CHART_H,
			autoFit: true,
			legend: false,
			markBackground: {
				style: {
					fill: 'rgba(255,255,255,0.06)',
					radius: 0,
				},
			},
			style: { maxWidth: 50, radius: 0 },
			scale: {
				x: { paddingInner: 0.3, paddingOuter: 0.1 },
				y: { domain: [0, CHART_Y_MAX], nice: false },
				color: {
					domain: ['Events', 'Guests'],
					range: [chartEventColor, chartGuestColor],
				},
			},
			label: false,
			axis: {
				x: {
					labelFill: 'rgba(255,255,255,0.5)',
					lineStroke: 'rgba(250, 237, 237, 0)',
					labelFontSize: 11,
				},
				y: false,
			},
			tooltip: {
				items: [{ channel: 'y' }],
			},
		}
	}, [room.monthlyUsage, chartEventColor, chartGuestColor])

	const m = room.metrics
	const ev = room.currentEvent
	const durationLabel = room.durationLabel ?? 'Avg. Duration'
	const HeaderIcon = room.icon === 'presentation' ? Presentation : Monitor

	return (
		<Card className="rounded-2xl border border-white/10 bg-[#FFFFFF08]">
			<div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
				<div className="flex min-w-0 items-start gap-2 sm:gap-3">
					<HeaderIcon className="h-5 w-5 shrink-0 text-[#00d4c0]" strokeWidth={1.75} />
					<div className="min-w-0">
						<div className="text-[17px] font-medium text-white sm:text-[18px]">{room.name}</div>
					</div>
				</div>
				<div className="text-[11px] text-white/50 sm:text-[12px]">
					Capacity {room.capacity} · {room.guestsYtd} guests YTD
				</div>
				<div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 md:items-end">
					<span
						className={`w-fit rounded-[3px] px-2 py-1 text-[12px] font-medium ${
							room.status === 'setup'
								? 'bg-[#c58b11]/10 text-[#e7b85c]'
								: room.status === 'in_use'
									? 'bg-[#22c55e]/10 text-[#22c55e]'
									: 'bg-white/[0.06] text-white/55'
						}`}
					>
						{room.status === 'setup' ? 'Setup' : room.status === 'in_use' ? 'In Use' : 'Available'}
					</span>
				</div>
			</div>
			<CardBody className="pt-0">
				<div className="flex flex-wrap gap-2 py-3">
					{TABS.map((t) => (
						<button
							key={t.id}
							type="button"
							onClick={() => setTab(t.id)}
							className={`rounded-[5px] px-3 py-2 !text-[12px] font-medium transition-[color,background-color,border-color,transform] duration-200 ease-out active:scale-[0.98] ${
								tab === t.id
									? 'border-[1px] border-[#00d4c0]/45 !text-[#00d4c0]'
									: 'border-[1px] border-transparent text-white/45 hover:text-white/70'
							}`}
						>
							{t.label}
						</button>
					))}
				</div>

				<div className="mt-4 flex flex-col gap-5">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6 border-b border-white/10 pb-4">
						<div
							className={`shrink-0 p-4 lg:max-w-[22rem] lg:min-w-[14rem] ${
								'setupProgress' in ev && ev.setupProgress != null
									? 'rounded-[5px] border border-[#c58b11]/25 bg-[#1a1814]'
									: 'rounded-[5px] bg-white/[0.06]'
							}`}
						>
							<div className="flex items-start justify-between gap-4">
								<div className="min-w-0 flex flex-col gap-2">
									<div className="text-[14px] font-medium text-white">{ev.name}</div>
									<div className="text-[12px] text-white/50">{ev.time}</div>
								</div>
								{'setupProgress' in ev && ev.setupProgress != null ? (
									<div className="flex shrink-0 flex-col items-center gap-1">
										<Progress
											type="circle"
											percent={ev.setupProgress}
											size={28}
											strokeWidth={15}
											strokeColor="#d4a017"
											trailColor="#3d301d"
											format={() => ''}
										/>
										<span className="text-center text-[12px] leading-tight text-[#8e8e8e]">
											{ev.setupProgress}%
										</span>
									</div>
								) : (
									<div
										className={`shrink-0 rounded-[3px] px-2 py-1 text-[11px] font-medium ${
											ev.badge === 'Now'
												? 'bg-[#00d4c0]/20 text-[#00d4c0]'
												: 'bg-white/[0.06] text-white/55'
										}`}
									>
										{ev.badge}
									</div>
								)}
							</div>
						</div>
						<div className="flex min-w-0 flex-1 flex-wrap content-start items-end justify-between gap-x-3 gap-y-4 p-4">
							{'now' in m && m.now !== undefined ? (
								<div className="flex min-w-[3.25rem] flex-col gap-2">
									<div className="text-[18px] font-bold leading-none text-white">{m.now}</div>
									<div className="text-[11px] text-white/45">Now</div>
								</div>
							) : null}
							<div className="flex min-w-[3.75rem] flex-col gap-2">
								<div className="text-[18px] font-bold leading-none text-white">{m.temp}</div>
								<div className="text-[11px] text-white/45">Temp</div>
							</div>
							<div className="flex min-w-[3.75rem] flex-col gap-2">
								<div className="text-[18px] font-bold leading-none text-[#38bdf8]">{m.humidity}</div>
								<div className="text-[11px] text-white/45">Humidity</div>
							</div>
							<div className="flex min-w-0 items-end gap-2">
								<EnvGauge pointerBottomPct={noisePointerPct(m.noiseDb)} />
								<div className="flex flex-col gap-0.5 pb-0.5">
									<div className="text-[18px] font-bold leading-none text-[#22c55e]">{m.noiseDb}dB</div>
									<div className="text-[11px] text-white/45">Noise</div>
								</div>
							</div>
							<div className="flex min-w-[4.5rem] flex-col gap-2">
								<div className="text-[18px] font-bold leading-none text-white">{m.avgDuration}</div>
								<div className="text-[11px] text-white/45">{durationLabel}</div>
							</div>
							<div className="flex min-w-[3.75rem] flex-col gap-2">
								<div className="text-[18px] font-bold leading-none text-white">{m.avgGuests}</div>
								<div className="text-[11px] text-white/45">Avg. Guests</div>
							</div>
							<div className="flex min-w-[3.75rem] flex-col gap-2">
								<div className="text-[18px] font-bold leading-none text-[#00d4c0]">{m.ytdEvents}</div>
								<div className="text-[11px] text-white/45">YTD Events</div>
							</div>
							<div className="flex min-w-[3.75rem] flex-col gap-2">
								<div className="text-[18px] font-bold leading-none text-[#00d4c0]">{m.revenue}</div>
								<div className="text-[11px] text-white/45">Revenue</div>
							</div>
						</div>
					</div>
					{tab === 'overview' && (
						<div className="meeting-tab-panel">
							<div className="mb-2 flex min-h-[1.5rem] flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2">
								<div className="flex items-center gap-2 text-[13px] font-medium text-white/80">
									<BarChart3 className="h-4 w-4 shrink-0 text-[#00d4c0]" strokeWidth={1.75} />
									<span>Monthly Usage (YTD)</span>
								</div>
								<div className="flex items-center gap-4">
									<span className="inline-flex items-center gap-1.5 text-[12px] text-white/50">
										<span
											className="h-2 w-2 shrink-0 rounded-full"
											style={{ backgroundColor: chartEventColor }}
										/>
										Events
									</span>
									<span className="inline-flex items-center gap-1.5 text-[12px] text-white/50">
										<span
											className="h-2 w-2 shrink-0 rounded-full"
											style={{ backgroundColor: chartGuestColor }}
										/>
										Guests
									</span>
								</div>
								<div className="flex flex-wrap items-center gap-4 sm:gap-6">
									{peakLabel ? (
										<span className="text-[12px] font-medium whitespace-nowrap text-[#00d4c0]">{peakLabel}</span>
									) : null}
								</div>
							</div>
							<div className="flex w-full min-w-0 flex-col">
								<div
									className="grid grid-cols-12 px-3"
									aria-hidden
								>
									{room.monthlyUsage.map((row) => (
										<div
											key={row.month}
											className="flex flex-row justify-between items-center p-0"
										>
											<div className="w-1/2 text-[10px] text-center font-normal text-white/55">
												{row.events}
											</div>
											<div className="w-1/2 text-[10px] text-center font-normal text-white/55">
												{row.guests}
											</div>
										</div>
									))}
								</div>
								<div className="min-h-0 min-w-0 flex-1">
									<Column {...(columnConfig as object)} />
								</div>
							</div>
						</div>
						)}
					</div>

				{tab === 'av' && (
					<div className="meeting-tab-panel mt-4 overflow-x-auto rounded-lg touch-pan-x [-webkit-overflow-scrolling:touch]">
						<div
							className="grid grid-cols-5 grid-cols-[2fr_1fr_1fr_auto] items-start gap-x-3 border-b border-white/10 py-2.5"
						>
							<div className="flex flex-row items-start justify-start gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Equipment
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
							<div className="flex flex-row items-start justify-start gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Model
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
							<div className="flex flex-row items-start justify-start gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Serial
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
							<div className="flex flex-row items-start justify-start gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Status
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
						</div>
						{room.avEquipment.map((item) => (
							<div
								key={item.id}
								className="grid grid-cols-5 grid-cols-[2fr_1fr_1fr_auto] items-start gap-x-3 border-b border-white/[0.07] py-2.5 last:border-b-0"
							>
								<div className="text-[13px] text-white/90">{item.name}</div>
								<div className="text-[13px] text-white/90">{item.model}</div>
								<div className="text-[13px] text-white/90">{item.serial}</div>
								<div className="flex justify-end">
									{item.status === 'good' ? (
										<span className="rounded-[3px] bg-[#052e16]/60 px-2 py-1 text-[12px] font-medium text-[#4ade80]">
											Operational
										</span>
									) : (
										<span className="rounded-[3px] bg-[#422006]/50 px-2 py-1 text-[12px] font-medium text-[#fbbf24]">
											Attention
										</span>
									)}
								</div>
							</div>
						))}
					</div>
				)}

				{tab === 'history' && (
					<div className="meeting-tab-panel mt-4 overflow-x-auto rounded-lg touch-pan-x [-webkit-overflow-scrolling:touch]">
						<div className="grid grid-cols-[0.5fr_1fr_1fr_0.5fr_0.5fr] items-center gap-x-3 border-b border-white/10 py-2.5">
							<div className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Date
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
							<div className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Equipment
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
							<div className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Type
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
							<div className="inline-flex items-center justify-end gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Guests
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
							<div className="inline-flex items-center justify-end gap-1 text-[10px] font-medium uppercase tracking-wide text-white/45">
								Duration
								<ArrowUpDown className="h-3 w-3 shrink-0 text-white/35" strokeWidth={2} />
							</div>
						</div>
						{room.eventHistory.map((row) => (
							<div
								key={row.id}
								className="grid grid-cols-[0.5fr_1fr_1fr_0.5fr_0.5fr] items-center gap-x-3 border-b border-white/[0.07] py-2.5 last:border-b-0"
							>
								<span className="text-[13px] text-white/50">{row.date}</span>
								<span className="min-w-0 text-[13px] font-semibold text-white">{row.name}</span>
								<span className="text-[13px] text-white/50">{row.type}</span>
								<span className="text-right text-[13px] tabular-nums text-white/50">{row.guests}</span>
								<span className="text-right text-[13px] tabular-nums text-white/50">{row.duration}</span>
							</div>
						))}
					</div>
				)}
			</CardBody>
		</Card>
	)
}
