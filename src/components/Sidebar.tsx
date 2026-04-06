import type { ReactElement } from 'react'
import avatar from '../assets/avatar.jpg'
type NavItem = {
	key: string
	label: string
	icon: ReactElement
	active?: boolean
}

const LeftRailIcon = ({ children, active, onClick }: { children: ReactElement; active?: boolean; onClick?: () => void }) => (
	<button
		type="button"
		onClick={onClick}
		className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
			${active ? "border border-[#00D4C0E5] text-[#00D4C0E5]" : "text-white"}`}
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

import { LayoutGrid, Sparkles, Hospital, Utensils, Waves, Dumbbell, CalendarDays, ShieldAlert, FilePlus2, Users2, Handbag, ShieldCheck, Settings, Building2 } from "lucide-react"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navItems: NavItem[] = [
	{ key: "command", label: "Command Center", icon: <LayoutGrid className="w-5 h-5" /> },
	{ key: "guest", label: "Guest Services", icon: <Sparkles className="w-5 h-5" /> },
	{ key: "room", label: "Room Monitor", icon: <Hospital className="w-5 h-5" /> },
	{ key: "food", label: "Food & Breakfast", icon: <Utensils className="w-5 h-5" /> },
	{ key: "pool", label: "Pool & Spa", icon: <Waves className="w-5 h-5" /> },
	{ key: "fitness", label: "Fitness Center", icon: <Dumbbell className="w-5 h-5" /> },
	{ key: "meetings", label: "Meetings & Events", icon: <CalendarDays className="w-5 h-5" /> },
	{ key: "incidents", label: "Incident Log", icon: <ShieldAlert className="w-5 h-5" /> }
]

type SidebarProps = { collapsed?: boolean; onToggleCollapsed?: () => void }

export default function Sidebar({ collapsed = false, onToggleCollapsed }: SidebarProps) {
	const [activeKey, setActiveKey] = useState<string>("command")
	const hotelOpsKeys = ["command","guest","room","food","pool","fitness","meetings","incidents"]
	const isHotelOps = hotelOpsKeys.includes(activeKey)
	const navigate = useNavigate()
	return (
		<aside className="h-full flex flex-col relative border-r border-border">
			{/* Header */}
			<header className="h-[72px] border-b border-border flex items-center" role="banner" aria-label="Sidebar header">
				<div className="w-[72px] flex items-center justify-center">
					<img src="/icons/hotel.svg" alt="" className="w-7 h-7 opacity-90" />
				</div>
				<div className={`flex flex-col justify-center flex-1 transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden px-0' : 'opacity-100 px-6'}`}>
					<div className="text-[#00D4C0E5] text-lg font-semibold tracking-wide">CORTAI</div>
					<div className="text-xs text-text-mute mt-0.5">Unified Hotel Platform</div>
				</div>
				<div className={`transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 px-4'}`}>
					<button
						type="button"
						onClick={onToggleCollapsed}
						aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
						className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-white hover:bg-card"
					>
						<img src="/icons/sidebar-toggle.svg" alt="" className="w-4 h-4" />
					</button>
				</div>
			</header>

			{/* Full-height divider to align header and content */}
			<div className="pointer-events-none absolute top-0 bottom-0 left-[72px] border-r border-border"></div>

			{/* Content */}
			<section className="flex-1 flex" role="navigation" aria-label="Sidebar navigation">
				{/* Left rail */}
				<div className="w-[72px] bg-[#0b1013] flex flex-col items-center gap-3 pt-3">
					<LeftRailIcon active={isHotelOps} onClick={() => { setActiveKey("command"); onToggleCollapsed && onToggleCollapsed() }}>
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
						<Handbag className="w-5 h-5" />
					</LeftRailIcon>
					<LeftRailIcon>
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
				<div className={`bg-[#0e1418] flex flex-col transition-all duration-300 ${collapsed ? 'w-0 opacity-0 overflow-hidden pointer-events-none' : 'flex-1 opacity-100'}`}>
					<div className="px-6 py-5 text-[11px] tracking-wider text-text-mute">HOTEL OPERATIONS</div>
					<nav className="px-6 flex-1 overflow-auto">
						<ul className="grid gap-2">
							{navItems.map(n => {
								const isActive = activeKey === n.key
								return (
								<li key={n.key}>
									<button
										onClick={() => { setActiveKey(n.key); navigate(`/${n.key}`) }}
										aria-selected={isActive}
										className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors
										${isActive ? "text-[#00D4C0E5] border border-[#00D4C0E5]" : "text-text-dim hover:text-text hover:bg-card"}`}>
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

