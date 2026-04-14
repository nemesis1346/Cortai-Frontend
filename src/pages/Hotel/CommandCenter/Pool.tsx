import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Waves, ExternalLink } from 'lucide-react'
import { poolMock } from '../../../data/mock'

export default function Pool() {
	return (
		<Card className="min-h-[260px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Waves size={20} className="text-brand" />
						<h3 className="card-title">{poolMock.title}</h3>
					</div>
				}
				right={
					<div className="text-text-dim">
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="flex flex-col xl:flex-row items-start gap-8">
					<div className="flex flex-col gap-3 w-full">
						<div className="!text-[12px] text-text-dim col-span-3">POOL</div>
                        <div className="flex flex-row gap-7 justify-between">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-text">{poolMock.pool.now}</div>
                                    <div className="!text-[12px] text-text-dim">Now</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-ok">{poolMock.pool.temp}</div>
                                    <div className="!text-[12px] text-text-dim">Temp</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-2">  
                                    <div className="!text-[18px] font-semibold text-text">{poolMock.pool.total}</div>
                                    <div className="!text-[12px] text-text-dim">Total</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-text">{poolMock.pool.inPool}</div>
                                    <div className="!text-[12px] text-text-dim">In Pool</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-text">{poolMock.pool.avgTime}</div>
                                    <div className="!text-[12px] text-text-dim">Avg Time</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-text">{poolMock.pool.dwell}</div>
                                    <div className="!text-[12px] text-text-dim">Dwell</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 justify-start">
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-ok">{poolMock.pool.roomTemp}</div>
                                <div className="!text-[12px] text-text-dim">Room Temp</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-ok">{poolMock.pool.humidity}</div>
                                <div className="!text-[12px] text-text-dim">Humidity</div>
                            </div>
                        </div>
					</div>
					<div className="hidden xl:block w-px h-45 bg-border justify-self-center" />
					<div className="flex flex-col gap-y-3 w-full">
						<div className="!text-[12px] text-text-dim col-span-3">SPA / HOT TUB</div>
						<div className="flex flex-row gap-5 justify-between">
                            <div className="flex flex-col items-baseline gap-2">
						        <div className="!text-[18px] font-semibold text-text">{poolMock.spa.now}</div>
                                <div className="!text-[12px] text-text-dim">Now</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-text">{poolMock.spa.total}</div>
                                <div className="!text-[12px] text-text-dim">Total</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-text">{poolMock.spa.avgTime}</div>
                                <div className="!text-[12px] text-text-dim">Avg Time</div>
                            </div>
					    </div>
                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-warn">{poolMock.spa.temp}</div>
                                <div className="!text-[12px] text-text-dim">Temp</div>
                            </div>
                        </div>
                    </div>
				</div>
			</CardBody>
		</Card>
	)
}
 
