import { Shield } from 'lucide-react'
import { CardBody, CardHeader } from '../../../components/Card'
import { SD_WAN_CYAN, SD_WAN_NEON } from './constants'
import type { SdWanSteeringPolicy } from './types'

type TrafficSteeringPoliciesProps = {
	rows: SdWanSteeringPolicy[]
}

export default function TrafficSteeringPolicies({ rows }: TrafficSteeringPoliciesProps) {
	return (
		<div className="card p-4">
			<CardHeader
				left={(
					<div className="flex items-center gap-2">
						<Shield className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
						<h3 className="card-title !mb-0">Traffic Steering Policies</h3>
					</div>
				)}
			/>
			<CardBody className="pt-0">
				<div className="overflow-x-auto">
					<div className="min-w-[720px]">
						<div className="grid grid-cols-[1.1fr_1fr_0.9fr_0.95fr_0.65fr] gap-3 border-b border-border pb-2 text-[10px] font-semibold uppercase tracking-wide text-text-mute">
							<div>Policy</div>
							<div>Applications</div>
							<div>Preferred Circuit</div>
							<div>Strategy</div>
							<div className="text-right">Status</div>
						</div>
						<div className="divide-y divide-border">
							{rows.map((row) => (
								<div
									key={row.id}
									className="grid grid-cols-[1.1fr_1fr_0.9fr_0.95fr_0.65fr] items-center gap-3 py-3 text-[12px]"
								>
									<div className="font-medium text-text">{row.policy}</div>
									<div className="flex flex-wrap gap-1">
										{row.apps.map((a) => (
											<span key={a} className="rounded-[3px] bg-[color:var(--primitive-semantic-normal-10)] px-2 py-1 text-[11px] text-text">
												{a}
											</span>
										))}
									</div>
									<div className="text-text-dim">{row.circuit}</div>
									<div className="font-medium" style={{ color: SD_WAN_CYAN }}>
										<span className="text-[14px] bg-brand/10 px-2 py-1 text-[11px] font-medium rounded-[3px]">{row.strategy}</span>
									</div>
									<div className="text-right font-semibold" style={{ color: SD_WAN_NEON }}>
										<span className="text-[14px] bg-brand/10 px-2 py-1 text-[11px] font-medium rounded-[3px]">Active</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</CardBody>
		</div>
	)
}
