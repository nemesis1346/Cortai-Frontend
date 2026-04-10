import AnalysisStrip from './AnalysisStrip'
import KpiRow from './KpiRow'
import TrafficPanel from './TrafficPanel'
import SafetyPanel from './SafetyPanel'
import PoolPanel from './PoolPanel'
import WashroomPanel from './WashroomPanel'
import TowelPanel from './TowelPanel'
import NoisePanel from './NoisePanel'

export default function PoolSpa() {
	return (
		<div className="p-4 md:p-5 h-full flex flex-col gap-4 mb-5">
			<div className="sticky top-0 z-20 bg-inherit flex flex-col gap-4 pb-1">
				<AnalysisStrip />
				<KpiRow />
			</div>
			<div className="flex flex-col gap-4 overflow-y-auto scrollbar-none mb-5">
				<div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[1.25fr_0.75fr] lg:gap-3 [&>*]:min-w-0">
					<TrafficPanel />
					<PoolPanel />
				</div>
				<div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-3 [&>*]:min-w-0">
					<SafetyPanel />
					<div className="flex min-h-0 min-w-0 flex-col gap-4">
						<WashroomPanel />
						<TowelPanel />
						<NoisePanel />
					</div>
				</div>
			</div>
		</div>
	)
}
