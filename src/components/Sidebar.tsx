import type { ReactElement } from 'react'
import avatar from '../assets/avatar.jpg'
import hotelBrandDark from '../assets/hotel-brand-dark.svg?url'
import hotelBrandLight from '../assets/hotel-brand-light.svg?url'
import { useThemePreference } from '../theme/ThemePreferenceProvider'
type NavItem = {
	key: string
	label: string
	icon: ReactElement
	route: string
}

import { ChevronLeft } from 'lucide-react'

const LeftRailIcon = ({ children, active, onClick }: { children: ReactElement; active?: boolean; onClick?: () => void }) => (
	<button
		type="button"
		onClick={onClick}
		className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
			${active ? "border border-brand/90 text-brand/90" : "text-text"}`}
	>
		{children}
	</button>
)

const DotMenu = () => (
	<div className="flex gap-1 items-center">
		<span className="w-1.5 h-1.5 rounded-full bg-text-dim"></span>
		<span className="w-1.5 h-1.5 rounded-full bg-text-dim"></span>
		<span className="w-1.5 h-1.5 rounded-full bg-text-dim"></span>
	</div>
)

import { LayoutGrid, Sparkles, Hospital, Utensils, Waves, Dumbbell, CalendarDays, ShieldAlert, FilePlus2, Users2, Globe, ShieldCheck, MonitorSmartphone, Settings, Building2, AppWindow, Gauge } from "lucide-react"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const hotelNavItems: NavItem[] = [
	{ key: "command", label: "Command Center", icon: <LayoutGrid className="w-5 h-5" />, route: "/hotel/command" },
	{ key: "guest", label: "Guest Services", icon: <Sparkles className="w-5 h-5" />, route: "/hotel/guest" },
	{ key: "room", label: "Room Monitor", icon: <Hospital className="w-5 h-5" />, route: "/hotel/room" },
	{ key: "food", label: "Food & Breakfast", icon: <Utensils className="w-5 h-5" />, route: "/hotel/food" },
	{ key: "pool", label: "Pool & Spa", icon: <Waves className="w-5 h-5" />, route: "/hotel/pool" },
	{ key: "fitness", label: "Fitness Center", icon: <Dumbbell className="w-5 h-5" />, route: "/hotel/fitness" },
	{ key: "meetings", label: "Meetings & Events", icon: <CalendarDays className="w-5 h-5" />, route: "/hotel/meetings" },
	{ key: "incidents", label: "Incident Log", icon: <ShieldAlert className="w-5 h-5" />, route: "/hotel/incidents" }
]

const securityNavItems: NavItem[] = [
	{ key: "security-dashboard", label: "Dashboard", icon: <Gauge className="w-5 h-5" />, route: "/network/dashboard" },
	{ key: "sd-wan", label: "SD-WAN", icon: <Globe className="w-5 h-5" />, route: "/network/sd-wan" },
	{ key: "applications", label: "Applications", icon: <AppWindow className="w-5 h-5" />, route: "/network/applications" },
	{ key: "devices", label: "Devices", icon: <MonitorSmartphone className="w-5 h-5" />, route: "/network/devices" },
]

type SidebarProps = { collapsed?: boolean; onToggleCollapsed?: () => void }

export default function Sidebar({ collapsed = false, onToggleCollapsed }: SidebarProps) {
	const { effective } = useThemePreference()
	const [activeKey, setActiveKey] = useState<string>("command")
	const [activeSection, setActiveSection] = useState<'hotel' | 'security'>('hotel')
	const [sectionPanelOpen, setSectionPanelOpen] = useState(true)
	const hotelOpsKeys = ["command","guest","room","food","pool","fitness","meetings","incidents"]
	const isHotelOps = hotelOpsKeys.includes(activeKey)
	const isSecurity = activeSection === 'security'
	const currentNavItems = isSecurity ? securityNavItems : hotelNavItems
	const navigate = useNavigate()

	const openSidebarIfCollapsed = () => {
		if (collapsed && onToggleCollapsed) onToggleCollapsed()
	}

	const handleHotelRailClick = () => {
		openSidebarIfCollapsed()
		setActiveSection('hotel')
		setSectionPanelOpen(true)
		setActiveKey("command")
		navigate("/hotel/command")
	}

	const handleSecurityRailClick = () => {
		openSidebarIfCollapsed()
		setActiveSection('security')
		setActiveKey("security-dashboard")
		navigate("/network/dashboard")
		setSectionPanelOpen(true)
	}
	return (
		<aside className="h-full flex flex-col relative border-r border-border">
			{/* Header */}
			<header className="h-[72px] border-b border-border flex items-center" role="banner" aria-label="Sidebar header">
				<div className="w-[72px] flex items-center justify-center">
					<img
						src={effective === 'dark' ? hotelBrandDark : hotelBrandLight}
						alt=""
						className="h-7 w-7 shrink-0 opacity-90"
					/>
				</div>
				<div className={`flex flex-col justify-center flex-1 transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden px-0' : 'opacity-100 px-6'}`}>
					<div className="text-brand/90 text-lg font-semibold tracking-wide">CORTAI</div>
					<div className="text-xs text-text-mute mt-0.5">Unified Hotel Platform</div>
				</div>
				<div className={`transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 px-4'}`}>
					<button
						type="button"
						onClick={onToggleCollapsed}
						aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
						className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text hover:bg-card"
					>
						<ChevronLeft className="w-4 h-4" />
					</button>
				</div>
			</header>

			{/* Full-height divider to align header and content */}
			<div className="pointer-events-none absolute top-0 bottom-0 left-[72px] border-r border-border"></div>

			{/* Content */}
			<section className="flex-1 flex" role="navigation" aria-label="Sidebar navigation">
				{/* Left rail */}
				<div className="w-[72px] bg-bg flex flex-col items-center gap-3 pt-3">
					<LeftRailIcon active={isHotelOps && !isSecurity} onClick={handleHotelRailClick}>
						<Building2 className="w-5 h-5" />
					</LeftRailIcon>
					<LeftRailIcon>
						<Sparkles className="w-5 h-5" />
					</LeftRailIcon>
					<LeftRailIcon>
						<FilePlus2 className="w-5 h-5" />
					</LeftRailIcon>
					<LeftRailIcon>
						<Users2 className="w-5 h-5" />
					</LeftRailIcon>
					<LeftRailIcon>
						<Globe className="w-5 h-5" />
					</LeftRailIcon>
					<LeftRailIcon active={isSecurity && sectionPanelOpen} onClick={handleSecurityRailClick}>
						<ShieldCheck className="w-5 h-5" />
					</LeftRailIcon>
					<LeftRailIcon>
						<Settings className="w-5 h-5" />
					</LeftRailIcon>
					<div className="mt-auto mb-4">
						<img
							src={avatar}
							alt="User avatar"
							className="w-[36px] h-[36px] rounded-full object-cover bg-border"
						/>
					</div>
				</div>

				{/* Main body */}
				<div className={`bg-card flex flex-col transition-all duration-300 ${collapsed || !sectionPanelOpen ? 'w-0 opacity-0 overflow-hidden pointer-events-none' : 'flex-1 opacity-100'}`}>
					<div className="px-6 py-5 text-[11px] tracking-wider text-text-mute">{isSecurity ? 'SECURITY & NETWORK' : 'HOTEL OPERATIONS'}</div>
					<nav className="px-6 flex-1 overflow-auto">
						<ul className="grid gap-2">
							{currentNavItems.map(n => {
								const isActive = activeKey === n.key
								return (
								<li key={n.key}>
									<button
										onClick={() => { setActiveKey(n.key); navigate(n.route) }}
										aria-selected={isActive}
										className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors
										${isActive ? "!text-brand/90 border border-brand/90" : "text-text-dim hover:text-text hover:bg-card"}`}>
										<span className="shrink-0">{n.icon}</span>
										<span className="text-[14px]">{n.label}</span>
									</button>
								</li>
								)
							})}
						</ul>
					</nav>
					<footer className="mt-auto px-6 py-4 flex items-center justify-between" role="contentinfo">
						<div className="flex items-center gap-3">
							<div>
								<div className="text-sm text-text">John Kirby</div>
								<div className="text-xs text-text-mute">Senior Manager</div>
							</div>
						</div>
						<DotMenu />
					</footer>
				</div>
			</section>
		</aside>
	)
}

