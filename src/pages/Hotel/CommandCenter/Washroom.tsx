import Card, { CardBody, CardHeader } from '../../../components/Card'
import { MoreHorizontal } from 'lucide-react'
import washroomIconUrl from '../../../assets/washroom.svg?url'
import { washroomsMock } from '../../../data/mock'

export default function Washroom() {
	return (
		<Card className="min-h-[9.375rem]">
			<CardHeader
				left={
					<div className="flex items-start gap-2">
						<img src={washroomIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<h3 className="card-title">Lobby Washroom</h3>
					</div>
				}
				middle={<span className="badge-chip bg-[color:var(--primitive-semantic-normal-10)] text-text-dim">{washroomsMock.total} washrooms</span>}
				right={
					<div className="card-header-actions">
						<button type="button" className="card-header-icon-btn" aria-label="More options">
							<MoreHorizontal />
						</button>
					</div>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-1 lg:grid-cols-3">
					{washroomsMock.areas.map((a, idx) => (
						<div key={a.id} className={`flex flex-col sm:flex-row items-start gap-2 ${idx < washroomsMock.areas.length - 1 ? 'lg:border-r lg:border-border lg:pr-6 border-border pb-4 lg:pb-0' : ''} ${idx > 0 ? 'lg:pl-6' : ''}`}>
							<div className="w-full sm:w-[50%] flex flex-col items-baseline gap-1">
								<div className="text-large-semibold text-text">{a.count}</div>
								<div className="text-normal text-text-dim">{a.label}</div>
								<div>
									<span
										className={`text-small rounded-[0.1875rem] px-2 py-1 ${
											a.color === 'green' ? 'bg-[color:var(--primitive-semantic-success-10)] text-ok' : 'bg-[color:var(--primitive-accent-yellow-10)] text-warn'
										}`}
									>
										{a.occupied}/{a.total} occupied
									</span>
								</div>
							</div>
							<div className="self-start sm:self-center w-full sm:w-auto">
								<div className="grid grid-cols-[2.5rem_3.125rem] items-center gap-x-1.5">
									<div className="text-small text-text-mute">Last</div>
									<div className="text-small text-right text-text-dim">{a.last}</div>
									<div className="col-span-2 h-px bg-border my-1" />
									<div className="text-small mt-1 text-text-mute">Next</div>
									<div className="text-small mt-1 text-right text-text-dim">{a.next}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardBody>
		</Card>
	)
}

