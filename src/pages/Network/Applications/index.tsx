import { AppWindow, ShieldAlert } from 'lucide-react'
import Card, { CardBody, CardHeader } from '../../../components/Card'

const appRows = [
	{ id: 'a1', name: 'MS Teams', traffic: '118 Mbps', risk: 'Low' },
	{ id: 'a2', name: 'Salesforce', traffic: '62 Mbps', risk: 'Low' },
	{ id: 'a3', name: 'Unknown-UDP', traffic: '41 Mbps', risk: 'High' },
	{ id: 'a4', name: 'GitHub', traffic: '34 Mbps', risk: 'Low' },
]

export default function ApplicationsPage() {
	return (
		<main className="h-full overflow-y-auto p-4 md:p-5">
			<div className="grid grid-cols-1 gap-4 2xl:grid-cols-[1.4fr_1fr]">
				<Card>
					<CardHeader
						left={(
							<div className="flex items-center gap-2 text-white">
								<AppWindow className="h-4 w-4 text-[#00D4C0]" />
								<span className="text-sm font-medium">Top Applications</span>
							</div>
						)}
					/>
					<CardBody className="space-y-2">
						{appRows.map((row) => (
							<div key={row.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md border border-border px-3 py-2">
								<span className="text-sm text-white">{row.name}</span>
								<span className="text-xs text-text-dim">{row.traffic}</span>
								<span className={`rounded px-2 py-1 text-[11px] ${row.risk === 'High' ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'}`}>{row.risk}</span>
							</div>
						))}
					</CardBody>
				</Card>
				<Card>
					<CardHeader
						left={(
							<div className="flex items-center gap-2 text-white">
								<ShieldAlert className="h-4 w-4 text-[#00D4C0]" />
								<span className="text-sm font-medium">Policy Actions</span>
							</div>
						)}
					/>
					<CardBody className="space-y-2 text-sm text-text-dim">
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: blocked by app-control policy</div>
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: throttled by QoS rule</div>
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: reviewed by SecOps</div>
					</CardBody>
				</Card>
			</div>
		</main>
	)
}
