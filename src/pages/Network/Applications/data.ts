import { chartHex, primitive } from '../../../theme/tokens.generated'
import type { BandwidthRow, CategorySlice, DetectedAppRow } from './types'

export const bandwidthTotalLabel = 'Total: 14.2Gb'

export const bandwidthRows: BandwidthRow[] = [
	{ id: 'm365', name: 'Microsoft 365', gb: 4.2, color: primitive.AccentBlue },
	{ id: 'meet', name: 'Google Meet', gb: 2.8, color: chartHex.brand },
	{ id: 'yt', name: 'YouTube', gb: 2.1, color: primitive.SemanticDanger },
	{ id: 'slack', name: 'Slack', gb: 1.5, color: primitive.AccentBlue },
	{ id: 's3', name: 'AWS S3', gb: 1.2, color: primitive.AccentOrange },
	{ id: 'zoom', name: 'Zoom', gb: 0.9, color: chartHex.brand },
	{ id: 'dbx', name: 'Dropbox', gb: 0.7, color: primitive.AccentOrange },
	{ id: 'nf', name: 'Netflix', gb: 0.5, color: primitive.SemanticDanger },
	{ id: 'other', name: 'Others', gb: 0.3, color: primitive.Neutral500 },
]

export const categorySlices: CategorySlice[] = [
	{ id: 'vc', label: 'Video Conf', pct: 24, color: chartHex.brand },
	{ id: 'cloud', label: 'Cloud Storage', pct: 12, color: primitive.AccentOrange },
	{ id: 'str', label: 'Streaming', pct: 16, color: primitive.SemanticDanger },
	{ id: 'oth', label: 'Other', pct: 6, color: primitive.Neutral500 },
	{ id: 'bus', label: 'Business', pct: 42, color: primitive.AccentBlue },
]

export const detectedAppsTotalLabel = 'Total: 54 apps'

export const detectedAppRows: DetectedAppRow[] = [
	{
		id: 'd1',
		rank: 1,
		name: 'Microsoft 365',
		category: 'business',
		bandwidthLabel: '4.2Gb',
		trend: [1.2, 1.8, 2.1, 1.9, 2.4, 2.8, 2.5, 2.2, 1.8, 2.0, 2.3, 2.1, 2.4, 2.6, 2.3, 2.1],
	},
	{
		id: 'd2',
		rank: 2,
		name: 'Google Meet',
		category: 'video',
		bandwidthLabel: '2.8Gb',
		trend: [0.8, 1.1, 1.4, 1.2, 1.5, 1.8, 1.6, 1.4, 1.2, 1.0, 1.3, 1.5, 1.4, 1.6, 1.5, 1.4],
	},
	{
		id: 'd3',
		rank: 3,
		name: 'YouTube',
		category: 'streaming',
		bandwidthLabel: '2.1Gb',
		trend: [1.5, 1.8, 2.0, 1.7, 1.9, 2.2, 2.0, 1.8, 1.6, 1.7, 1.9, 2.1, 2.0, 1.8, 1.9, 2.0],
	},
	{
		id: 'd4',
		rank: 4,
		name: 'Slack',
		category: 'business',
		bandwidthLabel: '1.5Gb',
		trend: [0.6, 0.7, 0.8, 0.75, 0.9, 1.0, 0.95, 0.85, 0.8, 0.82, 0.88, 0.9, 0.87, 0.85, 0.9, 0.88],
	},
	{
		id: 'd5',
		rank: 5,
		name: 'AWS S3',
		category: 'cloud',
		bandwidthLabel: '1.2Gb',
		trend: [0.5, 0.55, 0.6, 0.58, 0.62, 0.65, 0.63, 0.6, 0.58, 0.6, 0.62, 0.64, 0.63, 0.61, 0.62, 0.6],
	},
	{
		id: 'd6',
		rank: 6,
		name: 'Zoom',
		category: 'video',
		bandwidthLabel: '0.9Gb',
		trend: [0.4, 0.5, 0.55, 0.52, 0.58, 0.62, 0.6, 0.55, 0.5, 0.52, 0.55, 0.58, 0.56, 0.54, 0.55, 0.53],
	},
	{
		id: 'd7',
		rank: 7,
		name: 'Dropbox',
		category: 'cloud',
		bandwidthLabel: '0.7Gb',
		trend: [0.35, 0.4, 0.42, 0.4, 0.43, 0.45, 0.44, 0.42, 0.4, 0.41, 0.42, 0.43, 0.42, 0.41, 0.42, 0.41],
	},
	{
		id: 'd8',
		rank: 8,
		name: 'Netflix',
		category: 'streaming',
		bandwidthLabel: '0.5Gb',
		trend: [0.3, 0.35, 0.4, 0.38, 0.42, 0.45, 0.43, 0.4, 0.38, 0.39, 0.41, 0.42, 0.41, 0.4, 0.41, 0.4],
	},
]
