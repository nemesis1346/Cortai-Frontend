import TimeRangeToolbar from '../Applications/TimeRangeToolbar'
import DeviceInventoryTable from './DeviceInventoryTable'
import { deviceInventoryRows, deviceInventoryTotalLabel } from './data'

export default function DevicesPage() {
	return (
		<main className="h-full overflow-y-auto p-4 md:p-5">
			<div className="flex flex-col gap-4 pb-4">
				<TimeRangeToolbar defaultRange="24h" />
				<DeviceInventoryTable rows={deviceInventoryRows} totalBadge={deviceInventoryTotalLabel} />
			</div>
		</main>
	)
}
