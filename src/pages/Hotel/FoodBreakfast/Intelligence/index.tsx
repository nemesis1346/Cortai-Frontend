import IntelligenceHeader from './Header'
import PredictedActual from './PredictedActual'
import EmergencyMetrics from './EmergencyMetrics'
import PrepRecommendations from './PrepRecommendations'

export default function IntelligencePanel() {
	return (
		<section className="rounded-2xl border border-white/10 bg-[#062325] p-4 flex flex-col gap-4">
			<IntelligenceHeader />
			<div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-4">
				<PredictedActual />
				<EmergencyMetrics />
			</div>
			<PrepRecommendations />
		</section>
	)
}
