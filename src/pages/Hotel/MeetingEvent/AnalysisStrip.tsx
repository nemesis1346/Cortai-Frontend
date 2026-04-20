import { MoreHorizontal } from 'lucide-react'
import { useEffect, useState } from 'react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { meetingPageMock } from '../../../data/mock'
import sparklesIconUrl from '../../../assets/sparkles.svg?url'
export default function AnalysisStrip() {
	const [now, setNow] = useState(new Date())
	useEffect(() => {
		const id = setInterval(() => setNow(new Date()), 1000)
		return () => clearInterval(id)
	}, [])
	const updated = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(now)
	return (
		<Card className="rounded-2xl border border-brand/10 bg-brand/10">
			<CardHeader 
			left={
				<div className="inline-flex min-w-0 items-center gap-2 text-[1.0625rem] text-text sm:text-[1.125rem]">
					<img src={sparklesIconUrl} alt="" className="h-5 w-5 shrink-0" />
					<span>CORTAI Analysis</span>
				</div>
			} 
			middle={
			<span className="rounded-[0.1875rem] bg-[color:var(--primitive-white-shadow-5)] px-2 py-1 text-[0.75rem] text-text-dim">Updated: {updated}</span>} 
			right={
				<button type="button" className="inline-flex items-center text-text-dim">
					<MoreHorizontal className="h-4 w-4" />
				</button>
			} />
			<CardBody className="grid grid-cols-1 divide-x divide-border/80 sm:grid-cols-2 lg:grid-cols-4">
				{meetingPageMock.analysisStrips.map((strip, i) => (
					<div
						key={i}
						className={`py-3 ${i === 0 ? 'lg:pr-2' : ''} ${i === 1 || i === 2 ? 'lg:px-3' : ''} ${i === 3 ? 'lg:pl-4' : ''}`}
					>
						{'plain' in strip ? (
							<div className="text-[0.875rem] leading-6 text-text">{strip.plain}</div>
						) : (
							<>
								<div className={`text-[0.875rem] ${strip.titleClass}`}>{strip.title}:</div>
								<div className="mt-1 text-[0.75rem] leading-6">
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
