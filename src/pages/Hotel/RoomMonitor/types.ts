import type { ReactElement } from 'react'

export type RoomState = 'cleaned' | 'cleaning' | 'occupied' | 'inspected' | 'maintenance' | 'vip' | 'alert' | 'dnd'
export type Room = { no: number; temp: number; state?: RoomState }
export type Floor = { level: number; occupied: number; clean: number; dirty: number; rooms: Room[] }
export type SummaryItem = { label: string; value: number; color: string }
export type StateMeta = { label: string; color: string; icon?: ReactElement }

