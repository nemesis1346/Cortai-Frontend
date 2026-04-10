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

export const poolPageMock = {
	title: 'Pool & Spa',
	analysisStrips: [
		{
			body: '10 in pool area (6 adults, 4 kids). 34 total visitors today. 5 safety detections — 1 unresolved.',
		},
		{
			title: 'Safety',
			titleClass: 'text-[#C58B11]',
			body: '1 unresolved safety event. Running detected at 2:18 PM in Spa Area. Staff notified.',
		},
		{
			title: 'Dirty towels',
			titleClass: 'text-[#C58B11]',
			body: '9 dirty towels detected (6 on chairs, 3 on deck). Housekeeping pickup needed.',
		},
		{
			title: 'Towel supply',
			titleClass: 'text-[#00D4C0]',
			body: '14 clean towels remaining of 40. At current pace, restock needed by 4 pm',
		},
	],
	kpis: [
		{ label: 'Visitors Today', value: '34', valueClass: 'text-white', showLink: true },
		{ label: 'Adults / Kids', value: '6 / 4', valueClass: 'text-white' },
		{ label: 'Pool / Spa Temp', value: '82°F / 102°F', valueClass: 'text-white' },
		{ label: 'Room', value: '78°F / 62%', valueClass: 'text-white' },
		{ label: 'Safety Events', value: '5', valueClass: 'text-[#f87171]' },
		{ label: 'Noise Level', value: '68 dB', valueClass: 'text-[#22c55e]' },
	],
	trafficSeries: [
		{ time: '6:00 am', zone: 'Pool' as const, count: 2 },
		{ time: '6:00 am', zone: 'Spa' as const, count: 0 },
		{ time: '8:00 am', zone: 'Pool' as const, count: 6 },
		{ time: '8:00 am', zone: 'Spa' as const, count: 2 },
		{ time: '10:00 am', zone: 'Pool' as const, count: 12 },
		{ time: '10:00 am', zone: 'Spa' as const, count: 4 },
		{ time: '12:00 pm', zone: 'Pool' as const, count: 18 },
		{ time: '12:00 pm', zone: 'Spa' as const, count: 6 },
		{ time: '2:00 pm', zone: 'Pool' as const, count: 16 },
		{ time: '2:00 pm', zone: 'Spa' as const, count: 8 },
		{ time: '4:00 pm', zone: 'Pool' as const, count: 14 },
		{ time: '4:00 pm', zone: 'Spa' as const, count: 5 },
		{ time: '6:00 pm', zone: 'Pool' as const, count: 10 },
		{ time: '6:00 pm', zone: 'Spa' as const, count: 12 },
		{ time: '8:00 pm', zone: 'Pool' as const, count: 6 },
		{ time: '8:00 pm', zone: 'Spa' as const, count: 4 },
	],
	peakPoolTimes: ['12:00 pm'],
	peakSpaTimes: ['6:00 pm'],
	safetySummary: {
		activeCount: 1,
		todayCount: 5,
		categories: [
			{ id: 'slip' as const, label: 'Slip/Fall', count: 1, avgPerDay: 0.4 },
			{ id: 'running' as const, label: 'Running', count: 3, avgPerDay: 2.1 },
			{ id: 'jumping' as const, label: 'Jumping', count: 1, avgPerDay: 0.8 },
		],
	},
	safetyRows: [
		{
			id: 's1',
			kind: 'running' as const,
			type: 'Running',
			location: 'Spa Area Omelette (46)',
			time: '1:38 pm',
			status: 'Active' as const,
		},
		{
			id: 's2',
			kind: 'running' as const,
			type: 'Running',
			location: 'Pool Deck',
			time: '1:42 pm',
			status: 'Resolved' as const,
		},
		{
			id: 's3',
			kind: 'jumping' as const,
			type: 'Jumping',
			location: 'Deep End',
			time: '12:10 pm',
			status: 'Resolved' as const,
		},
		{
			id: 's4',
			kind: 'slip' as const,
			type: 'Slip/Fall',
			location: 'Pool Entry',
			time: '11:02 am',
			status: 'Resolved' as const,
		},
		{
			id: 's5',
			kind: 'running' as const,
			type: 'Running',
			location: 'Pool Deck',
			time: '10:22 am',
			status: 'Resolved' as const,
		},
	],
	poolStatus: {
		temp: '82°F',
		avgDwell: '35m',
		peakVisitors: 16,
		currentVisitors: 8,
		capacityPercent: 41,
		maxVisitors: 25,
	},
	spaStatus: {
		temp: '102°F',
		avgDwell: '22m',
		visitorsToday: 18,
		currentVisitors: 2,
		capacityPercent: 33,
		maxVisitors: 6,
	},
	guestsRatio: {
		adults: 6,
		kids: 4,
		adultsNow: 6,
		kidsNow: 4,
		adultsToday: 22,
		kidsToday: 12,
		totalToday: 34,
	},
	washrooms: [
		{
			label: "Men's",
			usesToday: 48,
			nextClean: '3:15 pm',
			lastCleaned: '1:15 pm',
			occupied: '1/3',
		},
		{
			label: "Women's",
			usesToday: 52,
			nextClean: '3:20 pm',
			lastCleaned: '1:20 pm',
			occupied: '2/3',
		},
	],
	towels: {
		scanned: '2:42 PM',
		dirty: {
			total: 9,
			onDeck: 3,
			onChairs: 6,
		},
		clean: {
			count: 14,
			capacity: 40,
			distributedToday: 26,
		},
		restockBy: '4:00 PM',
	},
	noiseLevels: [
		{ label: 'Pool Room', db: 68 },
		{ label: 'Mech Room', db: 72 },
	],
}

export const poolMock = {
	title: poolPageMock.title,
	pool: {
		now: 10,
		total: 34,
		avgTime: poolPageMock.poolStatus.avgDwell,
		temp: '82°F',
		inPool: poolPageMock.poolStatus.currentVisitors,
		dwell: poolPageMock.poolStatus.avgDwell,
		roomTemp: '78°F',
		humidity: '62%',
	},
	spa: {
		now: poolPageMock.spaStatus.currentVisitors,
		total: poolPageMock.spaStatus.visitorsToday,
		avgTime: poolPageMock.spaStatus.avgDwell,
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
