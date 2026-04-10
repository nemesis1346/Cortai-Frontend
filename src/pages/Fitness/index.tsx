import AnalysisStrip from './AnalysisStrip'
import KpiRow from './KpiRow'
import TrafficPanel from './TrafficPanel'
import EquipmentPanel from './EquipmentPanel'
import GuestsPanel from './GuestsPanel'
import EnvironmentPanel from './EnvironmentPanel'
import SafetyPanel from './SafetyPanel'
import SuppliesPanel from './SuppliesPanel'
import WaterStationPanel from './WaterStationPanel'

export default function Fitness() {
	return (
		<div className="flex h-full min-h-0 flex-col gap-4 p-4 md:p-5">
			<div className="sticky top-0 z-20 flex shrink-0 flex-col gap-4 bg-inherit pb-1">
				<AnalysisStrip />
				<KpiRow />
			</div>
			<div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto scrollbar-none">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
					<div className="flex min-h-0 w-full lg:h-full">
						<TrafficPanel />
					</div>
					<div className="flex min-h-[120px] flex-col gap-4 lg:h-full lg:min-h-0">
						<div className="flex min-h-0 flex-1 flex-col">
							<GuestsPanel className="h-full min-h-0" />
						</div>
						<div className="flex min-h-0 flex-1 flex-col">
							<EnvironmentPanel className="h-full min-h-0" />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr]">
					<EquipmentPanel />
					<div className="flex min-h-0 min-w-0 flex-col gap-4">
						<SafetyPanel />
						<SuppliesPanel />
						<WaterStationPanel />
					</div>
				</div>
			</div>
		</div>
	)
}
