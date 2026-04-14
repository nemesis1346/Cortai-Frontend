import Card, { CardHeader, CardBody } from '../../../components/Card'
import robotImg from '../../../assets/robot.png'
import { Sparkles } from 'lucide-react'

export default function Analysis() {
	return (
		<Card className="relative min-h-[220px] w-full lg:basis-1/2 lg:flex-1 overflow-hidden bg-brand/10 text-text">
			<CardHeader
				left={(
					<div className="flex gap-2">
						<Sparkles className="w-4 h-4 text-brand" />
						<h3 className="card-title text-text">CORTAI Analysis</h3>
					</div>
				)}
				middle={(
					<span className="rounded-md bg-[color:var(--primitive-white-shadow-10)] px-2 py-1 text-[11px] text-text">
						Updated: <span className="opacity-90">{new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(new Date())}</span>
					</span>
				)}
				right={<img src="/icons/ellipsis.svg" alt="" className="h-5 w-5 opacity-90" />}
			/>
			<CardBody className="w-full lg:w-[90%]">
				<p className="!text-[14px] mb-6 text-text">
					Today's occupancy is <span className="font-semibold">58%</span> with <span className="font-semibold">23 arrivals</span> expected.
					<span className="font-semibold"> 118 guests</span> and <span className="font-semibold">22 staff</span> currently on site.
				</p>
				<div className="relative grid grid-cols-1 gap-4 pr-0 md:grid-cols-2 xl:grid-cols-3 xl:pr-8">
					<div className="pr-5">
						<div className="mb-2 text-[12px] font-semibold text-brand">Weekend gap:</div>
						<p className="mb-4 text-[12px] text-text-dim">
							Sunday bookings are at <span className="font-semibold">38%</span> — consider activating the <span className="font-semibold">$129</span> Sunday Saver promo to fill 15-20 rooms.
						</p>
					</div>
					<div className="relative px-5">
						<div className="absolute -left-3 top-0 hidden h-full w-px bg-[color:var(--primitive-white-shadow-20)] lg:block" />
						<div className="mb-2 text-[12px] font-semibold text-brand">Auto Show prep:</div>
						<p className="mb-4 text-[12px] text-text-dim">
							Feb 20-22 rates are <span className="font-semibold">$10-15</span> below compset. Raise to <span className="font-semibold">$185-$195</span> before booking window closes.
						</p>
					</div>
					<div className="relative px-5">
						<div className="absolute -left-3 top-0 hidden h-full w-px bg-[color:var(--primitive-white-shadow-20)] lg:block" />
						<div className="mb-2 text-[12px] font-semibold text-brand">Arrivals pace:</div>
						<p className="mb-4 text-[12px] text-text-dim">
							8 of 23 arrivals already checked in (<span className="font-semibold">35%</span>). 8 departures still pending.
						</p>
					</div>
				</div>
			</CardBody>
			<img src={robotImg} alt="" className="pointer-events-none absolute bottom-0 right-0 h-48 select-none opacity-50" />
		</Card>
	)
}
