import Sidebar from './components/Sidebar'
import { useState } from 'react'
import Topbar from './components/Topbar'
import CommandCenter from './pages/CommandCenter'
import RoomMonitor from './pages/RoomMonitor'
import FoodBreakfast from './pages/FoodBreakfast'
import PoolSpa from './pages/PoolSpa'
import Fitness from './pages/Fitness'
import MeetingEvent from './pages/MeetingEvent'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import { ConfigProvider, theme } from 'antd'

export default function App() {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
				token: {
					colorPrimary: '#00D4C0',
					colorSuccess: '#22c55e',
					colorWarning: '#d97706',
				},
			}}
		>
			<div className={`grid h-full min-h-0 ${sidebarCollapsed ? 'grid-cols-[72px_1fr]' : 'grid-cols-[332px_1fr]'} transition-[grid-template-columns] duration-300`}>
				<Sidebar collapsed={sidebarCollapsed} onToggleCollapsed={() => setSidebarCollapsed(v => !v)} />
				<div className="flex min-h-0 flex-col overflow-hidden">
					<Topbar />
					<div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
					<Routes>
						<Route path="/" element={<CommandCenter />} />
						<Route path="/command" element={<CommandCenter />} />
						<Route path="/guest" element={<Card title="Guest Services" className="min-h-[300px]" />} />
						<Route path="/room" element={<RoomMonitor />} />
						<Route path="/food" element={<FoodBreakfast />} />
						<Route path="/pool" element={<PoolSpa />} />
						<Route path="/fitness" element={<Fitness />} />
						<Route path="/meetings" element={<MeetingEvent />} />
						<Route path="/incidents" element={<Card title="Incident Log" className="min-h-[300px]" />} />
					</Routes>
					</div>
				</div>
			</div>
		</ConfigProvider>
	)
}

