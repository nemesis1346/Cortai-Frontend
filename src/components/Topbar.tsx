import { Search, Settings, Bell, BedDouble, AlertTriangle, Star, Plus, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Topbar() {
	const [now, setNow] = useState(new Date())
	const { pathname } = useLocation()
	useEffect(() => {
		const id = setInterval(() => setNow(new Date()), 1000)
		return () => clearInterval(id)
	}, [])
	const dateStr = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' }).format(now)
	const timeStr = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit' }).format(now)
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
				<div className="text-xl font-semibold text-white tracking-[0.2px]">{pageTitle}</div>
				<div className="text-xs px-2.5 py-1 rounded-md border border-[#0e2e2a] bg-[#0b2a26] text-[#00d4c0] inline-flex items-center gap-1.5">
					<Sparkles className="w-3.5 h-3.5" />
					<span>AI Live / 30s upd</span>
				</div>
			</div>
			<div className="flex items-center gap-6">
				<div className="hidden md:flex items-center gap-6 text-sm text-white">
					<div className="text-text-dim">{dateStr}</div>
					<div className="text-text-dim">{timeStr}</div>
					<div className="flex items-center gap-1">
						<BedDouble className="w-4 h-4 text-[#00d4c0]" />
						<span>56%</span>
					</div>
					<div className="flex items-center gap-1">
						<AlertTriangle className="w-4 h-4 text-[#f87171]" />
						<span>4</span>
					</div>
					<div className="flex items-center gap-1">
						<Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
						<span>4.6</span>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-3 ">
				<button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-white/80 hover:bg-card">
					<Search className="w-4 h-4" />
				</button>
				<button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-white/80 hover:bg-card">
					<Settings className="w-4 h-4" />
				</button>
				<button className="relative w-8 h-8 rounded-full border border-border flex items-center justify-center text-white/80 hover:bg-card">
					<Bell className="w-4 h-4" />
					<span className="absolute -top-1 -right-1 text-[10px] bg-[#ef4444] text-white rounded-full px-1.5 py-[1px]">4</span>
				</button>
				<OperationsMenu />
			</div>
		</header>
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
			<button onClick={() => setOpen(v => !v)} className="ml-2 px-3 h-9 rounded-md border border-[#0e2e2a] bg-[#0b2a26] text-[#00d4c0] text-sm font-medium inline-flex items-center gap-1">
				<Plus className="w-4 h-4" />
				<span>Operations</span>
			</button>
			{open && (
				<div className="absolute right-0 w-[202px] rounded-xl bg-[#1b2328] shadow-xl p-2 z-50 border border-[1px] border-[#252B2E]">
					<ul className="!m-0">
						{items.map((label) => (
							<li key={label}>
								<button className="w-full text-left !text-[14px] p-3 text-white/40 hover:bg-card rounded-lg">{label}</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

