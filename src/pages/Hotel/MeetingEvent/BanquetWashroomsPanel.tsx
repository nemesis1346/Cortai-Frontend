import { Users } from 'lucide-react'
import { meetingPageMock } from '../../../data/mock'

export default function BanquetWashroomsPanel() {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
			<div className="flex items-center gap-2 text-[18px] font-medium text-white">
				<Users className="h-5 w-5 shrink-0 text-[#00d4c0]" strokeWidth={1.75} />
				<span>Banquet Hall Washrooms</span>
			</div>
			<div className="mt-4 grid grid-cols-1 gap-3">
				{meetingPageMock.banquetWashrooms.map((w) => (
					<div key={w.label} className="rounded-[5px] bg-white/5 p-4">
						<div className="mb-4 flex items-start justify-between gap-2">
							<span className="text-[14px] text-white">{w.label}</span>
							<span className="shrink-0 text-[13px] text-white/50">
								{w.occupied}/{w.capacity} occupied
							</span>
						</div>
						<div className="flex flex-row justify-between gap-2">
							<div className="min-w-0 text-center min-[420px]:text-left">
								<div className="text-[14px] leading-tight text-white">{w.usesToday}</div>
								<div className="mt-1.5 text-[12px] text-white/45">Uses today</div>
							</div>
							<div className="min-w-0 text-center min-[420px]:text-left">
								<div className="text-[14px] leading-tight text-[#00d4c0]">{w.nextClean}</div>
								<div className="mt-1.5 text-[12px] text-white/45">Next clean</div>
							</div>
							<div className="min-w-0 text-center min-[420px]:text-left">
								<div className="text-[14px] leading-tight text-white">{w.lastCleaned}</div>
								<div className="mt-1.5 text-[12px] text-white/45">Last cleaned</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
