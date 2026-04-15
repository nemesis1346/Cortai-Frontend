import { MoreHorizontal, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Card, { CardBody } from '../../../components/Card'
import { meetingPageMock } from '../../../data/mock'

export default function AnalysisStrip() {
	const [now, setNow] = useState(new Date())
	useEffect(() => {
		const id = setInterval(() => setNow(new Date()), 1000)
		return () => clearInterval(id)
	}, [])
	const updated = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(now)
	return (
		<Card className="rounded-2xl border border-brand/60 bg-brand/10">
			<div className="mb-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
				<div className="inline-flex min-w-0 items-center gap-2 text-[17px] text-text sm:text-[18px]">
					<Sparkles className="h-4 w-4 shrink-0 text-brand" />
					<span className="truncate">CORTAI Analysis</span>
				</div>
				<div className="rounded-[3px] bg-panel px-2 py-1 text-[12px] text-text-dim">Updated: {updated}</div>
				<div className="flex flex-wrap items-center justify-between gap-2 sm:justify-end sm:gap-3">
					<button type="button" className="inline-flex items-center text-text-dim">
						<MoreHorizontal className="h-4 w-4" />
					</button>
				</div>
			</div>
			<CardBody className="grid grid-cols-1 divide-x divide-border/80 sm:grid-cols-2 lg:grid-cols-4">
				{meetingPageMock.analysisStrips.map((strip, i) => (
					<div
						key={i}
						className={`px-2 py-3 sm:px-3 ${i === 0 ? 'lg:pr-2' : ''} ${i === 1 || i === 2 ? 'lg:px-3' : ''} ${i === 3 ? 'lg:pl-4' : ''}`}
					>
						{'plain' in strip ? (
							<div className="text-[14px] leading-6 text-text">{strip.plain}</div>
						) : (
							<>
								<div className={`text-[14px] ${strip.titleClass}`}>{strip.title}:</div>
								<div className="mt-1 text-[12px] leading-6">
									{strip.segments.map((s, si) => (
										<span
											key={si}
											className={s.bold ? 'font-semibold text-text' : 'text-text-dim'}
										>
											{s.text}
										</span>
									))}
								</div>
							</>
						)}
					</div>
				))}
			</CardBody>
		</Card>
	)
}
