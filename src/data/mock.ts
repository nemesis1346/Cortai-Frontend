import { chartHex, primitive } from '../theme/tokens.generated'
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

export const fitnessPageMock = {
	title: 'Fitness Center',
	analysisStrips: [
		{
			body: '12/20 guests in fitness center(11 adults, 1 kids). 43 visitors today. Peak was 18 at 6:30 AM.',
		},
		{
			title: 'Peak pattern',
			titleClass: 'text-text',
			body: 'Two peak windows:5:30-7 am(business travellers) and 5-6 pm(leisure guests). Morning peak 18 guests is at 90% capacity.',
		},
		{
			title: 'Equipment',
			titleClass: 'text-warn',
			body: 'Weight Machines flagged for maintenance attention. 114 total equipment uses today across 27 units.',
		},
		{
			title: 'Air quality',
			titleClass: 'text-brand',
			body: 'CO₂ at 620ppm (Good). 8 air changes/hr. Water filter replacement in 16 days.',
		},
	],
	kpis: [
		{ label: 'Guest Served', value: '43', valueClass: 'text-text', showLink: true },
		{ label: 'Current / Capacity', value: '12 / 20', valueClass: 'text-text' },
		{ label: 'Avg. Session', value: '38m', valueClass: 'text-text' },
		{ label: 'Temperature / Humidity', value: '68°F / 45%', valueClass: 'text-text' },
		{ label: 'Equipment in Use', value: '12 / 27', valueClass: 'text-text' },
		{ label: 'Noise', value: '52 dB', valueClass: 'text-ok' },
		{ label: 'Air Quality', value: 'Good', valueClass: 'text-ok' },
	],
	trafficSeries: [
		{ time: '5:00am', guests: 3 },
		{ time: '6:30am', guests: 18 },
		{ time: '8:00am', guests: 12 },
		{ time: '9:30am', guests: 9 },
		{ time: '11:00am', guests: 8 },
		{ time: '4:00pm', guests: 11 },
		{ time: '5:30pm', guests: 9 },
		{ time: '7:00pm', guests: 4 },
	],
	peakTime: '6:30am',
	trafficTimeline: {
		firstGuest: '5:08 AM',
		peakGuests: 18,
		peakAt: '6:30 AM',
		legendGuests: 42,
	},
	equipmentRows: [
		{
			id: 'eq1',
			name: 'Treadmills',
			ratioInUse: 4,
			ratioTotal: 6,
			usesToday: 28,
			percent: 66,
			avgDuration: '22m',
			status: 'good' as const,
		},
		{
			id: 'eq2',
			name: 'Ellipticals',
			ratioInUse: 2,
			ratioTotal: 4,
			usesToday: 16,
			percent: 50,
			avgDuration: '18m',
			status: 'good' as const,
		},
		{
			id: 'eq3',
			name: 'Stationary Bikes',
			ratioInUse: 2,
			ratioTotal: 4,
			usesToday: 14,
			percent: 50,
			avgDuration: '25m',
			status: 'good' as const,
		},
		{
			id: 'eq4',
			name: 'Weight Machines',
			ratioInUse: 3,
			ratioTotal: 8,
			usesToday: 22,
			percent: 37.5,
			avgDuration: '12m',
			status: 'attention' as const,
		},
		{
			id: 'eq5',
			name: 'Free Weights Area',
			ratioInUse: 1,
			ratioTotal: 1,
			usesToday: 18,
			percent: 100,
			avgDuration: '28m',
			status: 'good' as const,
		},
		{
			id: 'eq6',
			name: 'Cable Machines',
			ratioInUse: 0,
			ratioTotal: 2,
			usesToday: 10,
			percent: 0,
			avgDuration: '15m',
			status: 'good' as const,
		},
		{
			id: 'eq7',
			name: 'Rowing Machines',
			ratioInUse: 0,
			ratioTotal: 2,
			usesToday: 6,
			percent: 0,
			avgDuration: '14m',
			status: 'good' as const,
		},
	],
	guests: {
		now: 12,
		adults: 11,
		kids: 1,
		
		capacityPercent: 60,
		max: 20,
	},
	environment: {
		temp: '68°F',
		humidity: '45%',
		airChangesPerHour: 8,
		co2Ppm: 620,
		noiseDb: 52,
	},
	safety: {
		today: 2,
		slipFall: 1,
		equipMisuse: 1,
		log: [
			{ id: 'fs1', title: 'Equipment Misuse', time: '6:15 am' },
			{ id: 'fs2', title: 'Slip/Fall', time: '7:42 am' },
		],
	},
	supplies: {
		lastRestock: '6:00 AM',
		cleanTowels: { current: 22, capacity: 40 },
		dirtyBin: { current: 16, capacity: 30 },
		sanitizerPct: 72,
		sanitizerStations: 3,
	},
	waterStation: {
		bottleFillsToday: 86,
		lastFilterChange: 'Feb 1',
		filterDaysLeft: '16 days',
	},
}

const meetingMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const

