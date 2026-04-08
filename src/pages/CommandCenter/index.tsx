import Analysis from './Analysis'
import KpiPanel from './KpiPanel'
import ActionQueue from './ActionQueue'
import Elevators from './Elevators'
import FrontDesk from './FrontDesk'
import Housekeeping from './Housekeeping'
import Washroom from './Washroom'
import Food from './Food'
import Pool from './Pool'
import Fitness from './Fitness.tsx'
import Events from './Events'

export default function CommandCenter() {
	return (
		<main className="p-5 flex flex-col gap-5 overflow-hidden overflow-y-auto scrollbar-none">
			<section className="w-full lg:basis-1/2 lg:flex-1">
				<div className="flex flex-col lg:flex-row gap-5">
					<Analysis />
					<KpiPanel />
				</div>
			</section>
			<section className="w-full lg:basis-1/3 lg:flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5"> 
				<div className="w-full lg:basis-1/2 lg:flex-1 flex flex-col gap-5">
					<ActionQueue />
					<Housekeeping />
				</div>
				<div className="w-full lg:basis-1/2 lg:flex-1 flex flex-col gap-5">
					<Elevators />
					<FrontDesk />
					<Washroom />
				</div>
			</section>
			<section className="w-full lg:basis-1/2 lg:flex-1 flex flex-col xl:flex-row gap-3">
				<div className="w-full xl:basis-1/3 xl:flex-1 flex flex-col gap-3">
					<Food />
					<Fitness />
				</div>
				<div className="w-full xl:basis-1/3 xl:flex-1">
					<Pool />
				</div>
				<div className="w-full xl:basis-1/3 xl:flex-1">
					<Events />
				</div>
			</section>
		</main>
	)
}

