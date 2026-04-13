export type SdWanSummaryMetric = {
	id: string
	label: string
	value: string
	valueTone: 'neon' | 'white'
	link?: boolean
}

export type SdWanCircuit = {
	id: string
	name: string
	subtitle: string
	role: 'primary' | 'backup'
	headline: {
		speed: string
		health: string
		cost: string
		sla: string
	}
	detail: {
		latency: string
		jitter: string
		packetLoss: string
		utilization: string
	}
}

export type SdWanSteeringPolicy = {
	id: string
	policy: string
	apps: string[]
	circuit: string
	strategy: string
}

export type SdWanAppRoute = {
	id: string
	name: string
	circuit: string
	bandwidth: string
	sessions: string
	performanceDots: number
}
