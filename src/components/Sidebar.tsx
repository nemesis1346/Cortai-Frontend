import type { CSSProperties, ReactElement } from 'react'
import avatar from '../assets/avatar.jpg'
import guestCenterIconUrl from '../assets/guest-center.svg?url'
import roomMonitorIconUrl from '../assets/room-monitor.svg?url'
import poolIconUrl from '../assets/pool.svg?url'
import coffeeIconUrl from '../assets/coffee.svg?url'
import calendarEventIconUrl from '../assets/calendar-event.svg?url'
import incidentLogIconUrl from '../assets/incident-log.svg?url'
import hotelBrandDark from '../assets/hotel-brand-dark.svg?url'
import hotelBrandLight from '../assets/hotel-brand-light.svg?url'
import { useThemePreference } from '../theme/ThemePreferenceProvider'
import { LayoutGrid } from 'lucide-react'
type NavItem = {
	key: string
	label: string
	icon: ReactElement
	route: string
}

import { ChevronLeft, MoreHorizontal } from 'lucide-react'

const LeftRailIcon = ({ children, active, onClick }: { children: ReactElement; active?: boolean; onClick?: () => void }) => (
	<button
		type="button"
		onClick={onClick}
		className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
			${active ? "border border-brand/90 !text-brand/90" : "text-text/80 hover:text-text hover:bg-[color:var(--primitive-white-shadow-10)]"}`}
	>
		{children}
	</button>
)

const navMaskStyle = (src: string): CSSProperties => ({
	mask: `url("${src}") center / contain no-repeat`,
	WebkitMask: `url("${src}") center / contain no-repeat`,
})

const NavMaskIcon = ({ src }: { src: string }) => (
	<span aria-hidden className="inline-block h-5 w-5 shrink-0 bg-current" style={navMaskStyle(src)} />
)

import { Sparkles, Dumbbell, FilePlus2, Users2, Globe, ShieldCheck, MonitorSmartphone, Settings, Building2, AppWindow, Gauge } from "lucide-react"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const hotelNavItems: NavItem[] = [
	{ key: "command", label: "Command Center", icon: <LayoutGrid className="h-5 w-5" />, route: "/hotel/command" },
	{ key: "guest", label: "Guest Services", icon: <NavMaskIcon src={guestCenterIconUrl} />, route: "/hotel/guest" },
	{ key: "room", label: "Room Monitor", icon: <NavMaskIcon src={roomMonitorIconUrl} />, route: "/hotel/room" },
	{ key: "food", label: "Food & Breakfast", icon: <NavMaskIcon src={coffeeIconUrl} />, route: "/hotel/food" },
	{ key: "pool", label: "Pool & Spa", icon: <NavMaskIcon src={poolIconUrl} />, route: "/hotel/pool" },
	{ key: "fitness", label: "Fitness Center", icon: <Dumbbell className="h-5 w-5" />, route: "/hotel/fitness" },
	{ key: "meetings", label: "Meetings & Events", icon: <NavMaskIcon src={calendarEventIconUrl} />, route: "/hotel/meetings" },
	{ key: "incidents", label: "Incident Log", icon: <NavMaskIcon src={incidentLogIconUrl} />, route: "/hotel/incidents" }
]

const securityNavItems: NavItem[] = [
	{ key: "security-dashboard", label: "Dashboard", icon: <Gauge className="h-5 w-5" />, route: "/network/dashboard" },
	{ key: "sd-wan", label: "SD-WAN", icon: <Globe className="h-5 w-5" />, route: "/network/sd-wan" },
	{ key: "applications", label: "Applications", icon: <AppWindow className="h-5 w-5" />, route: "/network/applications" },
	{ key: "devices", label: "Devices", icon: <MonitorSmartphone className="h-5 w-5" />, route: "/network/devices" },
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
		<aside className="h-full flex flex-col relative border-r border-border bg-card">
			{/* Header */}
			<header className="h-[72px] border-b border-border flex items-center" role="banner" aria-label="Sidebar header">
				<div className="w-[72px] flex items-center justify-center">
					<img
						src={effective === 'dark' ? hotelBrandDark : hotelBrandLight}
						alt=""
						className="h-7 w-7 shrink-0"
					/>
				</div>
				<div className={`flex flex-col justify-center flex-1 bg-card/10 transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden px-0' : 'opacity-100 px-6'}`}>
					<div className="text-brand/90 text-lg font-semibold tracking-wide">CORTAI</div>
					<div className="text-xs text-text-mute mt-0.5">Unified Hotel Platform</div>
				</div>
				<div className={`transition-all duration-500 ease-out ${collapsed ? 'w-0 overflow-hidden opacity-0' : 'px-4 opacity-100'}`}>
					<button
						type="button"
						onClick={onToggleCollapsed}
						aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
						className="cortai-text-btn cortai-text-btn--ghost !h-9 !min-h-0 !w-9 !max-w-none !rounded-lg !border-0 !px-0 !py-0"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>
				</div>
			</header>

			{/* Full-height divider to align header and content */}
			<div className="pointer-events-none absolute top-0 bottom-0 left-[72px] border-r border-border"></div>

			{/* Content */}
			<section className="flex-1 flex" role="navigation" aria-label="Sidebar navigation">
				{/* Left rail */}
				<div className="flex w-[72px] flex-col items-center gap-3 bg-[color:var(--primitive-semantic-normal-900)] pt-3">
					<LeftRailIcon active={isHotelOps && !isSecurity} onClick={handleHotelRailClick}>
						<Building2 className="h-6 w-6 " />
					</LeftRailIcon>
					<LeftRailIcon>
						<Sparkles className="h-6 w-6" />
					</LeftRailIcon>
					<LeftRailIcon>
						<FilePlus2 className="h-6 w-6" />
					</LeftRailIcon>
					<LeftRailIcon>
						<Users2 className="h-6 w-6" />
					</LeftRailIcon>
					<LeftRailIcon>
						<Globe className="h-6 w-6" />
					</LeftRailIcon>
					<LeftRailIcon active={isSecurity && sectionPanelOpen} onClick={handleSecurityRailClick}>
						<ShieldCheck className="h-6 w-6" />
					</LeftRailIcon>
					<LeftRailIcon>
						<Settings className="h-6 w-6" />
					</LeftRailIcon>
					<a href="#" className="mt-auto mb-4 block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/70">
						<img
							src={avatar}
							alt="User avatar"
							className="w-[36px] h-[36px] rounded-full object-cover bg-border"
						/>
					</a>
				</div>

				{/* Main body */}
				<div className={`flex flex-col overflow-hidden border-l border-border/80 bg-card/10 transition-[flex-basis,opacity,min-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${collapsed || !sectionPanelOpen ? 'pointer-events-none w-0 min-w-0 flex-[0] opacity-0' : 'min-w-0 flex-1 opacity-100'}`}>
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
										${isActive ? "!text-brand/90 border border-brand/90 bg-[color:var(--primitive-brand-900)]/20" : "text-text-dim/90 hover:text-text hover:bg-[color:var(--primitive-white-shadow-10)] border border-transparent hover:border-border/70"}`}>
										<span className="shrink-0">{n.icon}</span>
										<span className="text-[14px]">{n.label}</span>
									</button>
								</li>
								)
							})}
						</ul>
					</nav>
					<footer className="mt-auto flex items-center justify-between px-6 py-4" role="contentinfo">
						<div className="flex items-center gap-3">
							<div>
								<div className="text-sm text-text">John Kirby</div>
								<div className="text-xs text-text-mute">Senior Manager</div>
							</div>
						</div>
						<button type="button" className="cortai-text-btn cortai-text-btn--ghost !min-h-9 !px-2" aria-label="More options">
							<MoreHorizontal className="h-5 w-5" />
						</button>
					</footer>
				</div>
			</section>
		</aside>
	)
}

