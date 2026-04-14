import ApplicationBandwidthCard from './ApplicationBandwidthCard'
import CategoryDistributionCard from './CategoryDistributionCard'
import DetectedApplicationsTable from './DetectedApplicationsTable'
import TimeRangeToolbar from './TimeRangeToolbar'
import {
	bandwidthRows,
	bandwidthTotalLabel,
	categorySlices,
	detectedAppRows,
	detectedAppsTotalLabel,
} from './data'

export default function ApplicationsPage() {
	return (
		<main className="h-full overflow-y-auto p-4 md:p-5">
			<div className="flex flex-col gap-4 pb-4">
				<TimeRangeToolbar />
				<section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
					<ApplicationBandwidthCard rows={bandwidthRows} totalBadge={bandwidthTotalLabel} />
					<CategoryDistributionCard slices={categorySlices} />
				</section>
				<DetectedApplicationsTable rows={detectedAppRows} totalBadge={detectedAppsTotalLabel} />
			</div>
		</main>
	)
}
