import Card, { CardBody, CardHeader } from '../../components/Card'
import { Dumbbell, ExternalLink } from 'lucide-react'
import { fitnessMock } from '../../data/mock'

export default function Fitness() {
	return (
		<Card className="min-h-[110px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Dumbbell size={20} className="text-teal-400" />
						<h3 className="card-title">{fitnessMock.title}</h3>
					</div>
				}
				middle={<span className="rounded-[3px] bg-[#A9AEB51A] text-white/70 px-2 py-1 !text-[12px]">{fitnessMock.capacity} capacity</span>}
				right={
					<div className="text-white/40">
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="flex flex-row gap-4 justify-between">
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-white">{fitnessMock.now}</div>
						<div className="!text-[12px] text-white/60">Now</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-white">{fitnessMock.total}</div>
						<div className="!text-[12px] text-white/60">Total</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-white">{fitnessMock.avgSession}</div>
						<div className="!text-[12px] text-white/60">Avg Session</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-[#22c55e]">{fitnessMock.temperature}</div>
						<div className="!text-[12px] text-white/60">Temperature</div>
					</div>
					<div className="flex flex-col items-baseline gap-2">
						<div className="!text-[18px] font-semibold text-[#22c55e]">{fitnessMock.humidity}</div>
						<div className="!text-[12px] text-white/60">Humidity</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
 
