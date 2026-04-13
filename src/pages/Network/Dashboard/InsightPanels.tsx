import type { ReactNode } from 'react'
import { AlertTriangle, Network, ShieldAlert, TrendingUp, UserRound } from 'lucide-react'
import { Progress } from 'antd'
import { CardBody, CardHeader } from '../../../components/Card'

const rail = '#1f2937'

function PanelShell({
	icon,
	title,
	badge,
	badgeClassName,
	children,
}: {
	icon: ReactNode
	title: string
	badge: string
	badgeClassName: string
	children: ReactNode
}) {
	return (
		<div className="card flex h-full flex-col p-4">
			<CardHeader
				left={(
					<div className="flex items-center gap-2">
						<span className="text-[#00D4C0]">{icon}</span>
						<h3 className="card-title !mb-0 text-[15px] font-semibold">{title}</h3>
					</div>
				)}
				right={<span className={`rounded-[3px] px-2 py-1 text-[11px] font-medium ${badgeClassName}`}>{badge}</span>}
			/>
			<CardBody className="flex min-h-0 flex-1 flex-col pt-1">{children}</CardBody>
		</div>
	)
}

function Row({ label, value, valueClass }: { label: string; value: string; valueClass?: string }) {
	return (
		<div className="flex items-center justify-between border-b border-white/[0.06] py-2.5 last:border-b-0">
			<span className="text-[12px] text-white/50">{label}</span>
			<span className={`text-[13px] font-medium tabular-nums ${valueClass ?? 'text-white/80'}`}>{value}</span>
		</div>
	)
}

