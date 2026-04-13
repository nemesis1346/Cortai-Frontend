import Card, { CardBody, CardHeader } from '../../../../components/Card'
import { AlertTriangle } from 'lucide-react'

export default function PrepRecommendations() {
	return (
		<Card className="bg-white/5">
			<CardHeader
				left={
					<div className="inline-flex items-center gap-2 text-white">
						<AlertTriangle className="w-5 h-5 text-[#00d4c0]" />
						<span className="text-[18px] text-white/80">Tomorrow&apos;s Prep Recommendations</span>
					</div>
				}
				middle={<span className="px-3 py-1 text-[12px] text-[#00D4C0]">Based on 72% occupancy → 168 predicted guests</span>}
				right={<span className="rounded-[3px] bg-emerald-400/15 px-2 py-1 text-[12px] text-emerald-400">↓ Waste reduced 39% since AI started · $420/mo saved</span>}
			/>
			<CardBody className="flex flex-col gap-4">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
					{[
						{ title: 'Hot Food Bar', today: 30, predicted: 144, delta: '+7%', note: 'Increase eggs by 15%, bacon steady' },
						{ title: 'Cold Bar / Salad', today: 89, predicted: 96, delta: '+8%', note: 'Add extra fruit tray for peak' },
						{ title: 'Waffle Station', today: 58, predicted: 64, delta: '+10%', note: 'Pre-mix 20% more batter, consider 2nd iron' },
						{ title: 'Bakery / Pastry', today: 102, predicted: 110, delta: '+8%', note: 'Increase muffin batch by 12 units' },
						{ title: 'Omelette Station', today: 46, predicted: 52, delta: '+13%', note: 'Pre-chop extra veg, expect 6 more covers' },
					].map((x) => (
						<div key={x.title} className="rounded-[3px] bg-white/5 p-4 flex flex-col gap-3">
							<div className="flex items-center justify-between">
								<div className="text-white/60 text-[14px]">{x.title}</div>
								<div className="text-[#00D4C0] text-[12px]">{x.delta}</div>
							</div>
							<div className="flex flex-row gap-5 items-center justify-center text-white px-2">
								<div className="text-[22px] flex flex-col items-start gap-2">
									<span className="text-white">{x.today}</span>
									<span className="text-white/40 text-[12px]">Today</span>
								</div>
								<div className="text-white/80 text-[18px]">→</div>
								<div className="text-[22px] text-[#B758F1] flex flex-col items-end gap-2">
									<span className="text-[#B758F1]">{x.predicted}</span>
									<span className="text-white/40 text-[12px]">Predicted</span>
								</div>
							</div>
							<div className="rounded-[3px] bg-[#04D4001A] text-[12px] text-[#04D400] px-2 py-1 text-center">{x.note}</div>
						</div>
					))}
				</div>

				<div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_2fr] gap-4">
					<div className="rounded-[6px] bg-white/5 p-4 flex items-start justify-between">
						<div>
							<div className="text-white/50 text-[12px] leading-none">Tea / Coffee predicted</div>
							<div className="text-white text-[24px] leading-none mt-2">152 guests</div>
						</div>
						<div className="text-right">
							<div className="text-white/50 text-[12px] leading-none">Today</div>
							<div className="text-white/60 text-[24px] leading-none mt-2">142</div>
						</div>
					</div>
					<div className="rounded-[6px] bg-white/5 p-4 flex items-start justify-between">
						<div>
							<div className="text-white/50 text-[12px] leading-none">Other beverages predicted</div>
							<div className="text-white text-[24px] leading-none mt-2">74 guests</div>
						</div>
						<div className="text-right">
							<div className="text-white/50 text-[12px] leading-none">Today</div>
							<div className="text-white/60 text-[24px] leading-none mt-2">68</div>
						</div>
					</div>
					<div className="rounded-[6px] bg-[#050E13] p-4 text-[14px] leading-[1.6] text-white/90">
						Before CORTAI, average daily food waste was <span className="text-rose-400">18 lbs/day</span>. With predictive prep, waste dropped to <span className="text-emerald-400">11 lbs/day</span> — a <span className="text-emerald-400">39%</span> reduction saving <span className="text-emerald-400">$420/month</span>. Accuracy improves as more data is collected.
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
