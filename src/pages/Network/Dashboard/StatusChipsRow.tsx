import { ExternalLink } from 'lucide-react'
import type { StatusChip, StatusChipTheme } from './types'

const cardThemeMap: Record<StatusChipTheme, string> = {
	green: 'border-[#FFFFFF0D] bg-[#04D4001A]',
	red: 'border-[#F38612]/35 bg-[#F386121A]',
	teal: 'border-[#00D4C0]/35 bg-[#00D4C01A]',
	purple: 'border-[#B758F1]/35 bg-[#B758F11A]',
}

const badgeThemeMap: Record<StatusChipTheme, string> = {
	green: 'bg-[#04D4001A] text-[#04D400]',
	red: 'bg-[#FB71851A] text-[#FB7185]',
	teal: 'bg-[#00D4C01A] text-[#00D4C0]',
	purple: 'bg-[#8B5CF61A] text-[#8B5CF6]',
}

type StatusChipsRowProps = {
	items: StatusChip[]
}

export default function StatusChipsRow({ items }: StatusChipsRowProps) {
	return (
		<section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
			{items.map((item) => (
				<div
					key={item.id}
					className={`relative rounded-xl border p-3 ${cardThemeMap[item.theme]}`}
				>
					<div className="flex items-start justify-end gap-2 pr-1">
						<button
							type="button"
							className="inline-flex shrink-0 text-white/50 transition-colors hover:text-white"
							aria-label="Open"
						>
							<ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
						</button>
					</div>
					<div className="flex flex-col gap-2 justify-center items-start px-2">
						<div className="text-[14px] font-medium text-white/80">{item.label}</div>
						<div className="flex flex-row items-center gap-1">
							<span className={`inline-flex rounded-[3px] px-2 py-1 text-[12px] font-medium ${badgeThemeMap[item.theme]}`}>
								{item.badge}
							</span>
							{item.secondaryText ? (
								<span className="text-[12px] text-white/45">{item.secondaryText}</span>
							) : null}
						</div>
					</div>
				</div>
			))}
		</section>
	)
}
