import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Clock, MoreHorizontal } from 'lucide-react'
import doorOpenIconUrl from '../../../assets/door-open.svg?url'
import { frontDeskMock } from '../../../data/mock'

export default function FrontDesk() {
	return (
		<Card className="min-h-[8.125rem]">
			<CardHeader
				left={(
					<div className="flex items-start gap-2">
						<img src={doorOpenIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<h3 className="card-title">Front Desk</h3>
					</div>
				)}
				middle={<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-brand">{frontDeskMock.queue} in queue</span>}
				right={(
					<div className="card-header-actions">
						<button type="button" className="card-header-icon-btn" aria-label="More options">
							<MoreHorizontal />
						</button>
					</div>
				)}
			/>
			<CardBody>
				<div className="flex flex-col justify-between gap-4 xl:flex-row">
					<div className="grid w-full grid-cols-2 gap-y-3 xl:w-[50%]">
						<div className="flex flex-col items-baseline gap-1">
							<div className="text-large-semibold text-text">{frontDeskMock.served}</div>
							<div className="text-normal text-text-dim">Served</div>
						</div>
						<div className="flex flex-col items-baseline gap-1">
							<div className="text-large-semibold text-text">{frontDeskMock.inQueue}</div>
							<div className="text-normal text-text-dim">In Queue</div>
						</div>
						<div className="flex flex-col items-baseline gap-1">
							<div className="text-large-semibold text-text">{frontDeskMock.queueAvg}</div>
							<div className="text-normal text-text-dim">Queue Avg</div>
						</div>
						<div className="flex flex-col items-baseline gap-1">
							<div className="text-large-semibold text-text">{frontDeskMock.checkinAvg}</div>
							<div className="text-normal text-text-dim">Check-in Avg</div>
						</div>
					</div>

					<div className="w-full xl:w-[50%]">
						<div className="flex flex-col gap-1 divide-y divide-border">
							{frontDeskMock.items.map(i => (
								<div key={i.id} className="grid grid-cols-[5rem_1fr_auto] items-center gap-2 py-2">
									<div className={`text-normal-semibold ${i.color === 'red' ? 'text-danger' : i.color === 'amber' ? 'text-warn' : 'text-text'}`}>
										{i.wait}
									</div>
									<div className="text-normal text-text-dim">{i.name}</div>
									<div className="flex items-center gap-2 text-text">
										<Clock className="h-4 w-4 text-brand" />
										<span className="text-small text-text-dim">{i.time}</span>
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
