import type { DeviceInventoryRow } from './types'

export const deviceInventoryTotalLabel = 'Total: 87'

export const deviceInventoryRows: DeviceInventoryRow[] = [
	{
		id: '1',
		device: 'ravi-macbook',
		os: 'macOS 14.5.1',
		sourceIp: '192.168.1.100',
		sourceMac: '00:00:00:00:00:00',
		traffic: '4.2Gb',
		apps: '12',
		status: 'active',
		segment: 'active',
	},
	{
		id: '2',
		device: 'front-desk-pc',
		os: 'Windows',
		sourceIp: '192.168.1.82',
		sourceMac: 'AA:EE:00:00:00:00',
		traffic: '2.8Gb',
		apps: '10',
		status: 'idle',
		segment: 'guest',
	},
	{
		id: '3',
		device: 'lobby-camera-01',
		os: 'IoT',
		sourceIp: '192.168.1.11',
		sourceMac: 'BB:FF:00:00:00:00',
		traffic: '890Mb',
		apps: '3',
		status: 'active',
		segment: 'iot',
	},
	{
		id: '4',
		device: 'pos-terminal-03',
		os: ':Linux',
		sourceIp: '192.168.10.12',
		sourceMac: 'CC:GG:00:DD:EE:00',
		traffic: '1.2Gb',
		apps: '5',
		status: 'idle',
		segment: 'guest',
	},
]
