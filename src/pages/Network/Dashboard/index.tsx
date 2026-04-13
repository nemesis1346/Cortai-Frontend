import HotelOverviewCard from './HotelOverviewCard'
import InsightPanels from './InsightPanels'
import LiveAlertsPanel from './LiveAlertsPanel'
import StatusChipsRow from './StatusChipsRow'
import SummaryStrip from './SummaryStrip'
import ThreatIntelligencePanel from './ThreatIntelligencePanel'
import type { AlertItem, StatusChip, SummaryMetric, ThreatItem } from './types'

const hotelOverviewStats = [
	{ id: 'users', value: '120', label: 'Total Users' },
	{ id: 'devices', value: '57', label: 'Total Devices' },
	{ id: 'cameras', value: '45', label: 'Total Cameras' },
	{ id: 'circuit', value: '1Gbps', label: 'Circuit' },
]

const summaryMetrics: SummaryMetric[] = [
	{
		id: 'security-score',
		label: 'Security Score',
		value: '92%',
		subvalue: 'Excellent',
		tone: 'green',
		visual: { type: 'score', percent: 92, footnote: '92 of 100' },
	},
	{
		id: 'threats-blocked',
		label: 'Threats Blocked',
		value: '4,752',
		subvalue: 'Today',
		tone: 'teal',
		visual: {
			type: 'bars',
			left: { value: '3,5K', label: '13/06' },
			right: { value: '4,7K', label: 'Now' },
		},
	},
	{
		id: 'active-users',
		label: 'Active Users',
		value: '8',
		subvalue: '3 remote',
		tone: 'blue',
		visual: { type: 'ring', percent: Math.round((8 / 120) * 100), maxLabel: 'Max 120' },
	},
	{
		id: 'connected-devices',
		label: 'Connected Devices',
		value: '17',
		subvalue: '4 unmanaged',
		tone: 'teal',
		visual: { type: 'ring', percent: Math.round((17 / 150) * 100), maxLabel: 'Max 150' },
	},
	{
		id: 'wifi-clients',
		label: 'WiFi Clients',
		value: '307',
		subvalue: '9 APs',
		tone: 'teal',
		visual: { type: 'ring', percent: Math.round((307 / 500) * 100), maxLabel: 'Max 500' },
	},
	{
		id: 'wan-traffic',
		label: 'WAN Traffic',
		value: '332Mbps',
		subvalue: '9ms',
		tone: 'teal',
		visual: { type: 'ring', percent: Math.round((332 / 500) * 100), maxLabel: 'Max 500Mbps' },
	},
]

const statusChips: StatusChip[] = [
	{ id: 'network-status', label: 'Network Status', badge: 'All systems go', theme: 'green' },
	{ id: 'threat-monitor', label: 'Threat Monitor', badge: '1 critical', secondaryText: '4,7K blocked', theme: 'red' },
	{ id: 'ai-insights', label: 'AI Insights', badge: '5 recommends', theme: 'teal' },
	{ id: 'sessions', label: 'User Sessions', badge: '36 active', theme: 'purple' },
]

const liveAlerts: AlertItem[] = [
	{ id: 'a1', event: 'Malware Detected', asset: 'Trojan on ACME-WS-005', time: '12m ago', severity: 'critical' },
	{ id: 'a2', event: 'VPN Tunnel Down', asset: 'Partner DataCorp disconnected', time: '15m ago', severity: 'high' },
	{ id: 'a3', event: 'Unusual Data Transfer', asset: '2.5GB upload from 10.1.10.49', time: '25m ago', severity: 'high' },
	{ id: 'a4', event: 'Unmanaged Device', asset: 'Alex Turner personal laptop', time: '38m ago', severity: 'high' },
	{ id: 'a5', event: 'High CPU on Switch', asset: 'Access Switch Floor 3 at 75%', time: '1h ago', severity: 'medium' },
]

const threatItems: ThreatItem[] = [
	{ id: 't1', type: 'Trojan.GenericKD', source: '10.1.10.49', time: '12m ago', status: 'blocked' },
	{ id: 't2', type: 'Phishing URL', source: '10.1.10.46', time: '25m ago', status: 'blocked' },
	{ id: 't3', type: 'SQL Injection', source: 'External', time: '49m ago', status: 'blocked' },
	{ id: 't4', type: 'Phishing URL', source: '10.1.10.117', time: '1h ago', status: 'investigating' },
	{ id: 't5', type: 'Trojan.GenericKD', source: '10.1.10.121', time: '1h 38m ago', status: 'blocked' },
]

export default function NetworkDashboard() {
	return (
		<main className="h-full overflow-y-auto p-4 md:p-5">
			<div className="flex flex-col gap-4 pb-4">
				<section className="grid grid-cols-1 gap-3 xl:grid-cols-[1fr_1fr]">
					<div className="flex flex-col gap-3">
						<HotelOverviewCard
							title="Marriott Hotel"
							address="100 Front St W, Toronto, ON"
							stats={hotelOverviewStats}
						/>
						<StatusChipsRow items={statusChips} />
					</div>
					<SummaryStrip metrics={summaryMetrics} />
				</section>
				<InsightPanels />
				<section className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
					<LiveAlertsPanel items={liveAlerts} />
					<ThreatIntelligencePanel items={threatItems} />
				</section>
			</div>
		</main>
	)
}
