import { TowelRack } from 'lucide-react'
import { poolPageMock } from '../../data/mock'

function DirtyDonut({ deck, chairs }: { deck: number; chairs: number }) {
	const t = deck + chairs
	const deckDeg = t > 0 ? (deck / t) * 360 : 0
	return (
		<div className="relative h-[50px] w-[50px] shrink-0">
			<div
				className="absolute inset-0 rounded-full"
				style={{
					background: `conic-gradient(from -90deg, #00D4C0 0deg ${deckDeg}deg, #f59e0b ${deckDeg}deg 360deg)`,
				}}
			/>
			<div className="absolute inset-[22%] rounded-full border border-white/[0.06] bg-[#141819]" />
		</div>
	)
}

export default function TowelPanel() {
	const { towels } = poolPageMock
	const d = towels.dirty
	const c = towels.clean
	return (
		<div className="rounded-2xl border border-white/10 bg-[#FFFFFF08] p-4">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex items-center gap-2 text-[18px] font-medium text-white">
					<TowelRack className="h-5 w-5 shrink-0 text-[#00d4c0]" strokeWidth={1.75} />
					<span>Towel Tracking</span>
				</div>
				<span className="text-[12px] text-white/45 sm:text-right">Scanned {towels.scanned}</span>
			</div>
			<div className="mt-4 grid grid-cols-2 gap-3">
				<div className="rounded-xl border border-[#b45309]/45 bg-[#EDB1320D] p-4">
					<div className="text-[13px] font-medium text-[#f59e0b]">Dirty Towels Detected</div>
					<div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
						<div>
							<div className="text-[13px] font-bold leading-none tracking-tight text-white">{d.total}</div>
							<div className="mt-2 text-[13px] text-white/45">Total</div>
						</div>
						<div className="flex flex-row items-center gap-5">
							<div className="flex flex-row items-center gap-2 text-[12px]">
								<div className="flex flex-col items-end gap-2">
									<span className="text-[13px] font-semibold text-[#00D4C0]">{d.onDeck}</span>
									<span className="text-white/45">On deck</span>
								</div>
								<DirtyDonut deck={d.onDeck} chairs={d.onChairs} />
								<div className="flex flex-col items-start gap-2">
									<span className="text-[13px] font-semibold text-[#f59e0b]">{d.onChairs}</span>
									<span className="text-white/45">On chairs</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-xl bg-[#1a1f24] p-4">
					<div className="text-[13px] font-medium text-white">Clean Supply</div>
					<div className="mt-5 text-[14px] font-bold leading-none tracking-tight text-[#22c55e]">
						{c.count}/{c.capacity}
					</div>
					<div className="mt-5 text-[12px] text-white/45">{c.distributedToday} distributed today</div>
				</div>
			</div>
		</div>
	)
}