function monthlyPairs(events: number[], guests: number[]) {
	return meetingMonths.map((month, i) => ({
		month,
		events: events[i] ?? 0,
		guests: guests[i] ?? 0,
	}))
}

export const meetingPageMock = {
	title: 'Meetings & Events',
	analysisStrips: [
		{
			plain: '1 space in use, 14 people now. 78 events YTD with 1394 total guests.',
		},
		{
			title: 'Tonight',
			titleClass: 'font-semibold text-text',
			segments: [
				{ text: 'Wedding Reception (Patel/Shah) at ' },
				{ text: '6 PM', bold: true },
				{ text: ' — ' },
				{ text: '120', bold: true },
				{ text: ' expected. Event Space setup at ' },
				{ text: '65%', bold: true },
				{ text: '. Florals arriving ' },
				{ text: '4 pm', bold: true },
				{ text: ', catering staging begins ' },
				{ text: '5 pm', bold: true },
				{ text: '.' },
			],
		},
		{
			title: 'Banquet prep',
			titleClass: 'font-semibold text-brand',
			segments: [
				{ text: 'Banquet washrooms last cleaned at noon. Schedule deep clean by ' },
				{ text: '5:30 pm', bold: true },
				{ text: ' before reception.' },
			],
		},
		{
			title: 'YTD utilization',
			titleClass: 'font-semibold text-brand',
			segments: [
				{ text: 'Meeting rooms averaging ' },
				{ text: '11 events/week', bold: true },
				{ text: '. Event Space at ' },
				{ text: '8', bold: true },
				{ text: ' events YTD (' },
				{ text: '$32K revenue', bold: true },
				{ text: ').' },
			],
		},
	],
	kpis: [
		{ label: 'People Now', value: '15', valueClass: 'text-text' },
		{ label: 'Spaces Active', value: '1 / 3', valueClass: 'text-text' },
		{ label: 'Avg. Guests', value: '18', valueClass: 'text-text' },
		{ label: 'Total Capacity', value: '182', valueClass: 'text-text' },
		{ label: 'YTD Events', value: '78', valueClass: 'text-text' },
		{ label: 'YTD Guests', value: '1,394', valueClass: 'text-brand' },
		{ label: 'YTD Revenue', value: '$45K', valueClass: 'text-ok' },
	],
	meetingRooms: [
		{
			id: 'mr1',
			name: 'Meeting Room 1',
			capacity: 20,
			guestsYtd: 462,
			status: 'in_use' as const,
			currentEvent: {
				name: 'Lionston Q1 Review',
				time: '1:00 pm – 3:30 pm',
				badge: 'Now' as const,
			},
			metrics: {
				temp: '71°F',
				humidity: '44%',
				noiseDb: 42,
				avgDuration: '2.1 hrs',
				avgGuests: 11,
				ytdEvents: 42,
				revenue: '$8K',
			},
			monthlyUsage: monthlyPairs(
				[12, 15, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[138, 144, 152, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			),
			avEquipment: [
				{ id: 'av1', name: '65" Samsung Display', model: 'QN65QN85B', serial: 'SAM-MR1-001', status: 'good' as const },
				{ id: 'av2', name: 'Epson Projector', model: 'Pro EX9240', serial: 'EPS-MR1-002', status: 'good' as const },
				{ id: 'av3', name: 'Poly Conference Phone', model: 'Studio X50', serial: 'POL-MR1-003', status: 'good' as const },
				{ id: 'av4', name: 'Logitech Webcam', model: 'Rally Plus', serial: 'LOG-MR1-004', status: 'good' as const },
				{ id: 'av5', name: 'Whiteboard (digital)', model: 'Samsung Flip', serial: 'SAM-MR1-005', status: 'good' as const },
			],
			eventHistory: [
				{ id: 'h1', date: 'Feb 15, 2026', name: 'Lionston Q1 Review', type: 'Corporate', guests: 14, duration: '2.5h' },
				{ id: 'h2', date: 'Feb 12, 2026', name: 'Sales Team Sync', type: 'Internal', guests: 8, duration: '1.5h' },
				{ id: 'h3', date: 'Feb 10, 2026', name: 'Vendor Negotiation — HVAC', type: 'External', guests: 6, duration: '2h' },
				{ id: 'h4', date: 'Feb 8, 2026', name: 'Quarterly Planning', type: 'Corporate', guests: 16, duration: '3h' },
				{ id: 'h5', date: 'Feb 5, 2026', name: 'All-hands briefing', type: 'Internal', guests: 10, duration: '1.5h' },
			],
		},
		{
			id: 'mr2',
			name: 'Meeting Room 2',
			capacity: 14,
			guestsYtd: 318,
			status: 'available' as const,
			currentEvent: {
				name: 'Product Team Standup',
				time: '2:00 PM – 3:00 PM',
				badge: 'Next' as const,
			},
			metrics: {
				temp: '70°F',
				humidity: '46%',
				noiseDb: 38,
				avgDuration: '1.4 hrs',
				avgGuests: 9,
				ytdEvents: 28,
				revenue: '$5.2K',
			},
			monthlyUsage: monthlyPairs(
				[1, 2, 2, 3, 3, 4, 3, 3, 2, 3, 2, 3],
				[14, 18, 20, 24, 26, 30, 24, 22, 18, 20, 16, 22],
			),
			avEquipment: [
				{ id: 'av1', name: 'LED wall', model: 'LG MAGNIT', serial: 'LED-MR2-001', status: 'good' as const },
				{ id: 'av2', name: 'Sound bar + subs', model: 'Sonos Arc', serial: 'SON-MR2-002', status: 'good' as const },
				{ id: 'av3', name: 'PTZ cameras (2)', model: 'Logitech Rally', serial: 'LOG-MR2-003', status: 'attention' as const },
			],
			eventHistory: [
				{ id: 'h1', date: 'Apr 5, 2026', name: 'Sales sync', type: 'Internal', guests: 10, duration: '1h' },
				{ id: 'h2', date: 'Apr 3, 2026', name: 'Interview panel', type: 'External', guests: 5, duration: '1.5h' },
				{ id: 'h3', date: 'Mar 28, 2026', name: 'Workshop — onboarding', type: 'Corporate', guests: 12, duration: '2h' },
			],
		},
		{
			id: 'es1',
			name: 'Event Space',
			icon: 'presentation' as const,
			capacity: 150,
			guestsYtd: 736,
			status: 'setup' as const,
			durationLabel: 'Avr. Duration',
			chartColors: { events: primitive.AccentPurple, guests: chartHex.brand },
			currentEvent: {
				name: 'Wedding Reception - Patel/Shah',
				time: 'Today, 6:00 pm',
				setupProgress: 65,
			},
			metrics: {
				now: 0,
				temp: '69°F',
				humidity: '46%',
				noiseDb: 34,
				avgDuration: '4.5 hrs',
				avgGuests: 92,
				ytdEvents: 8,
				revenue: '$32K',
			},
			monthlyUsage: monthlyPairs(
				[12, 15, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[138, 144, 152, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			),
			avEquipment: [
				{ id: 'es-av1', name: 'Stage lighting DMX', model: 'Chauvet Maverick', serial: 'DMX-ES-001', status: 'good' as const },
				{ id: 'es-av2', name: 'FOH sound console', model: 'Yamaha QL5', serial: 'YAM-ES-002', status: 'good' as const },
				{ id: 'es-av3', name: 'Wireless uplights (24)', model: 'Astera Titan', serial: 'AST-ES-003', status: 'attention' as const },
			],
			eventHistory: [
				{ id: 'es-h1', date: 'Mar 28, 2026', name: 'Corporate gala', type: 'Corporate', guests: 120, duration: '4h' },
				{ id: 'es-h2', date: 'Mar 15, 2026', name: 'Charity auction', type: 'External', guests: 95, duration: '3.5h' },
				{ id: 'es-h3', date: 'Mar 1, 2026', name: 'Product launch keynote', type: 'Corporate', guests: 200, duration: '2h' },
			],
		},
	],
	banquetWashrooms: [
		{
			label: "Men's",
			usesToday: 24,
			nextClean: '3:30 PM',
			lastCleaned: '11:45 AM',
			occupied: 0,
			capacity: 4,
		},
		{
			label: "Women's",
			usesToday: 31,
			nextClean: '4:00 PM',
			lastCleaned: '12:10 PM',
			occupied: 2,
			capacity: 6,
		},
	],
}

export const fitnessMock = {
	title: 'Fitness Today',
	capacity: fitnessPageMock.guests.max,
	now: fitnessPageMock.guests.now,
	total: 43,
	avgSession: '38m',
	temperature: fitnessPageMock.environment.temp,
	humidity: fitnessPageMock.environment.humidity,
}

export const poolPageMock = {
	title: 'Pool & Spa',
	analysisStrips: [
		{
			body: '10 in pool area (6 adults, 4 kids). 34 total visitors today. 5 safety detections — 1 unresolved.',
		},
		{
			title: 'Safety',
			titleClass: 'text-warn',
			body: '1 unresolved safety event. Running detected at 2:18 PM in Spa Area. Staff notified.',
		},
		{
			title: 'Dirty towels',
			titleClass: 'text-warn',
			body: '9 dirty towels detected (6 on chairs, 3 on deck). Housekeeping pickup needed.',
		},
		{
			title: 'Towel supply',
			titleClass: 'text-brand',
			body: '14 clean towels remaining of 40. At current pace, restock needed by 4 pm',
		},
	],
	kpis: [
		{ label: 'Visitors Today', value: '34', valueClass: 'text-text', showLink: true },
		{ label: 'Adults / Kids', value: '6 / 4', valueClass: 'text-text' },
		{ label: 'Pool / Spa Temp', value: '82°F / 102°F', valueClass: 'text-text' },
		{ label: 'Room', value: '78°F / 62%', valueClass: 'text-text' },
		{ label: 'Safety Events', value: '5', valueClass: 'text-danger' },
		{ label: 'Noise Level', value: '68 dB', valueClass: 'text-ok' },
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
