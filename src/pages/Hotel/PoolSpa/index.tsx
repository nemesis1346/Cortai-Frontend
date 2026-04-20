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
		<div className="mb-5 flex h-full flex-col gap-[1.25rem] p-4 md:p-5">
			<div className="sticky top-0 z-20 flex flex-col gap-[1.25rem] bg-inherit pb-1">
				<AnalysisStrip />
				<KpiRow />
			</div>
			<div className="mb-5 flex flex-col gap-[1.25rem] overflow-y-auto scrollbar-none">
				<div className="grid min-w-0 grid-cols-1 gap-[1.25rem] lg:grid-cols-[1.25fr_0.75fr] [&>*]:min-w-0">
					<TrafficPanel />
					<PoolPanel />
				</div>
				<div className="grid min-w-0 grid-cols-1 gap-[1.25rem] lg:grid-cols-2 [&>*]:min-w-0">
					<SafetyPanel />
					<div className="flex min-h-0 min-w-0 flex-col gap-[1.25rem]">
						<WashroomPanel />
						<TowelPanel />
						<NoisePanel />
					</div>
				</div>
			</div>
		</div>
	)
}
