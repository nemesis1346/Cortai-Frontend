import Card, { CardBody, CardHeader } from '../../../../components/Card'
import { Clock } from 'lucide-react'

export default function EmergencyMetrics() {
	return (
		<Card className="bg-panel">
			<CardHeader
				left={
					<div className="text-text inline-flex items-center gap-2">
						<Clock className="w-5 h-5 text-brand" />
						<span>Emergency Metrics</span>
					</div>
				}
				right={<span className="text-[12px] text-rose-400">Peak at 7:30 am · 74 guests</span>}
			/>
			<CardBody className="flex flex-col gap-2">
				{['6:00','6:30','7:00','7:30','8:00','8:30','9:00','9:30'].map((t, idx) => (
					<div key={t} className="grid grid-cols-[28px_1fr_24px] items-center gap-2">
						<div className="text-[12px] text-text-dim">{t}</div>
						<div className="h-2 rounded-full bg-brand/20 overflow-hidden">
							<div className={`h-full rounded-full ${idx === 3 ? 'bg-danger/80' : 'bg-brand'} `} style={{ width: `${[20,38,72,100,85,64,48,22][idx]}%` }} />
						</div>
						<div className={`text-[12px] justify-self-end ${idx === 3 ? 'text-danger' : 'text-text-dim'}`}>{[5,16,42,74,68,52,38,14][idx]}</div>
					</div>
				))}
			</CardBody>
		</Card>
	)
}
