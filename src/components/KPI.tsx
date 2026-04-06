import { Progress } from 'antd'

type KPIProps = {
	label: string
	value: string | number
	sub?: string
	percent: number
}

export default function KPI({ label, value, sub, percent }: KPIProps) {
	return (
			<div className="card p-4 relative flex flex-row items-center justify-between gap-2">
				<div>
					<div className="text-xs text-text-dim text-start">{label}</div>
					<div className="text-2xl font-semibold text-text text-start">{value}</div>
					{sub ? <div className="text-xs text-text-mute mt-1 text-start">{sub}</div> : null}
				</div>
				<Progress
					type="circle"
					percent={percent}
					size={42}
					strokeWidth={13}
					strokeLinecap="round"
					strokeColor="#00D4C0"
					railColor="#00D4C033"
					format={() => null}
				/>
			</div>
	)
}

