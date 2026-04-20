import Card, { CardBody, CardHeader } from '../../../components/Card'
import { ExternalLink } from 'lucide-react'
import coffeeIconUrl from '../../../assets/coffee.svg?url'
import { foodMock } from '../../../data/mock'

export default function Food() {
	return (
		<Card className="flex h-full min-h-[9rem] flex-col">
			<CardHeader
				left={
					<div className="flex items-start gap-2">
						<img src={coffeeIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<h3 className="card-title">Food & Breakfast</h3>
					</div>
				}
				right={
					<div className="card-header-actions">
						<button type="button" className="card-header-icon-btn" aria-label="Open external">
							<ExternalLink />
						</button>
					</div>
				}
			/>
			<CardBody className="flex min-h-0 flex-1 flex-col">
				<div className="grid flex-1 grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto_1fr]">
					<div className="grid grid-cols-2 gap-y-1">
						<div className="text-small col-span-2 text-text-dim">BREAKFAST</div>
						<div className="text-large-semibold text-text">{foodMock.breakfast.served}</div>
						<div className="text-large-semibold text-text">{foodMock.breakfast.buffetDwell}</div>
						<div className="text-small text-text-dim">Served</div>
						<div className="text-small text-text-dim">Buffet Dwell</div>
					</div>
					<div className="hidden md:block w-px h-16 bg-border justify-self-center" />
					<div className="grid grid-cols-3 gap-y-1">
						<div className="text-small col-span-3 text-text-dim">CAFE</div>
						<div className="text-large-semibold text-text">{foodMock.cafe.served}</div>
						<div className="text-large-semibold text-text">{foodMock.cafe.dineIn}</div>
						<div className="text-large-semibold text-text">{foodMock.cafe.toTable}</div>
						<div className="text-small text-text-dim">Served</div>
						<div className="text-small text-text-dim">Dine-in</div>
						<div className="text-small text-text-dim">To table</div>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

