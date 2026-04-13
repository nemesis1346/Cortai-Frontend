import Card, { CardBody, CardHeader } from '../../../components/Card'
import { DoorOpen, Clock, MoreHorizontal } from 'lucide-react'
import { frontDeskMock } from '../../../data/mock'

export default function FrontDesk() {
	return (
		<Card className="min-h-[130px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<DoorOpen size={20} className="text-teal-400" />
						<h3 className="card-title">Front Desk</h3>
					</div>
				}
				middle={<span className="rounded-[3px] bg-[#A9AEB51A] text-teal-200 px-2 py-1 !text-[12px]">{frontDeskMock.queue} in queue</span>}
				right={
					<div className="text-white/80">
						<MoreHorizontal className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="flex flex-col xl:flex-row gap-4 justify-between">
					<div className="grid grid-cols-2 w-full xl:w-[50%] gap-y-3">
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-white">{frontDeskMock.served}</div>
							<div className="!text-[14px] text-white/40">Served</div>
						</div>
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-white">{frontDeskMock.inQueue}</div>
							<div className="!text-[14px] text-white/40">In Queue</div>
						</div>
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-white">{frontDeskMock.queueAvg}</div>
							<div className="!text-[14px] text-white/40">Queue Avg</div>
						</div>
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-white">{frontDeskMock.checkinAvg}</div>
							<div className="!text-[14px] text-white/40">Check-in Avg</div>
						</div>
					</div>

					<div className="w-full xl:w-[50%]">
						<div className="divide-y divide-white/20 flex flex-col gap-1">
							{frontDeskMock.items.map(i => (
								<div key={i.id} className="grid grid-cols-[80px_1fr_auto] items-center gap-2 py-2">
									<div className={`${i.color === 'red' ? 'text-red-500' : i.color === 'amber' ? 'text-yellow-500' : 'text-white' } !text-[14px] font-semibold`}>
										{i.wait}
									</div>
									<div className="!text-[14px] text-white/70">{i.name}</div>
									<div className="flex items-center gap-2 text-white/90">
										<Clock className="w-4 h-4 text-teal-400" />
										<span className="!text-[12px] text-white/70">{i.time}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

