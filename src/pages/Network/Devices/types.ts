export type DeviceInventoryFilter = 'all' | 'active' | 'iot' | 'guest'

export type DeviceInventorySegment = 'active' | 'iot' | 'guest'

export type DeviceInventoryRow = {
	id: string
	device: string
	os: string
	sourceIp: string
	sourceMac: string
	traffic: string
	apps: string
	status: 'active' | 'idle'
	segment: DeviceInventorySegment
}
