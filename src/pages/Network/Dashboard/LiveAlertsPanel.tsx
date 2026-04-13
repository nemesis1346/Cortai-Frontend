import { Bell, ExternalLink, Filter, Search, Zap } from 'lucide-react'
import { CardBody, CardHeader } from '../../../components/Card'
import type { AlertItem } from './types'

const severityClassMap: Record<AlertItem['severity'], string> = {
	critical: 'bg-red-500/25 text-red-300',
	high: 'bg-orange-500/25 text-orange-300',
	medium: 'bg-amber-400/20 text-amber-200',
}

function severityLabel(s: AlertItem['severity']) {
	return s.charAt(0).toUpperCase() + s.slice(1)
}

type LiveAlertsSummary = {
	today: string
	high: string
	critical: string
}

type LiveAlertsPanelProps = {
	items: AlertItem[]
	summary?: LiveAlertsSummary
}

function defaultSummary(items: AlertItem[]): LiveAlertsSummary {
	return {
		today: String(items.length),
		high: String(items.filter((i) => i.severity === 'high').length),
		critical: String(items.filter((i) => i.severity === 'critical').length),
	}
}

export default function LiveAlertsPanel({ items, summary }: LiveAlertsPanelProps) {
	const s = summary ?? defaultSummary(items)

	return (
		<div className="card flex h-full flex-col p-4">
			<CardHeader
				left={(
					<div className="flex items-center gap-2">
						<Bell className="h-5 w-5 shrink-0 text-[#00D4C0]" strokeWidth={1.75} />
						<h3 className="card-title !mb-0 text-[15px] font-semibold">Live Alerts</h3>
					</div>
				)}
				middle={(
					<div className="flex flex-wrap items-center justify-center gap-2">
						<span className="rounded-[3px] bg-white/[0.08] px-2 py-1 text-[11px] font-medium text-white/55">
							{s.today}
							{' '}
							today
						</span>
						<span className="rounded-[3px] bg-orange-500/20 px-2 py-1 text-[11px] font-medium text-orange-300">
							{s.high}
							{' '}
							high
						</span>
						<span className="rounded-[3px] bg-red-500/25 px-2 py-1 text-[11px] font-medium text-red-300">
							{s.critical}
							{' '}
							critical
						</span>
					</div>
				)}
				right={(
					<div className="flex items-center gap-0.5">
						<button type="button" className="rounded-md p-1.5 text-white/50 transition hover:bg-white/[0.06] hover:text-white" aria-label="Search alerts">
							<Search className="h-4 w-4" strokeWidth={1.75} />
						</button>
						<button type="button" className="rounded-md p-1.5 text-white/50 transition hover:bg-white/[0.06] hover:text-white" aria-label="Filter alerts">
							<Filter className="h-4 w-4" strokeWidth={1.75} />
						</button>
						<button type="button" className="rounded-md p-1.5 text-white/50 transition hover:bg-white/[0.06] hover:text-white" aria-label="Open in new view">
							<ExternalLink className="h-4 w-4" strokeWidth={1.75} />
						</button>
					</div>
				)}
			/>
			<CardBody className="min-h-0 flex-1 overflow-auto pt-1">
				<div className="divide-y divide-white/[0.06]">
					{items.map((item) => (
						<div
							key={item.id}
							className="grid grid-cols-[1fr_1.5fr_0.7fr_0.4fr_0.5fr] items-center gap-3 py-2 first:pt-0"
						>
							<div
								className={`min-w-0 text-[13px] font-medium leading-snug ${item.severity === 'critical' ? 'text-red-400' : 'text-white/90'}`}
							>
								{item.event}
							</div>
							<div className="min-w-0 text-[12px] leading-snug text-white/45">{item.asset}</div>
							<div className="shrink-0 whitespace-nowrap text-[12px] text-white/45">{item.time}</div>
							<div className='flex items-center justify-end'>
								<span className={`capitalize rounded-[3px] px-2 py-1 text-[11px] ${severityClassMap[item.severity]}  font-medium`}>{severityLabel(item.severity)}</span>
							</div>
							<div className="flex shrink-0 justify-end">
								<button
									type="button"
									className={`flex h-8 w-8 items-center justify-center rounded-md transition ${item.severity === 'critical' ? 'bg-[#FF00001A] text-[#FF0000] hover:bg-[#FF00001A]' : 'border border-white/10 text-white hover:bg-[#00D4C01A]'}`}
									aria-label={item.severity === 'critical' ? 'Take action' : 'View details'}
								>
									{item.severity === 'critical'
										? <Zap className="h-4 w-4" fill="currentColor" strokeWidth={0} />
										: <Search className="h-4 w-4" strokeWidth={1.75} />}
								</button>
							</div>
						</div>
					))}
				</div>
			</CardBody>
		</div>
	)
}