export default function InsightPanels() {
	return (
		<section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
			<PanelShell
				icon={<ShieldAlert className="h-5 w-5 text-[#00D4C0]" strokeWidth={1.75} />}
				title="Security Overview"
				badge="Protected"
				badgeClassName="bg-[#04D4001A] text-[#04D400]"
			>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
					<div className="flex shrink-0 items-center  gap-2 sm:gap-4">
						<Progress
							type="circle"
							percent={92}
							size={42}
							strokeWidth={14}
							strokeLinecap="round"
							strokeColor="#22c55e"
							trailColor="rgba(34, 197, 94, 0.18)"
							format={() => null}
						/>
						<div className="flex flex-col items-start gap-2">
							<span className="text-[18px] font-bold leading-none tracking-tight text-[#22c55e]">92</span>
							<span className="text-[14px] text-white/45">Score</span>
						</div>
					</div>
					<div className="min-w-0 flex-1 border-l border-white/10 pl-6">
						<Row label="Threats Blocked" value="4,752" />
						<Row label="Anomalies" value="3" />
						<Row label="DLP Events" value="12" />
						<Row label="Endpoints Compliant" value="6/8" />
					</div>
				</div>
			</PanelShell>

			<PanelShell
				icon={<Network className="h-5 w-5 text-[#00D4C0]" strokeWidth={1.75} />}
				title="Network Status"
				badge="Degraded"
				badgeClassName="bg-[#2d2818] text-[#c4a574]"
			>
				<div className="mb-1 pb-4">
					<div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
						<div className="flex flex-row items-center justify-between gap-2 h-12 min-w-[15.5rem]" aria-hidden>
							<svg className="h-full w-full" viewBox="0 0 120 44" preserveAspectRatio="none">
								<defs>
									<linearGradient id="network-spark-fill" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#00D4C0" stopOpacity="0.35" />
										<stop offset="100%" stopColor="#00D4C0" stopOpacity="0" />
									</linearGradient>
								</defs>
								<path
									d="M0 36 L20 28 L40 32 L60 16 L80 22 L100 10 L120 14 L120 44 L0 44 Z"
									fill="url(#network-spark-fill)"
								/>
								<path
									d="M0 36 L20 28 L40 32 L60 16 L80 22 L100 10 L120 14"
									fill="none"
									stroke="#00D4C0"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<div className="flex flex-col shrink-0 items-baseline gap-1">
								<span className="text-[18px] font-semibold leading-none tracking-tight text-[#00D4C0]">247</span>
								<span className="text-[14px] font-medium text-[#00D4C0]/75">Mbps</span>
							</div>
						</div>
						<div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
							<div className="flex flex-col items-start gap-1">
								<span className="text-white/90 text-[18px]">9/10</span>
								<span className="text-white/45 text-[14px]"> Devices Online</span>
							</div>
							<div className="flex flex-col items-start gap-1">
								<span className="text-white/90 text-[18px]">5/6</span>
								<span className="text-white/45 text-[14px]"> VPN Tunnels</span>
							</div>
						</div>
					</div>
				</div>
				<div className="divide-y divide-white/[0.06]">
					<div className="flex items-center justify-between gap-3 py-3">
						<div className="flex min-w-0 items-center gap-2.5">
							<TrendingUp className="h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2} />
							<span className="text-[14px] text-white">Bell Fibre</span>
						</div>
						<span className="shrink-0 text-[14px] font-semibold tabular-nums text-emerald-400">12ms</span>
					</div>
					<div className="flex items-center justify-between gap-3 py-3">
						<div className="flex min-w-0 items-center gap-2.5">
							<span className="h-2.5 w-2.5 shrink-0 rounded-full bg-neutral-400" />
							<span className="text-[14px] text-white">Rogers Business</span>
						</div>
						<span className="shrink-0 text-[14px] font-medium tabular-nums text-white/80">11ms</span>
					</div>
					<div className="flex items-center justify-between gap-3 py-3">
						<div className="flex min-w-0 items-center gap-2.5">
							<AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" strokeWidth={2} />
							<span className="text-[14px] text-white">Partner DataCorp</span>
						</div>
						<span className="shrink-0 text-[14px] font-semibold tabular-nums text-rose-400">Down 35m</span>
					</div>
				</div>
			</PanelShell>

			<PanelShell
				icon={<UserRound className="h-5 w-5" strokeWidth={1.75} />}
				title="User Activity"
				badge="3 remove"
				badgeClassName="bg-white/[0.12] text-white/50"
			>
				<div className="mb-4 grid grid-cols-2 gap-4">
					<div className="flex items-center gap-3">
						<Progress
							type="circle"
							percent={100}
							size={42}
							strokeWidth={12}
							strokeLinecap="round"
							strokeColor="#00D4C0"
							trailColor={rail}
							format={() => null}
						/>
						<div className="flex flex-col items-start gap-2">
							<span className="text-[18px] font-bold leading-none tracking-tight text-[#00D4C0]">8</span>
							<div className="text-[14px] text-white/50 font-medium">Active Users</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<Progress
							type="circle"
							percent={75}
							size={42}
							strokeWidth={12}
							strokeLinecap="round"
							strokeColor="#00D4C0"
							trailColor={rail}
							format={() => null}
						/>
						<div className="flex flex-col items-start gap-2">
							<span className="text-[18px] font-bold leading-none tracking-tight text-[#00D4C0]">13</span>
							<div className="text-[14px] text-white/50 font-medium">Managed Users</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4 sm:items-center sm:justify-between">
					<div className="text-[12px] flex flex-col gap-2 border-r border-white/10 pr-6">
						<div className="flex justify-between gap-4 py-2 border-b border-white/10">
							<span className="text-text-dim">Total Sessions</span>
							<span className="font-medium text-white">36</span>
						</div>
						<div className="flex justify-between gap-4 py-2 border-b border-white/10">
							<span className="text-text-dim">Risky Connections</span>
							<span className="font-medium text-amber-400">7</span>
						</div>
						<div className="flex justify-between gap-4 py-2 border-b border-white/10">
							<span className="text-text-dim">ZTNA Sessions</span>
							<span className="font-medium text-[#00D4C0]">185</span>
						</div>
					</div>
					<div className="flex flex-col items-start justify-start gap-2">
						<div className="mb-2 w-full text-right text-[11px] text-text-dim sm:text-left">Recently Active</div>
						<div className="flex items-start justify-end drop-shadow-md">
							{['JS', 'MD', 'SF', 'ED', 'WF', 'LW'].map((initials, i) => (
								<div
									key={initials}
									className={`relative flex h-[36px] w-[36px] items-center justify-center rounded-full shadow-[#00000026] border border-[#FFFFFF08] bg-[#134e4a] text-[12px] font-semibold uppercase tracking-wide text-white ${i > 0 ? '-ml-1.5' : ''}`}
									style={{ zIndex: i + 1 }}
								>
									{initials}
								</div>
							))}
							<div
								className="relative z-[10] -ml-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-[10px] font-semibold text-neutral-900 shadow-sm"
							>
								+56
							</div>
						</div>
					</div>
				</div>
			</PanelShell>
		</section>
	)
}
