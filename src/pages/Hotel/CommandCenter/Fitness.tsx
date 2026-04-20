import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Dumbbell, ExternalLink } from 'lucide-react'
import { fitnessMock } from '../../../data/mock'

export default function Fitness() {
	return (
		<Card className="flex h-full min-h-[8rem] flex-col">
			<CardHeader
				left={
					<div className="flex items-start gap-2">
						<Dumbbell className="h-5 w-5 shrink-0 text-brand" />
						<h3 className="card-title">{fitnessMock.title}</h3>
					</div>
				}
				middle={<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text-dim">{fitnessMock.capacity} capacity</span>}
				right={
					<div className="card-header-actions">
						<button type="button" className="card-header-icon-btn" aria-label="Open external">
							<ExternalLink />
						</button>
					</div>
				}
			/>
			<CardBody className="flex min-h-0 flex-1 flex-col">
				<div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
					<div className="flex flex-col items-baseline gap-1">
						<div className="text-large-semibold text-text">{fitnessMock.now}</div>
						<div className="text-small text-text-dim">Now</div>
					</div>
					<div className="flex flex-col items-baseline gap-1">
						<div className="text-large-semibold text-text">{fitnessMock.total}</div>
						<div className="text-small text-text-dim">Total</div>
					</div>
					<div className="flex flex-col items-baseline gap-1">
						<div className="text-large-semibold text-text">{fitnessMock.avgSession}</div>
						<div className="text-small text-text-dim">Avg Session</div>
					</div>
					<div className="flex flex-col items-baseline gap-1">
						<div className="text-large-semibold text-ok">{fitnessMock.temperature}</div>
						<div className="text-small text-text-dim">Temperature</div>
					</div>
					<div className="flex flex-col items-baseline gap-1">
						<div className="text-large-semibold text-ok">{fitnessMock.humidity}</div>
						<div className="text-small text-text-dim">Humidity</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
 
