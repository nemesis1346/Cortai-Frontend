import { Cable, ExternalLink, Filter, Search } from 'lucide-react'
import { CardBody, CardHeader } from '../../../components/Card'
import type { ThreatItem } from './types'

const statusClassMap: Record<ThreatItem['status'], string> = {
	blocked: 'bg-[color:var(--primitive-semantic-success-10)] text-ok',
	investigating: 'bg-[color:var(--primitive-accent-yellow-10)] text-warn',
}

function statusLabel(s: ThreatItem['status']) {
	return s === 'blocked' ? 'Blocked' : 'Investigating'
}

function isTrojanType(type: string) {
	return /trojan/i.test(type)
}

type ThreatCategoryStats = {
	malware: string
	phishing: string
	intrusion: string
}

type ThreatHeaderSummary = {
	blocked: string
	risk: string
	categories: ThreatCategoryStats
}

type ThreatIntelligencePanelProps = {
	items: ThreatItem[]
	summary?: ThreatHeaderSummary
}

function defaultCategoryStats(items: ThreatItem[]): ThreatCategoryStats {
	return {
		malware: String(items.filter((i) => /trojan|malware|worm|virus|generic/i.test(i.type)).length),
		phishing: String(items.filter((i) => /phishing/i.test(i.type)).length),
		intrusion: String(items.filter((i) => /sql|injection|intrusion|ransom|ddos/i.test(i.type)).length),
	}
}

function defaultSummary(items: ThreatItem[]): ThreatHeaderSummary {
	const blocked = items.filter((i) => i.status === 'blocked').length
	const hasReview = items.some((i) => i.status === 'investigating')
	return {
		blocked: `${blocked.toLocaleString()} blocked`,
		risk: hasReview ? 'Review pending' : 'Low Risk',
		categories: defaultCategoryStats(items),
	}
}

export default function ThreatIntelligencePanel({ items, summary }: ThreatIntelligencePanelProps) {
	const s = summary ?? defaultSummary(items)

	return (
		<div className="card flex h-full flex-col p-4">
			<CardHeader
				left={(
					<div className="flex items-center gap-2">
						<Search className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
						<h3 className="card-title !mb-0">Threat Intelligence</h3>
					</div>
				)}
				middle={(
					<div className="flex flex-wrap items-center justify-center gap-2">
						<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-[11px] font-medium text-text">
							{s.blocked}
						</span>
						<span className="rounded-[3px] bg-[color:var(--primitive-semantic-success-10)] px-2 py-1 text-[11px] font-medium text-ok">
							{s.risk}
						</span>
					</div>
				)}
				right={(
					<div className="flex items-center gap-0.5">
						<button type="button" className="rounded-md p-1.5 text-text-dim transition hover:bg-[color:var(--primitive-white-shadow-5)] hover:text-text" aria-label="Search threats">
							<Search className="h-4 w-4" strokeWidth={1.75} />
						</button>
						<button type="button" className="rounded-md p-1.5 text-text-dim transition hover:bg-[color:var(--primitive-white-shadow-5)] hover:text-text" aria-label="Filter threats">
							<Filter className="h-4 w-4" strokeWidth={1.75} />
						</button>
						<button type="button" className="rounded-md p-1.5 text-text-dim transition hover:bg-[color:var(--primitive-white-shadow-5)] hover:text-text" aria-label="Open in new view">
							<ExternalLink className="h-4 w-4" strokeWidth={1.75} />
						</button>
					</div>
				)}
			/>
			<CardBody className="min-h-0 flex-1 overflow-auto pt-1">
				<div className="flex flex-row justify-between items-center py-4">
					<div className='flex flex-col items-start justify-start'>
						<div className="text-[18px] font-semibold leading-none tracking-tight text-text">{s.categories.malware}</div>
						<div className="mt-1 text-[11px] text-text-mute">Malware</div>
					</div>
					<div className='flex flex-col items-start justify-start'>
						<div className="text-[18px] font-semibold leading-none tracking-tight text-text">{s.categories.phishing}</div>
						<div className="mt-1 text-[11px] text-text-mute">Phishing</div>
					</div>
					<div className='flex flex-col items-start justify-start'>
						<div className="text-[18px] font-semibold leading-none tracking-tight text-text">{s.categories.intrusion}</div>
						<div className="mt-1 text-[11px] text-text-mute">Intrusion</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					{items.map((item) => (
						<div
							key={item.id}
							className="grid grid-cols-[1.5fr_0.7fr_0.7fr_0.5fr] border-b border-border items-center gap-3 py-1 first:pt-0"
						>
							<div
								className={`min-w-0 text-[14px] font-medium leading-snug ${isTrojanType(item.type) ? 'text-danger' : 'text-text'}`}
							>
								{item.type}
							</div>
							<div className="flex min-w-0 items-center gap-1.5 text-[14px] leading-snug text-text-mute">
								<Cable className="h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2} aria-hidden />
								<span className="truncate">{item.source}</span>
							</div>
							<div className="shrink-0 whitespace-nowrap text-[14px] text-text-mute">{item.time}</div>
							<div className="flex justify-end">
								<span className={`rounded-[3px] px-2 py-1 text-[14px] ${statusClassMap[item.status]} font-medium`}>
									{statusLabel(item.status)}
								</span>
							</div>
						</div>
					))}
				</div>
			</CardBody>
		</div>
	)
}
