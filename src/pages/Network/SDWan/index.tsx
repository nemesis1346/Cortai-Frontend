import ApplicationRouting from './ApplicationRouting'
import CircuitsSection from './CircuitsSection'
import SummaryBar from './SummaryBar'
import TrafficSteeringPolicies from './TrafficSteeringPolicies'
import { sdWanAppRoutes, sdWanCircuits, sdWanSteeringPolicies, sdWanSummaryMetrics } from './data'

export default function SDWanPage() {
	return (
		<main className="h-full overflow-y-auto p-4 md:p-5">
			<div className="flex flex-col gap-4 pb-4">
				<SummaryBar items={sdWanSummaryMetrics} />
				<CircuitsSection circuits={sdWanCircuits} />
				<TrafficSteeringPolicies rows={sdWanSteeringPolicies} />
				<ApplicationRouting items={sdWanAppRoutes} />
			</div>
		</main>
	)
}
