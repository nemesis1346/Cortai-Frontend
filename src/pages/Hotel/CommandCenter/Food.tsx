import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Coffee, ExternalLink } from 'lucide-react'
import { foodMock } from '../../../data/mock'

export default function Food() {
	return (
		<Card className="min-h-[120px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Coffee size={20} className="text-teal-400" />
						<h3 className="card-title">Food & Breakfast</h3>
					</div>
				}
				right={
					<div className="text-white/40">
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-4">
					<div className="grid grid-cols-2 gap-y-2">
						<div className="!text-[12px] text-white/40 col-span-2">BREAKFAST</div>
						<div className="!text-[18px] font-semibold text-white">{foodMock.breakfast.served}</div>
						<div className="!text-[18px] font-semibold text-white">{foodMock.breakfast.buffetDwell}</div>
						<div className="!text-[12px] text-white/60">Served</div>
						<div className="!text-[12px] text-white/60">Buffet Dwell</div>
					</div>
					<div className="hidden md:block w-px h-16 bg-white/10 justify-self-center" />
					<div className="grid grid-cols-3 gap-y-2">
						<div className="!text-[12px] text-white/40 col-span-3">CAFE</div>
						<div className="!text-[18px] font-semibold text-white">{foodMock.cafe.served}</div>
						<div className="!text-[18px] font-semibold text-white">{foodMock.cafe.dineIn}</div>
						<div className="!text-[18px] font-semibold text-white">{foodMock.cafe.toTable}</div>
						<div className="!text-[12px] text-white/60">Served</div>
						<div className="!text-[12px] text-white/60">Dine-in</div>
						<div className="!text-[12px] text-white/60">To table</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

