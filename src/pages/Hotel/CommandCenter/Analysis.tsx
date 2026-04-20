import Card, { CardHeader, CardBody } from '../../../components/Card'
import robotImg from '../../../assets/robot.png'
import sparklesIconUrl from '../../../assets/sparkles.svg?url'
import { MoreHorizontal } from 'lucide-react'
import { formatAppTime } from '../../../utils/datetimeFormat'

export default function Analysis() {
	return (
		<Card className="relative min-h-[13.75rem] w-full lg:basis-1/2 lg:flex-1 overflow-hidden bg-brand/10 text-text">
			<CardHeader
				left={(
					<div className="flex items-start gap-2">
						<img src={sparklesIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<h3 className="card-title">CORTAI Analysis</h3>
					</div>
				)}
				middle={(
					<span className="badge-chip text-xxs bg-[color:var(--primitive-semantic-normal-10)] text-text">
						Updated: <span className="opacity-90">{formatAppTime(new Date())}</span>
					</span>
				)}
				right={
				<div className="card-header-actions">
					<button type="button" className="card-header-icon-btn" aria-label="More options">
						<MoreHorizontal />
					</button>
				</div>
				}
			/>
			<CardBody className="w-full lg:w-[90%]">
				<p className="text-normal mb-6 text-text leading-[1.45]">
					Today's occupancy is <span className="font-semibold">58%</span> with <span className="font-semibold">23 arrivals</span> expected.
					<span className="font-semibold"> 118 guests</span> and <span className="font-semibold">22 staff</span> currently on site.
				</p>
				<div className="relative grid grid-cols-1 gap-4 pr-0 md:grid-cols-2 xl:grid-cols-3 xl:pr-8">
					<div className="pr-5">
						<div className="text-small mb-2 font-medium text-brand">Weekend gap:</div>
						<p className="text-small mb-4 text-text-dim leading-[1.45]">
							Sunday bookings are at <span className="font-semibold">38%</span> — consider activating the <span className="font-semibold">$129</span> Sunday Saver promo to fill 15-20 rooms.
						</p>
					</div>
					<div className="relative px-5">
						<div className="absolute -left-3 top-0 hidden h-full w-px bg-border lg:block" />
						<div className="text-small mb-2 font-medium text-brand">Auto Show prep:</div>
						<p className="text-small mb-4 text-text-dim leading-[1.45]">
							Feb 20-22 rates are <span className="font-semibold">$10-15</span> below compset. Raise to <span className="font-semibold">$185-$195</span> before booking window closes.
						</p>
					</div>
					<div className="relative px-5">
						<div className="absolute -left-3 top-0 hidden h-full w-px bg-border lg:block" />
						<div className="text-small mb-2 font-medium text-brand">Arrivals pace:</div>
						<p className="text-small mb-4 text-text-dim leading-[1.45]">
							8 of 23 arrivals already checked in (<span className="font-semibold">35%</span>). 8 departures still pending.
						</p>
					</div>
				</div>
			</CardBody>
			<img src={robotImg} alt="" className="pointer-events-none absolute bottom-0 right-0 h-48 select-none opacity-50" />
		</Card>
	)
}
