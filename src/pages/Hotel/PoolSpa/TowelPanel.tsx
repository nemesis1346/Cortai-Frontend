import towelRackIconUrl from '../../../assets/towel-rack.svg?url'
import { Progress } from 'antd'
import { poolPageMock } from '../../../data/mock'
import { chartHex, primitive } from '../../../theme/tokens.generated'

function DirtyDonut({ deck, chairs }: { deck: number; chairs: number }) {
	const t = deck + chairs
	const deckPct = t > 0 ? Math.round((deck / t) * 100) : 0
	return (
		<div className="relative h-[50px] w-[50px] shrink-0">
			<Progress
				type="circle"
				percent={deckPct}
				size={50}
				strokeWidth={16}
				strokeLinecap="round"
				strokeColor={chartHex.brand}
				railColor={chartHex.warn}
				format={() => ''}
			/>
			<div className="pointer-events-none absolute inset-[0.55rem] rounded-full bg-card" />
		</div>
	)
}

export default function TowelPanel() {
	const { towels } = poolPageMock
	const d = towels.dirty
	const c = towels.clean
	return (
		<div className="rounded-2xl border border-border bg-panel p-4">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex items-center gap-2 text-[18px] font-medium text-text">
					<img src={towelRackIconUrl} alt="" className="h-5 w-5 shrink-0" />
					<span>Towel Tracking</span>
				</div>
				<span className="text-[12px] text-text-dim sm:text-right">Scanned {towels.scanned}</span>
			</div>
			<div className="mt-4 grid grid-cols-2 gap-3">
				<div
					className="rounded-xl border border-border p-4"
					style={{ borderColor: primitive.AccentOrange60, background: primitive.AccentYellow5 }}
				>
					<div className="text-[13px] font-medium text-warn">Dirty Towels Detected</div>
					<div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
						<div>
							<div className="text-[13px] font-bold leading-none tracking-tight text-text">{d.total}</div>
							<div className="mt-2 text-[13px] text-text-dim">Total</div>
						</div>
						<div className="flex flex-row items-center gap-5">
							<div className="flex flex-row items-center gap-2 text-[12px]">
								<div className="flex flex-col items-end gap-2">
									<span className="text-[13px] font-semibold text-brand">{d.onDeck}</span>
									<span className="text-text-dim">On deck</span>
								</div>
								<DirtyDonut deck={d.onDeck} chairs={d.onChairs} />
								<div className="flex flex-col items-start gap-2">
									<span className="text-[13px] font-semibold text-warn">{d.onChairs}</span>
									<span className="text-text-dim">On chairs</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-xl bg-panel border border-border p-4">
					<div className="text-[13px] font-medium text-text">Clean Supply</div>
					<div className="mt-5 text-[14px] font-bold leading-none tracking-tight text-ok">
						{c.count}/{c.capacity}
					</div>
					<div className="mt-5 text-[12px] text-text-dim">{c.distributedToday} distributed today</div>
				</div>
			</div>
		</div>
	)
}
