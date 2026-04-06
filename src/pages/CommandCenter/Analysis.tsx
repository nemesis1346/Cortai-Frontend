import Card, { CardHeader, CardBody } from '../../components/Card'
import robotImg from '../../assets/robot.png'
import { Sparkles } from 'lucide-react'

export default function Analysis() {
	return (
		<Card className="relative min-h-[220px] w-full lg:basis-1/2 lg:flex-1 overflow-hidden bg-[#00D4C01A] text-white">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Sparkles className="w-4 h-4 text-[#00D4C0]" />
						<h3 className="card-title text-white">CORTAI Analysis</h3>
					</div>
				}
				middle={
					<span className="text-[11px] px-2 py-1 rounded-md bg-white/15">
						Updated: <span className="opacity-90">{new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(new Date())}</span>
					</span>
				}
				right={<img src="/icons/ellipsis.svg" alt="" className="w-5 h-5 opacity-90" />}
			/>
			<CardBody className="w-full lg:w-[90%]">
				<p className="!text-[14px] text-white/80 mb-6">
					Today's occupancy is <span className="font-semibold">58%</span> with <span className="font-semibold">23 arrivals</span> expected.
					<span className="font-semibold"> 118 guests</span> and <span className="font-semibold">22 staff</span> currently on site.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative pr-0 xl:pr-8">
					<div className='pr-5'>
						<div className="font-semibold mb-2 text-[#00D4C0] text-[12px]">Weekend gap:</div>
						<p className="text-white/60 text-[12px] mb-4">
							Sunday bookings are at <span className="font-semibold">38%</span> — consider activating the <span className="font-semibold">$129</span> Sunday Saver promo to fill 15-20 rooms.
						</p>
					</div>
					<div className="relative px-5">
						<div className="absolute -left-3 top-0 h-full w-px bg-white/25 hidden lg:block" />
						<div className="font-semibold mb-2 text-[#00D4C0] text-[12px]">Auto Show prep:</div>
						<p className="text-white/60 text-[12px] mb-4">
							Feb 20-22 rates are <span className="font-semibold">$10-15</span> below compset. Raise to <span className="font-semibold">$185-$195</span> before booking window closes.
						</p>
					</div>
					<div className="relative px-5">
						<div className="absolute -left-3 top-0 h-full w-px bg-white/25 hidden lg:block" />
						<div className="font-semibold mb-2 text-[#00D4C0] text-[12px]">Arrivals pace:</div>
						<p className="text-white/60 text-[12px] mb-4">
							8 of 23 arrivals already checked in (<span className="font-semibold">35%</span>). 8 departures still pending.
						</p>
					</div>
				</div>
			</CardBody>
			<img src={robotImg} alt="" className="pointer-events-none select-none absolute right-0 bottom-0 h-48 opacity-50" />
		</Card>
	)
}

