import { MoreHorizontal, Sparkles } from 'lucide-react'
import Card, { CardBody, CardHeader } from '../../components/Card'

export default function AnalysisStrip() {
	return (
		<Card className="rounded-2xl border border-[#0f3c3a] bg-[#062325]">
			<CardHeader
				left={(
					<div className="text-[18px] text-white inline-flex items-center gap-2">
						<Sparkles className="w-4 h-4 text-[#00D4C0]" />
						<span>CORTAI Analysis</span>
					</div>
				)}
				middle={<span className="rounded-[3px] bg-white/10 px-2 py-1 text-[12px] text-white/70">Updated: 1:41:50 pm</span>}
				right={(
					<button type="button" className="inline-flex items-center text-white/70">
						<MoreHorizontal className="w-4 h-4" />
					</button>
				)}
			/>
			<CardBody className="pt-3 grid grid-cols-1 xl:grid-cols-4 divide-y xl:divide-y-0 xl:divide-x divide-white/10">
				<div className="py-3 xl:pr-2 text-[14px] leading-6 text-white/80">
					156 guests served today. Peak was 68 guests at 7:45 AM. Currently 42 dining. First guest at 6:12 AM.
				</div>
				<div className="py-3 xl:px-3">
					<div className="text-[14px] text-[#C58B11]">Waffle &amp; Omelette queues:</div>
					<div className="text-[12px] leading-6 text-white/40">Waffle avg 3m 20s and Omelette avg 4m 10s wait. Consider adding a second waffle iron during peak.</div>
				</div>
				<div className="py-3 xl:px-3">
					<div className="text-[14px] text-[#0FB9D5]">Coffee uptake:</div>
					<div className="text-[12px] leading-6 text-white/40">91% of guests had coffee (142 cups). OJ second at 44%. Beverage station flowing well.</div>
				</div>
				<div className="py-3 xl:pl-4">
					<div className="text-[14px] text-[#0FB9D5]">Table turnover:</div>
					<div className="text-[12px] leading-6 text-white/60">4.2 turns avg across 30 tables. Avg wipe-down 1m 45s.</div>
				</div>
			</CardBody>
		</Card>
	)
}
