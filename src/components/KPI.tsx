import { Progress } from 'antd'
import { chartHex } from '../theme/tokens.generated'

type KPIProps = {
	label: string
	value: string | number
	sub?: string
	percent: number
}

export default function KPI({ label, value, sub, percent }: KPIProps) {
	return (
			<div className="card relative flex flex-row items-center justify-between gap-2 p-[1.25rem]">
				<div className="flex flex-col gap-1">
					<div className="text-small text-start text-text-dim">{label}</div>
					<div className="text-large-semibold text-start leading-none text-text">{value}</div>
					{sub ? <div className="text-small text-start text-text-mute">{sub}</div> : null}
				</div>
				<Progress
					type="circle"
					percent={percent}
					size={42}
					strokeWidth={13}
					strokeLinecap="round"
					strokeColor={chartHex.brand}
					railColor={chartHex.brandRail}
					format={() => null}
				/>
			</div>
	)
}

