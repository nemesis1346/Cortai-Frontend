import { Laptop2, Router } from 'lucide-react'
import { Progress } from 'antd'
import Card, { CardBody, CardHeader } from '../../../components/Card'

export default function DevicesPage() {
	return (
		<main className="h-full overflow-y-auto p-4 md:p-5">
			<div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
				<Card>
					<CardHeader
						left={(
							<div className="flex items-center gap-2 text-white">
								<Router className="h-4 w-4 text-[#00D4C0]" />
								<span className="text-sm font-medium">Managed Network Devices</span>
							</div>
						)}
					/>
					<CardBody className="space-y-4">
						<div>
							<div className="mb-1 flex items-center justify-between text-xs text-text-dim">
								<span>Switches</span>
								<span>34 / 38 healthy</span>
							</div>
							<Progress percent={89} showInfo={false} strokeColor="#00D4C0" trailColor="#1f2937" />
						</div>
						<div>
							<div className="mb-1 flex items-center justify-between text-xs text-text-dim">
								<span>Access Points</span>
								<span>122 / 130 healthy</span>
							</div>
							<Progress percent={94} showInfo={false} strokeColor="#00D4C0" trailColor="#1f2937" />
						</div>
						<div>
							<div className="mb-1 flex items-center justify-between text-xs text-text-dim">
								<span>Gateways</span>
								<span>11 / 12 healthy</span>
							</div>
							<Progress percent={91} showInfo={false} strokeColor="#00D4C0" trailColor="#1f2937" />
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardHeader
						left={(
							<div className="flex items-center gap-2 text-white">
								<Laptop2 className="h-4 w-4 text-[#00D4C0]" />
								<span className="text-sm font-medium">Endpoints</span>
							</div>
						)}
					/>
					<CardBody className="space-y-2 text-sm text-text-dim">
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: unmanaged endpoint list</div>
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: inactive endpoint status</div>
						<div className="rounded-md border border-border px-3 py-2">PLACEHOLDER: pending isolation actions</div>
					</CardBody>
				</Card>
			</div>
		</main>
	)
}
