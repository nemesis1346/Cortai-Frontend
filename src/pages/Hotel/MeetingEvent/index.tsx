import AnalysisStrip from './AnalysisStrip'
import KpiRow from './KpiRow'
import MeetingRoomCard from './MeetingRoomCard'
import BanquetWashroomsPanel from './BanquetWashroomsPanel'
import { meetingPageMock } from '../../../data/mock'

export default function MeetingEvent() {
	return (
		<div className="flex h-full min-h-0 flex-col gap-[1.25rem] p-4 md:p-5">
			<div className="sticky top-0 z-20 flex shrink-0 flex-col gap-[1.25rem] bg-inherit pb-1">
				<AnalysisStrip />
				<KpiRow />
			</div>
			<div className="flex min-h-0 flex-1 flex-col gap-[1.25rem] overflow-y-auto scrollbar-none">
				<div className="grid grid-cols-1 gap-[1.25rem] md:gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)] lg:items-start">
					<div className="flex min-h-0 min-w-0 flex-col gap-[1.25rem]">
						{meetingPageMock.meetingRooms.map((room) => (
							<MeetingRoomCard key={room.id} room={room} />
						))}
					</div>
					<div className="min-h-0 min-w-0">
						<BanquetWashroomsPanel />
					</div>
				</div>
			</div>
		</div>
	)
}
