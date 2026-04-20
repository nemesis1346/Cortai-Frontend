import { Search, Settings, Bell, BedDouble, AlertTriangle, Star, Plus, Sparkles, Sun, Moon, Monitor } from "lucide-react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { useThemePreference, type ThemePreference } from "../theme/ThemePreferenceProvider"
import { formatAppDate, formatAppTime } from "../utils/datetimeFormat"

export default function Topbar() {
	const [now, setNow] = useState(new Date())
	const { pathname } = useLocation()
	useEffect(() => {
		const id = setInterval(() => setNow(new Date()), 1000)
		return () => clearInterval(id)
	}, [])
	const dateStr = formatAppDate(now)
	const timeStr = formatAppTime(now)
	const pageTitleMap: Record<string, string> = {
		'/': 'Command Center',
		'/hotel': 'Command Center',
		'/hotel/command': 'Command Center',
		'/hotel/guest': 'Guest Services',
		'/hotel/room': 'Room Monitor',
		'/hotel/food': 'Food & Breakfast',
		'/hotel/pool': 'Pool & Spa',
		'/hotel/fitness': 'Fitness Center',
		'/hotel/meetings': 'Meetings & Events',
		'/hotel/incidents': 'Incident Log',
		'/network': 'Security Dashboard',
		'/network/dashboard': 'Security Dashboard',
		'/network/network-status': 'Network Status',
		'/network/infrastructure': 'Infrastructure',
		'/network/wireless': 'Wireless',
		'/network/wan-vpn': 'WAN & VPN',
		'/network/sd-wan': 'SD-WAN',
		'/network/failover-status': 'Failover Status',
		'/network/bandwidth': 'Bandwidth',
		'/network/live-traffic': 'Live Traffic',
		'/network/applications': 'Applications',
		'/network/devices': 'Devices',
		'/network/threats': 'Threats',
	}
	const pageTitle = pageTitleMap[pathname] ?? 'Command Center'
	return (
		<header className="px-5 pt-5 h-14 flex items-center justify-between ">
			<div className="flex items-center gap-3 relative">
				<div className="text-[1.25rem] font-semibold text-text tracking-[0.0125rem]">{pageTitle}</div>
				<div className="text-xs px-2.5 py-1 rounded-md bg-brand/[0.2] text-brand inline-flex items-center gap-1.5">
					<Sparkles className="w-3.5 h-3.5" />
					<span>AI Live / 30s upd</span>
				</div>
			</div>
			<div className="flex items-center gap-6">
				<div className="hidden md:flex items-center gap-6 text-sm text-text">
					<div className="text-text-dim">{dateStr}</div>
					<div className="text-text-dim">{timeStr}</div>
					<div className="flex items-center gap-1">
						<BedDouble className="w-4 h-4 text-brand" />
						<span>56%</span>
					</div>
					<div className="flex items-center gap-1">
						<AlertTriangle className="w-4 h-4 text-danger" />
						<span>4</span>
					</div>
					<div className="flex items-center gap-1">
						<Star className="w-4 h-4 text-warn fill-warn" />
						<span>4.6</span>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<button className="w-8 h-8 rounded-[0.375rem] flex items-center justify-center text-text hover:bg-card">
						<Search className="w-4 h-4" />
					</button>
					<SettingsMenu />
					<button className="relative w-8 h-8 rounded-[0.375rem] flex items-center justify-center text-text hover:bg-card">
						<Bell className="w-4 h-4" />
						<span className="absolute -top-1 -right-1 text-[0.625rem] bg-danger text-[color:var(--primitive-white-shadow-100)] rounded-full px-1.5 py-[1px]">4</span>
					</button>
				</div>
				<OperationsMenu />
			</div>
		</header>
	)
}

function SettingsMenu() {
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const { preference, setPreference } = useThemePreference()

	useEffect(() => {
		function onDocClick(e: MouseEvent) {
			if (!ref.current) return
			if (!ref.current.contains(e.target as Node)) setOpen(false)
		}
		function onEsc(e: KeyboardEvent) {
			if (e.key === 'Escape') setOpen(false)
		}
		document.addEventListener('mousedown', onDocClick)
		document.addEventListener('keydown', onEsc)
		return () => {
			document.removeEventListener('mousedown', onDocClick)
			document.removeEventListener('keydown', onEsc)
		}
	}, [])

	const rows: { id: ThemePreference; label: string; icon: ReactNode }[] = [
		{ id: 'light', label: 'Light', icon: <Sun className="w-4 h-4 shrink-0" /> },
		{ id: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4 shrink-0" /> },
		{ id: 'system', label: 'System', icon: <Monitor className="w-4 h-4 shrink-0" /> },
	]

	return (
		<div className="relative z-50" ref={ref}>
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="w-8 h-8 rounded-[0.375rem] flex items-center justify-center text-text hover:bg-card"
				aria-expanded={open}
				aria-haspopup="menu"
				aria-label="Settings"
			>
				<Settings className="w-4 h-4" />
			</button>
			{open && (
				<div className="absolute right-0 top-full mt-1 w-[12.5rem] rounded-xl bg-card shadow-xl p-2 z-50 border border-border" role="menu">
					<div className="px-2 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-text-mute">Appearance</div>
					<ul className="!m-0 list-none p-0">
						{rows.map((row) => (
							<li key={row.id}>
								<button
									type="button"
									role="menuitem"
									onClick={() => {
										setPreference(row.id)
										setOpen(false)
									}}
									className={`w-full flex items-center gap-2 text-left !text-[0.875rem] p-2.5 rounded-lg ${preference === row.id ? 'bg-panel text-text' : 'text-text-dim hover:bg-panel'}`}
								>
									{row.icon}
									<span>{row.label}</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

function OperationsMenu() {
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {
		function onDocClick(e: MouseEvent) {
			if (!ref.current) return
			if (!ref.current.contains(e.target as Node)) setOpen(false)
		}
		function onEsc(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
		document.addEventListener('mousedown', onDocClick)
		document.addEventListener('keydown', onEsc)
		return () => { document.removeEventListener('mousedown', onDocClick); document.removeEventListener('keydown', onEsc) }
	}, [])

	const items = [
		'Reservations',
		'Check-in',
		'Check-out',
		'Billing / Folio',
		'Guest Profile',
		'Room Status',
		'Services / Add-ons',
		"Request’s Registration",
		'Log Book',
	]

	return (
		<div className="relative z-50" ref={ref}>
			<button onClick={() => setOpen(v => !v)} className="pl-3 pr-4 h-9 hover:bg-brand/70 rounded-md bg-brand/[0.4] text-brand text-sm font-medium inline-flex items-center gap-1">
				<Plus className="w-4 h-4" />
				<span>Operations</span>
			</button>
			{open && (
				<div className="absolute right-0 w-[12.625rem] rounded-xl bg-card shadow-xl p-2 z-50 border border-border">
					<ul className="!m-0">
						{items.map((label) => (
							<li key={label}>
								<button className="w-full text-left !text-[0.875rem] hover:bg-[color:var(--primitive-semantic-normal-10)] p-3 text-text/80 rounded-lg">{label}</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

