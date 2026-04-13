import type { SdWanAppRoute, SdWanCircuit, SdWanSteeringPolicy, SdWanSummaryMetric } from './types'

export const sdWanSummaryMetrics: SdWanSummaryMetric[] = [
	{ id: 'status', label: 'SD-WAN Status', value: 'Active', valueTone: 'neon', link: true },
	{ id: 'circuits', label: 'Circuits', value: '2/2', valueTone: 'white', link: true },
	{ id: 'policies', label: 'Policies', value: '5', valueTone: 'white' },
	{ id: 'apps', label: 'Apps Routed', value: '6', valueTone: 'white' },
	{ id: 'controller', label: 'Controller', value: 'Online', valueTone: 'neon', link: true },
]

export const sdWanCircuits: SdWanCircuit[] = [
	{
		id: 'bell-fiber',
		name: 'Bell Fiber',
		subtitle: 'Bell Canada • MPLS • Weight: 100',
		role: 'primary',
		headline: {
			speed: '1 Gbps',
			health: '98%',
			cost: '$2,400/mo',
			sla: '99.99%',
		},
		detail: {
			latency: '8ms',
			jitter: '1.2ms',
			packetLoss: '0.01%',
			utilization: '34%',
		},
	},
	{
		id: 'rogers',
		name: 'Rogers Business',
		subtitle: 'Rogers • DIA • Weight: 50',
		role: 'backup',
		headline: {
			speed: '500 Mbps',
			health: '95%',
			cost: '$1,200/mo',
			sla: '99.9%',
		},
		detail: {
			latency: '12ms',
			jitter: '2.1ms',
			packetLoss: '0.02%',
			utilization: '0%',
		},
	},
]

export const sdWanSteeringPolicies: SdWanSteeringPolicy[] = [
	{
		id: 'p1',
		policy: 'Voice/Video Priority',
		apps: ['Teams', 'Zoom'],
		circuit: 'Bell Fiber',
		strategy: 'Best Quality',
	},
	{
		id: 'p2',
		policy: 'Business Critical',
		apps: ['SAP'],
		circuit: 'Bell Fiber',
		strategy: 'Best Performance',
	},
	{
		id: 'p3',
		policy: 'Cloud Backup',
		apps: ['AWS', 'Azure'],
		circuit: 'Rogers Business',
		strategy: 'Dedicated',
	},
	{
		id: 'p4',
		policy: 'General Internet',
		apps: ['Web', 'DNS'],
		circuit: 'Bell Fiber',
		strategy: 'Load Balance',
	},
	{
		id: 'p5',
		policy: 'Guest WiFi',
		apps: ['All'],
		circuit: 'Rogers Business',
		strategy: 'Best Quality',
	},
]

export const sdWanAppRoutes: SdWanAppRoute[] = [
	{ id: 'a1', name: 'Microsoft Teams', circuit: 'Bell Fiber', bandwidth: '125Mbps', sessions: '45', performanceDots: 5 },
	{ id: 'a2', name: 'Zoom', circuit: 'Bell Fiber', bandwidth: '88Mbps', sessions: '32', performanceDots: 5 },
	{ id: 'a3', name: 'Salesforce', circuit: 'Bell Fiber', bandwidth: '42Mbps', sessions: '18', performanceDots: 4 },
	{ id: 'a4', name: 'SAP ERP', circuit: 'Bell Fiber', bandwidth: '36Mbps', sessions: '12', performanceDots: 4 },
	{ id: 'a5', name: 'AWS Services', circuit: 'Rogers Business', bandwidth: '210Mbps', sessions: '64', performanceDots: 5 },
	{ id: 'a6', name: 'Web Browsing', circuit: 'Load balanced', bandwidth: '340Mbps', sessions: '412', performanceDots: 3 },
	{ id: 'a7', name: 'Azure Services', circuit: 'Bell Fiber', bandwidth: '95Mbps', sessions: '28', performanceDots: 5 },
	{ id: 'a8', name: 'Social Media', circuit: 'Rogers Business', bandwidth: '22Mbps', sessions: '156', performanceDots: 2 },
]
