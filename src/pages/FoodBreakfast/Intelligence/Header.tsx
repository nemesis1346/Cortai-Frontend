import { Sparkles } from 'lucide-react'

export default function IntelligenceHeader() {
	return (
		<div className="grid grid-cols-[1fr_auto_1fr] items-center">
			<div className="justify-self-start inline-flex items-center gap-2">
				<Sparkles className="w-5 h-5 text-[#00d4c0]" />
				<span className="text-[18px] text-white/80">CORTAI Predictive F&amp;B Intelligence</span>
			</div>
			<div className="hidden md:flex items-center gap-2 text-[12px] justify-self-center">
				<span className="rounded-[3px] bg-white/10 px-2 py-1 text-white/50">5.5 weeks of data</span>
				<span className="rounded-[3px] bg-white/10 px-2 py-1 text-white/50">Model accuracy 94.2%</span>
				<span className="rounded-[3px] bg-white/10 px-2 py-1 text-white/50">Learning improves weekly</span>
			</div>
			<div className="hidden md:flex items-center gap-6 pl-6 justify-self-end">
				<div className="flex flex-col items-start gap-1">
					<div className="text-white text-[18px]">72%</div>
					<div className="text-[12px] text-white/60">Tomorrow&apos;s Occupancy</div>
				</div>
				<div className="flex flex-col items-start border-l border-white/10 pl-4 gap-1">
					<div className="flex flex-row items-end gap-4">
						<span className="text-white text-[18px]">168</span>
						<span className="text-emerald-400 text-[12px]">±9%</span>
					</div>
					<div className="text-[12px] text-white/60">Predicted Breakfast Guests</div>
				</div>
			</div>
		</div>
	)
}
