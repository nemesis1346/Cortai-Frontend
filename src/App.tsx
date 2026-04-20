import { chartHex } from './theme/tokens.generated'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import Topbar from './components/Topbar'
import CommandCenter from './pages/Hotel/CommandCenter'
import { Route, Routes } from 'react-router-dom'
import { hotelRoutes } from './pages/Hotel'
import { networkRoutes } from './pages/Network/routes'
import { ConfigProvider, theme } from 'antd'
import { useThemePreference } from './theme/ThemePreferenceProvider'

export default function App() {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
	const { effective } = useThemePreference()
	return (
		<ConfigProvider
			theme={{
				algorithm: effective === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: {
					colorPrimary: chartHex.brand,
					colorSuccess: chartHex.ok,
					colorWarning: chartHex.warn,
					colorError: chartHex.danger,
					colorInfo: chartHex.info,
				},
			}}
		>
			<div className={`grid h-full min-h-0 ${sidebarCollapsed ? 'grid-cols-[72px_1fr]' : 'grid-cols-[332px_1fr]'} transition-[grid-template-columns] duration-500 ease-out`}>
				<Sidebar collapsed={sidebarCollapsed} onToggleCollapsed={() => setSidebarCollapsed(v => !v)} />
				<div className="flex min-h-0 flex-col overflow-hidden">
					<Topbar />
					<div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
						<Routes>
							<Route path="/" element={<CommandCenter />} />
							<Route path="/hotel">
								{hotelRoutes.map(route => (
									<Route key={route.path || 'hotel-index'} index={route.path === ''} path={route.path || undefined} element={route.element} />
								))}
							</Route>
							<Route path="/network">
								{networkRoutes.map(route => (
									<Route key={route.path || 'network-index'} index={route.path === ''} path={route.path || undefined} element={route.element} />
								))}
							</Route>
						</Routes>
					</div>
				</div>
			</div>
		</ConfigProvider>
	)
}

