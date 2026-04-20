import { MoreHorizontal } from 'lucide-react'
import sparklesIconUrl from '../../../assets/sparkles.svg?url'
import { useEffect, useState } from 'react'
import Card, { CardBody, CardHeader } from '../../../components/Card'
import { fitnessPageMock } from '../../../data/mock'

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
				left={(
					<div className="text-[1.125rem] text-text inline-flex items-center gap-2">
						<img src={sparklesIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<span>CORTAI Analysis</span>
					</div>
				)}
				middle={<span className="rounded-[0.1875rem] bg-[color:var(--primitive-white-shadow-5)] px-2 py-1 text-[0.75rem] text-text-dim">Updated: {updated}</span>}
				right={(
					<button type="button" className="inline-flex items-center text-text-dim">
						<MoreHorizontal className="w-4 h-4" />
					</button>
				)}
			/>
			<CardBody className="pt-3 grid grid-cols-1 xl:grid-cols-4 divide-y xl:divide-y-0 xl:divide-x divide-border">
				{fitnessPageMock.analysisStrips.map((strip, i) => (
					<div
						key={i}
						className={`py-3 ${i === 0 ? 'xl:pr-2' : ''} ${i === 1 || i === 2 ? 'xl:px-3' : ''} ${i === 3 ? 'xl:pl-4' : ''}`}
					>
						{strip.title ? (
							<>
								<div className={`text-[0.875rem] ${strip.titleClass ?? ''}`}>{strip.title}:</div>
								<div className="mt-1 text-[0.75rem] leading-6 text-text-dim">{strip.body}</div>
							</>
						) : (
							<div className="text-[0.875rem] leading-6 text-text">{strip.body}</div>
						)}
					</div>
				))}
			</CardBody>
		</Card>
	)
}
