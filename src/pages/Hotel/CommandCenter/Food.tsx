import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Coffee, ExternalLink } from 'lucide-react'
import { foodMock } from '../../../data/mock'

export default function Food() {
	return (
		<Card className="min-h-[120px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Coffee size={20} className="text-brand" />
						<h3 className="card-title">Food & Breakfast</h3>
					</div>
				}
				right={
					<div className="text-text-dim">
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-4">
					<div className="grid grid-cols-2 gap-y-2">
						<div className="!text-[12px] text-text-dim col-span-2">BREAKFAST</div>
						<div className="!text-[18px] font-semibold text-text">{foodMock.breakfast.served}</div>
						<div className="!text-[18px] font-semibold text-text">{foodMock.breakfast.buffetDwell}</div>
						<div className="!text-[12px] text-text-dim">Served</div>
						<div className="!text-[12px] text-text-dim">Buffet Dwell</div>
					</div>
					<div className="hidden md:block w-px h-16 bg-border justify-self-center" />
					<div className="grid grid-cols-3 gap-y-2">
						<div className="!text-[12px] text-text-dim col-span-3">CAFE</div>
						<div className="!text-[18px] font-semibold text-text">{foodMock.cafe.served}</div>
						<div className="!text-[18px] font-semibold text-text">{foodMock.cafe.dineIn}</div>
						<div className="!text-[18px] font-semibold text-text">{foodMock.cafe.toTable}</div>
						<div className="!text-[12px] text-text-dim">Served</div>
						<div className="!text-[12px] text-text-dim">Dine-in</div>
						<div className="!text-[12px] text-text-dim">To table</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

