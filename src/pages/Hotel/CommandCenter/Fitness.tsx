import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Dumbbell, ExternalLink } from 'lucide-react'
import { fitnessMock } from '../../../data/mock'

export default function Fitness() {
	return (
		<Card className="min-h-[110px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Dumbbell size={20} className="text-brand" />
						<h3 className="card-title">{fitnessMock.title}</h3>
					</div>
				}
				middle={<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] text-text-dim px-2 py-1 !text-[12px]">{fitnessMock.capacity} capacity</span>}
				right={
					<div className="text-text-mute">
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-text">{fitnessMock.now}</div>
						<div className="!text-[12px] text-text-dim">Now</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-text">{fitnessMock.total}</div>
						<div className="!text-[12px] text-text-dim">Total</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-text">{fitnessMock.avgSession}</div>
						<div className="!text-[12px] text-text-dim">Avg Session</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-ok">{fitnessMock.temperature}</div>
						<div className="!text-[12px] text-text-dim">Temperature</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-ok">{fitnessMock.humidity}</div>
						<div className="!text-[12px] text-text-dim">Humidity</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
 
