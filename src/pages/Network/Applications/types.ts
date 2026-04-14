export type TimeRangeId = '1h' | '6h' | '24h' | '7d' | '1m'

export type BandwidthRow = {
	id: string
	name: string
	gb: number
	color: string
}

export type CategorySlice = {
	id: string
	label: string
	pct: number
	color: string
}

export type AppCategory = 'business' | 'video' | 'streaming' | 'cloud'

export type DetectedAppRow = {
	id: string
	rank: number
	name: string
	category: AppCategory
	bandwidthLabel: string
	trend: number[]
}
