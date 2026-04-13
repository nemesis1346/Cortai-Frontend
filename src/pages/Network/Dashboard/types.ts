export type SummaryVisual =
	| { type: 'score'; percent: number; footnote: string }
	| {
			type: 'bars'
			left: { value: string; label: string }
			right: { value: string; label: string }
	  }
	| { type: 'ring'; percent: number; maxLabel: string }

export type SummaryMetric = {
	id: string
	label: string
	value: string
	subvalue: string
	tone?: 'teal' | 'green' | 'red' | 'blue'
	visual: SummaryVisual
}

export type StatusChipTheme = 'green' | 'red' | 'teal' | 'purple'

export type StatusChip = {
	id: string
	label: string
	badge: string
	secondaryText?: string
	theme: StatusChipTheme
}

export type AlertItem = {
	id: string
	event: string
	asset: string
	time: string
	severity: 'critical' | 'high' | 'medium'
}

export type ThreatItem = {
	id: string
	type: string
	source: string
	time: string
	status: 'blocked' | 'investigating'
}
