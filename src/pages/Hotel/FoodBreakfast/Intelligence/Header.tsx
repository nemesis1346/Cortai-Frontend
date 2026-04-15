import { Sparkles } from 'lucide-react'

export default function IntelligenceHeader() {
	return (
		<div className="grid grid-cols-[1fr_auto_1fr] items-center">
			<div className="justify-self-start inline-flex items-center gap-2">
				<Sparkles className="w-5 h-5 text-brand" />
				<span className="text-[18px] text-text">CORTAI Predictive F&amp;B Intelligence</span>
			</div>
			<div className="hidden md:flex items-center gap-2 text-[12px] justify-self-center">
				<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-text-dim">5.5 weeks of data</span>
				<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-text-dim">Model accuracy 94.2%</span>
				<span className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-text-dim">Learning improves weekly</span>
			</div>
			<div className="hidden md:flex items-center gap-6 pl-6 justify-self-end">
				<div className="flex flex-col items-start gap-1">
					<div className="text-text text-[18px]">72%</div>
					<div className="text-[12px] text-text-dim">Tomorrow&apos;s Occupancy</div>
				</div>
				<div className="flex flex-col items-start border-l border-border pl-4 gap-1">
					<div className="flex flex-row items-end gap-4">
						<span className="text-text text-[18px]">168</span>
						<span className="text-ok text-[12px]">±9%</span>
					</div>
					<div className="text-[12px] text-text-dim">Predicted Breakfast Guests</div>
				</div>
			</div>
		</div>
	)
}
