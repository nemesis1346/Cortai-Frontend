import Card, { CardBody, CardHeader } from '../../../components/Card'
import { DoorOpen, Clock, MoreHorizontal } from 'lucide-react'
import { frontDeskMock } from '../../../data/mock'

export default function FrontDesk() {
	return (
		<Card className="min-h-[130px]">
			<CardHeader
				left={(
					<div className="flex gap-2">
						<DoorOpen size={20} className="text-brand" />
						<h3 className="card-title">Front Desk</h3>
					</div>
				)}
				middle={<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 !text-[12px] text-brand">{frontDeskMock.queue} in queue</span>}
				right={(
					<div className="text-text">
						<MoreHorizontal className="h-5 w-5" />
					</div>
				)}
			/>
			<CardBody>
				<div className="flex flex-col justify-between gap-4 xl:flex-row">
					<div className="grid w-full grid-cols-2 gap-y-3 xl:w-[50%]">
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-text">{frontDeskMock.served}</div>
							<div className="!text-[14px] text-text-dim">Served</div>
						</div>
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-text">{frontDeskMock.inQueue}</div>
							<div className="!text-[14px] text-text-dim">In Queue</div>
						</div>
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-text">{frontDeskMock.queueAvg}</div>
							<div className="!text-[14px] text-text-dim">Queue Avg</div>
						</div>
						<div className="flex flex-col items-baseline gap-2">
							<div className="!text-[18px] font-semibold text-text">{frontDeskMock.checkinAvg}</div>
							<div className="!text-[14px] text-text-dim">Check-in Avg</div>
						</div>
					</div>

					<div className="w-full xl:w-[50%]">
						<div className="flex flex-col gap-1 divide-y divide-border">
							{frontDeskMock.items.map(i => (
								<div key={i.id} className="grid grid-cols-[80px_1fr_auto] items-center gap-2 py-2">
									<div className={`!text-[14px] font-semibold ${i.color === 'red' ? 'text-danger' : i.color === 'amber' ? 'text-warn' : 'text-text'}`}>
										{i.wait}
									</div>
									<div className="!text-[14px] text-text-dim">{i.name}</div>
									<div className="flex items-center gap-2 text-text">
										<Clock className="h-4 w-4 text-brand" />
										<span className="!text-[12px] text-text-dim">{i.time}</span>
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
