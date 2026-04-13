import Card, { CardBody, CardHeader } from '../../../components/Card'
import { Users, MoreHorizontal } from 'lucide-react'
import { washroomsMock } from '../../../data/mock'

export default function Washroom() {
	return (
		<Card className="min-h-[150px]">
			<CardHeader
				left={
					<div className="flex gap-2">
						<Users size={20} className="text-teal-400" />
						<h3 className="card-title">Lobby Washroom</h3>
					</div>
				}
				middle={<span className="rounded-[3px] bg-[#A9AEB51A] text-white/70 px-2 py-1 !text-[12px]">{washroomsMock.total} washrooms</span>}
				right={
					<div className="text-white/40">
						<MoreHorizontal className="w-5 h-5" />
					</div>
				}
			/>
			<CardBody>
				<div className="grid grid-cols-1 lg:grid-cols-3">
					{washroomsMock.areas.map((a, idx) => (
						<div key={a.id} className={`flex flex-col sm:flex-row items-start gap-3 ${idx < washroomsMock.areas.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-6 lg:border-white/10 border-white/10 pb-4 lg:pb-0' : ''} ${idx > 0 ? 'lg:pl-6' : ''}`}>
							<div className="w-full sm:w-[50%] flex flex-col items-baseline gap-2">
								<div className="!text-[18px] font-semibold text-white">{a.count}</div>
								<div className="!text-[14px] text-white/70">{a.label}</div>
								<div className="mt-1">
									<span
										className={`rounded-[3px] px-2 py-1 !text-[12px] ${
											a.color === 'green' ? 'bg-[#04D4001A]/90 text-green-500' : 'bg-[#EDB13226]/80 text-yellow-500'
										}`}
									>
										{a.occupied}/{a.total} occupied
									</span>
								</div>
							</div>
							<div className="self-start sm:self-center w-full sm:w-auto">
								<div className="grid grid-cols-[40px_1fr] items-center gap-x-2">
									<div className="!text-[12px] text-white/40">Last</div>
									<div className="!text-[12px] text-white/70 text-right">{a.last}</div>
									<div className="col-span-2 h-px bg-white/20 my-1" />
									<div className="!text-[12px] text-white/40 mt-2">Next</div>
									<div className="!text-[12px] text-white/70 text-right mt-2">{a.next}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardBody>
		</Card>
	)
}

