import AnalysisStrip from './AnalysisStrip'
import KpiRow from './KpiRow'
import TrafficAndBeverages from './TrafficAndBeverages'
import FoodStationUsage from './FoodStationUsage'
import PredictiveFooter from './PredictiveFooter'

export default function FoodBreakfast() {
	return (
		<div className="p-4 md:p-5 flex flex-col gap-4 overflow-y-auto">
			<AnalysisStrip />
			<KpiRow />
			<TrafficAndBeverages />
			<FoodStationUsage />
			<PredictiveFooter />
		</div>
	)
}
 