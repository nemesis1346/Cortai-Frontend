import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Waves, ExternalLink } from 'lucide-react'
import { poolMock } from '../../../data/mock'

export default function Pool() {
	return (
		<Card className="min-h-[260px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Waves size={20} className="text-teal-400" />
						<h3 className="card-title">{poolMock.title}</h3>
					</div>
				}
				right={
					<div className="text-white/40">
						<ExternalLink className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="flex flex-col xl:flex-row items-start gap-8">
					<div className="flex flex-col gap-3 w-full">
						<div className="!text-[12px] text-white/40 col-span-3">POOL</div>
                        <div className="flex flex-row gap-7 justify-between">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-white">{poolMock.pool.now}</div>
                                    <div className="!text-[12px] text-white/60">Now</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-[#22c55e]">{poolMock.pool.temp}</div>
                                    <div className="!text-[12px] text-white/60">Temp</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-2">  
                                    <div className="!text-[18px] font-semibold text-white">{poolMock.pool.total}</div>
                                    <div className="!text-[12px] text-white/60">Total</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-white">{poolMock.pool.inPool}</div>
                                    <div className="!text-[12px] text-white/60">In Pool</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-white">{poolMock.pool.avgTime}</div>
                                    <div className="!text-[12px] text-white/60">Avg Time</div>
                                </div>
                                <div className="flex flex-col items-baseline gap-2">
                                    <div className="!text-[18px] font-semibold text-white">{poolMock.pool.dwell}</div>
                                    <div className="!text-[12px] text-white/60">Dwell</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 justify-start">
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-[#22c55e]">{poolMock.pool.roomTemp}</div>
                                <div className="!text-[12px] text-white/60">Room Temp</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-[#22c55e]">{poolMock.pool.humidity}</div>
                                <div className="!text-[12px] text-white/60">Humidity</div>
                            </div>
                        </div>
					</div>
					<div className="hidden xl:block w-px h-45 bg-white/10 justify-self-center" />
					<div className="flex flex-col gap-y-3 w-full">
						<div className="!text-[12px] text-white/40 col-span-3">SPA / HOT TUB</div>
						<div className="flex flex-row gap-5 justify-between">
                            <div className="flex flex-col items-baseline gap-2">
						        <div className="!text-[18px] font-semibold text-white">{poolMock.spa.now}</div>
                                <div className="!text-[12px] text-white/60">Now</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-white">{poolMock.spa.total}</div>
                                <div className="!text-[12px] text-white/60">Total</div>
                            </div>
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-white">{poolMock.spa.avgTime}</div>
                                <div className="!text-[12px] text-white/60">Avg Time</div>
                            </div>
					    </div>
                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col items-baseline gap-2">
                                <div className="!text-[18px] font-semibold text-[#f59e0b]">{poolMock.spa.temp}</div>
                                <div className="!text-[12px] text-white/60">Temp</div>
                            </div>
                        </div>
                    </div>
				</div>
			</CardBody>
		</Card>
	)
}
 
