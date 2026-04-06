import type { KPI } from './types'

export const kpis: KPI[] = [
	{ label: 'Occupancy', value: '58%', sub: '69 of 120', percent: 58 },
	{ label: 'Guests in hotel', value: 118, sub: 'across 67 rooms', percent: 88 },
	{ label: 'Staff on site', value: 22, sub: '85% of on duty today', percent: 85 },
	{ label: 'Rooms ready', value: 44, sub: '10 under cleaning', percent: 81 },
	{ label: 'Departures today', value: 26, sub: '18 departed', percent: 69 },
	{ label: 'Arrivals today', value: 23, sub: '8 arrived', percent: 34 }
]

export const housekeepingMock = {
	cleanPercent: 58,
	dirtyPercent: 88,
	rooms: 40,
	done: 15,
	staff: 18,
	avgDiff: -2,
	turnaroundMins: 2,
	avgCleanTimeMins: 22,
	inProcess: 8,
	inTransit: 10,
	onBreak: 1,
	dnd: 2,
}

export const elevatorsMock = {
	ridesToday: 280,
	waitingNow: 13,
	waitingAvg: 5,
	longestWait: '52s',
	longestAvg: '10s',
	items: [
		{ id: 'E1', status: 'Running' as const, floor: 5, ridersPercent: 5, Direction: 'Down' as const },
		{ id: 'E2', status: 'Running' as const, floor: 2, ridersPercent: 2, Direction: 'Up' as const },
		{ id: 'E3', status: 'Running' as const, floor: 12, ridersPercent: 12, Direction: 'Down' as const },
		{ id: 'E4', status: 'Running' as const, floor: 9, ridersPercent: 9, Direction: 'Up' as const },
		{ id: 'E5', status: 'Standing' as const, floor: 1, ridersPercent: 1, Direction: 'Standing' as const },
	],
	alerts: [
		{ id: 'a1', text: 'F9 · 45s · 2', color: 'red' },
		{ id: 'a2', text: 'F9 · 45s · 2', color: 'red' },
		{ id: 'a3', text: 'F9 · 45s · 2', color: 'amber' },
	],
	timeline: [
		{ id: 't1', left: '52s', mid: 'F9', right: '8:14 am' },
		{ id: 't2', left: '48s', mid: 'G', right: '8:32 am' },
		{ id: 't3', left: '37s', mid: 'F5', right: '12:08 pm' },
	],
}

export const frontDeskMock = {
	queue: 3,
	served: 34,
	inQueue: 3,
	queueAvg: '1m 45s',
	checkinAvg: '3m 20s',
	items: [
		{ id: 'fd1', wait: '6m 12s', color: 'red', name: 'Walk-in', time: '8:45 am' },
		{ id: 'fd2', wait: '5m 34s', color: 'amber', name: 'Mr. Garcia', time: '3:15 pm' },
		{ id: 'fd3', wait: '4m 48s', color: 'teal', name: 'Mrs. Brown', time: '8:55 pm' },
		{ id: 'fd4', wait: '4m 10s', color: 'teal', name: 'Mr. Kim', time: '8:55 pm' },
	],
}

export const washroomsMock = {
	total: 3,
	areas: [
		{ id: 'w1', label: "Men's", count: 142, occupied: 1, total: 3, last: '2:15 pm', next: '4:15 pm', color: 'amber' },
		{ id: 'w2', label: "Women's", count: 158, occupied: 2, total: 3, last: '2:20 pm', next: '4:20 pm', color: 'amber' },
		{ id: 'w3', label: "Universal's", count: 34, occupied: 0, total: 1, last: '2:15 pm', next: '4:15 pm', color: 'green' },
	],
}

export const foodMock = {
	breakfast: { served: 156, buffetDwell: '8m' },
	cafe: { served: 48, dineIn: '18m', toTable: '6m' },
}

export const fitnessMock = {
	title: 'Fitness Today',
	capacity: 20,
	now: 12,
	total: 43,
	avgSession: '38m',
	temperature: '68°F',
	humidity: '45%',
}

export const poolMock = {
	title: 'Pool & Spa',
	pool: {
		now: 10,
		total: 34,
		avgTime: '42m',
		temp: '82°F',
		inPool: 8,
		dwell: '35m',
		roomTemp: '78°F',
		humidity: '72%',
	},
	spa: {
		now: 2,
		total: 18,
		avgTime: '22m',
		temp: '102°F',
	},
}

export type EventStatus = 'Live' | 'Open' | 'Setup'
export const eventsMock = {
	title: "Today's Meetings & Events",
	count: 3,
	items: [
		{ id: 'e1', title: 'Lionston Q1 Review', subtitle: 'Meeting · Room 1', time: '35m left', status: 'Live' as EventStatus },
		{ id: 'e2', title: 'Vendor Call - AV Systems', subtitle: 'Meeting · Room 2', time: 'Feb 17, 10:00 am', status: 'Open' as EventStatus },
		{ id: 'e3', title: 'Wedding Reception - Patel/Shah', subtitle: 'Event Space', time: 'Wed, 6:00 pm', status: 'Setup' as EventStatus },
	],
}
