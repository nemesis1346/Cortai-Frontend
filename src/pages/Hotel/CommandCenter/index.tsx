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
		<main className="flex min-h-0 flex-1 flex-col gap-[1.25rem] overflow-y-auto overscroll-y-contain px-[1.25rem] pb-[calc(1.25rem+env(safe-area-inset-bottom,0px)+0.125rem)] pt-[1.25rem] scrollbar-thin">
			<section className="w-full lg:basis-1/2 lg:flex-1">
				<div className="flex flex-col lg:flex-row gap-[1.25rem]">
					<Analysis />
					<KpiPanel />
				</div>
			</section>
			<section className="w-full lg:basis-1/3 lg:flex-1 grid grid-cols-1 xl:grid-cols-2 gap-[1.25rem]"> 
				<div className="w-full lg:basis-1/2 lg:flex-1 flex flex-col gap-[1.25rem]">
					<ActionQueue />
					<Housekeeping />
				</div>
				<div className="w-full lg:basis-1/2 lg:flex-1 flex flex-col gap-[1.25rem]">
					<Elevators />
					<FrontDesk />
					<Washroom />
				</div>
			</section>
			<section className="flex w-full min-h-0 min-w-0 flex-col gap-[1.25rem] xl:flex-row xl:items-stretch">
				<div className="flex min-h-0 w-full min-w-0 flex-1 flex-col gap-[1.25rem] xl:basis-1/3">
					<Food />
					<Fitness />
				</div>
				<div className="flex min-h-0 w-full min-w-0 flex-1 flex-col xl:basis-1/3">
					<Pool />
				</div>
				<div className="flex min-h-0 w-full min-w-0 flex-1 flex-col xl:basis-1/3">
					<Events />
				</div>
			</section>
		</main>
	)
}

