import type { ReactElement } from 'react'
import Card from '../../components/Card'
import CommandCenter from './CommandCenter'
import Fitness from './Fitness'
import FoodBreakfast from './FoodBreakfast'
import MeetingEvent from './MeetingEvent'
import PoolSpa from './PoolSpa'
import RoomMonitor from './RoomMonitor'

export type SectionRoute = {
	path: string
	element: ReactElement
}

export const hotelRoutes: SectionRoute[] = [
	{ path: '', element: <CommandCenter /> },
	{ path: 'command', element: <CommandCenter /> },
	{ path: 'guest', element: <Card title="Guest Services" className="min-h-[300px]" /> },
	{ path: 'room', element: <RoomMonitor /> },
	{ path: 'food', element: <FoodBreakfast /> },
	{ path: 'pool', element: <PoolSpa /> },
	{ path: 'fitness', element: <Fitness /> },
	{ path: 'meetings', element: <MeetingEvent /> },
	{ path: 'incidents', element: <Card title="Incident Log" className="min-h-[300px]" /> },
]
