import Card, { CardBody, CardHeader } from '../../../components/Card'
import { ExternalLink } from 'lucide-react'
import poolIconUrl from '../../../assets/pool.svg?url'
import { poolMock } from '../../../data/mock'

export default function Pool() {
	return (
		<Card className="flex h-full min-h-[18.25rem] flex-col">
			<CardHeader
				left={
					<div className="flex items-start gap-2">
						<img src={poolIconUrl} alt="" className="h-5 w-5 shrink-0" />
						<h3 className="card-title">{poolMock.title}</h3>
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
				<div className="flex flex-col items-start gap-8 xl:flex-row xl:flex-1">
					<div className="flex flex-col gap-5 w-full">
						<div className="text-small text-text-dim col-span-3">POOL</div>
                        <div className="flex flex-row gap-7 justify-between">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-1">
                                    <div className="text-large-semibold text-text">{poolMock.pool.now}</div>
                                    <div className="text-small text-text-dim">Now</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-1">
                                    <div className="text-large-semibold text-ok">{poolMock.pool.temp}</div>
                                    <div className="text-small text-text-dim">Temp</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-1">  
                                    <div className="text-large-semibold text-text">{poolMock.pool.total}</div>
                                    <div className="text-small text-text-dim">Total</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-1">
                                    <div className="text-large-semibold text-text">{poolMock.pool.inPool}</div>
                                    <div className="text-small text-text-dim">In Pool</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-1">
                                    <div className="text-large-semibold text-text">{poolMock.pool.avgTime}</div>
                                    <div className="text-small text-text-dim">Avg Time</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-1">
                                    <div className="text-large-semibold text-text">{poolMock.pool.dwell}</div>
                                    <div className="text-small text-text-dim">Dwell</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 justify-start">
                            <div className="flex flex-col items-baseline gap-1">
                                <div className="text-large-semibold text-ok">{poolMock.pool.roomTemp}</div>
                                <div className="text-small text-text-dim">Room Temp</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-1">
                                <div className="text-large-semibold text-ok">{poolMock.pool.humidity}</div>
                                <div className="text-small text-text-dim">Humidity</div>
                            </div>
                        </div>
					</div>
					<div className="hidden xl:block w-px h-[11.25rem] bg-border justify-self-center" />
					<div className="flex flex-col gap-y-5 w-full">
						<div className="text-small text-text-dim col-span-3">SPA / HOT TUB</div>
						<div className="flex flex-row gap-5 justify-between">
                            <div className="flex flex-col items-baseline gap-1">
						        <div className="text-large-semibold text-text">{poolMock.spa.now}</div>
                                <div className="text-small text-text-dim">Now</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-1">
                                <div className="text-large-semibold text-text">{poolMock.spa.total}</div>
                                <div className="text-small text-text-dim">Total</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-1">
                                <div className="text-large-semibold text-text">{poolMock.spa.avgTime}</div>
                                <div className="text-small text-text-dim">Avg Time</div>
                            </div>
					    </div>
                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col items-baseline gap-1">
                                <div className="text-large-semibold text-warn">{poolMock.spa.temp}</div>
                                <div className="text-small text-text-dim">Temp</div>
                            </div>
                        </div>
                    </div>
				</div>
			</CardBody>
		</Card>
	)
}
 
