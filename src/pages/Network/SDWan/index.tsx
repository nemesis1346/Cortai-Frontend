import { Activity, Link2, ShieldCheck } from 'lucide-react'
import { Progress } from 'antd'
import Card, { CardBody, CardHeader } from '../../../components/Card'

export default function SDWanPage() {
	return (
		<main className="h-full overflow-y-auto p-4 md:p-5">
			<div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
				<Card>
					<CardHeader
						left={(
							<div className="flex items-center gap-2 text-white">
								<Link2 className="h-4 w-4 text-[#00D4C0]" />
								<span className="text-sm font-medium">Link Health</span>
							</div>
						)}
					/>
					<CardBody className="space-y-3">
						<div className="flex items-center justify-between text-sm">
							<span className="text-text-dim">Primary WAN</span>
							<span className="text-[#22c55e]">Stable</span>
						</div>
						<Progress percent={82} showInfo={false} strokeColor="#00D4C0" trailColor="#1f2937" />
						<div className="text-xs text-text-mute">Latency 9ms, packet loss 0.2%</div>
					</CardBody>
				</Card>
				<Card>
					<CardHeader
						left={(
							<div className="flex items-center gap-2 text-white">
								<Activity className="h-4 w-4 text-[#00D4C0]" />
								<span className="text-sm font-medium">Path Optimization</span>
							</div>
						)}
					/>
					<CardBody className="space-y-2 text-sm text-text-dim">
						<div className="flex items-center justify-between">
							<span>Auto failover</span>
							<span className="text-white">Enabled</span>
						</div>
						<div className="flex items-center justify-between">
							<span>Dynamic routing</span>
							<span className="text-white">Active</span>
						</div>
						<div className="flex items-center justify-between">
							<span>Policy sync</span>
							<span className="text-white">Synced</span>
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardHeader
						left={(
							<div className="flex items-center gap-2 text-white">
								<ShieldCheck className="h-4 w-4 text-[#00D4C0]" />
								<span className="text-sm font-medium">Edge Security</span>
							</div>
						)}
					/>
					<CardBody className="space-y-2 text-sm text-text-dim">
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: secure web gateway status</div>
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: TLS inspection profile</div>
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: branch compliance summary</div>
					</CardBody>
				</Card>
			</div>
		</main>
	)
}
