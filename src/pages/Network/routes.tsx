import type { ReactElement } from 'react'
import Card from '../../components/Card'
import NetworkDashboard from './Dashboard'
import ApplicationsPage from './Applications'
import DevicesPage from './Devices'
import SDWanPage from './SDWan'

export type SectionRoute = {
	path: string
	element: ReactElement
}

export const networkRoutes: SectionRoute[] = [
	{ path: '', element: <NetworkDashboard /> },
	{ path: 'dashboard', element: <NetworkDashboard /> },
	{ path: 'sd-wan', element: <SDWanPage /> },
	{ path: 'applications', element: <ApplicationsPage /> },
	{ path: 'devices', element: <DevicesPage /> },
	{ path: 'network-status', element: <Card title="Network Status" className="min-h-[300px]" /> },
	{ path: 'infrastructure', element: <Card title="Infrastructure" className="min-h-[300px]" /> },
	{ path: 'wireless', element: <Card title="Wireless" className="min-h-[300px]" /> },
	{ path: 'wan-vpn', element: <Card title="WAN & VPN" className="min-h-[300px]" /> },
	{ path: 'failover-status', element: <Card title="Failover Status" className="min-h-[300px]" /> },
	{ path: 'bandwidth', element: <Card title="Bandwidth" className="min-h-[300px]" /> },
	{ path: 'live-traffic', element: <Card title="Live Traffic" className="min-h-[300px]" /> },
	{ path: 'threats', element: <Card title="Threats" className="min-h-[300px]" /> },
]
