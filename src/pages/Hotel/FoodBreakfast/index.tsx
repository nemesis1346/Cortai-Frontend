import AnalysisStrip from './AnalysisStrip'
import KpiRow from './KpiRow'
import TrafficAndBeverages from './TrafficAndBeverages'
import FoodStationUsage from './FoodStationUsage'
import PredictiveFooter from './PredictiveFooter'

export default function FoodBreakfast() {
	return (
		<div className="p-4 md:p-5 h-full flex flex-col gap-4 mb-5">
			<div className="sticky top-0 z-20 bg-inherit flex flex-col gap-4 pb-1">
				<AnalysisStrip />
				<KpiRow />
			</div>
			<div className="flex flex-col gap-4 overflow-y-auto scrollbar-none mb-5">
				<TrafficAndBeverages />
				<FoodStationUsage />
				<PredictiveFooter />
			</div>
		</div>
	)
}
 