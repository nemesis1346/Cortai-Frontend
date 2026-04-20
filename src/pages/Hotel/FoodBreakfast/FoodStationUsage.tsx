import { Utensils } from 'lucide-react'
import { Progress } from 'antd'
import { chartHex, primitive } from '../../../theme/tokens.generated'

type Row = {
	name: string
	items: string[]
	count: number
	percent: number
	color: 'teal' | 'amber'
	wait?: string
}

const rows: Row[] = [
	{ name: 'Hot Food Bar', items: ['Scrambled Eggs (118)', 'Bacon (104)', 'Sausage (87)', 'Hash Browns (96)', 'Pancakes (72)'], count: 134, percent: 86, color: 'teal' },
	{ name: 'Cold Bar / Salad', items: ['Fresh Fruit (76)', 'Yogurt (62)', 'Granola (48)', 'Cereal (34)'], count: 89, percent: 57, color: 'teal' },
	{ name: 'Waffle Station', items: ['Belgian Waffle (42)', 'Toppings Bar (38)'], count: 58, percent: 37, color: 'amber', wait: '3m 20s wait' },
	{ name: 'Bakery / Pastry', items: ['Muffins (64)', 'Croissants (52)', 'Bagels (44)', 'Toast (38)'], count: 102, percent: 65, color: 'teal' },
	{ name: 'Omelette Station', items: ['Custom Omelette (46)'], count: 46, percent: 29, color: 'amber', wait: '4m 10s wait' },
]

// using antd Progress circle (as in Command Center)

export default function FoodStationUsage() {
	return (
		<section className="rounded-2xl border border-border card p-4">
			<div className="flex flex-row justify-between items-center gap-2">
				<div className="text-[18px] text-text inline-flex items-center gap-2">
					<Utensils className="w-4 h-4 text-brand" />
					<span>Food Station Usage</span>
				</div>
				<span className="rounded-[3px] px-2 py-1 text-[12px] text-text-dim">Guests who visited</span>
			</div>
			<div className="mt-4 grid grid-cols-1 overflow-hidden rounded-xl">
				{rows.map((r) => (
					<div
						key={r.name}
						className="odd:bg-[color:var(--primitive-semantic-normal-10)] even:bg-[color:var(--primitive-semantic-normal-15)] grid grid-cols-[0.8fr_2fr_0.2fr_0.2fr_0.4fr] items-center gap-3 border-b border-border px-3 py-2 last:border-b-0"
					>
						<div className="text-[14px] text-text">{r.name}</div>
						<div className="flex flex-row gap-x-4 text-[14px] text-text-dim">{r.items.map((x) => <span key={x}>{x}</span>)}</div>
						<div className="text-[14px] text-text">{r.count}</div>
						<div className="flex flex-row gap-2 items-center">
							<Progress
								type="circle"
								percent={r.percent}
								size={24}
								strokeWidth={12}
								strokeLinecap="round"
								strokeColor={r.color === 'teal' ? chartHex.brand : chartHex.warn}
								railColor={r.color === 'teal' ? chartHex.brandRail : primitive.SemanticWarning10}
								format={() => null}
							/>
							<div className="text-[14px] text-text-dim w-10 text-right">{r.percent}%</div>
						</div>
						{r.wait ? (
							<div className="justify-self-end">
								<span
									className="rounded-[3px] text-[12px] px-3 py-1"
									style={{ background: primitive.AccentOrange20, color: primitive.AccentOrange }}
								>
									{r.wait}
								</span>
							</div>
						) : <span />}
					</div>
				))}
			</div>
		</section>
	)
}