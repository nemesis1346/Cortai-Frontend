import usersIconUrl from '../../../assets/users.svg?url'
import { poolPageMock } from '../../../data/mock'

export default function WashroomPanel() {
	return (
		<div className="rounded-2xl border border-border bg-card p-4">
			<div className="flex items-center gap-2 text-[1.125rem] font-medium text-text">
				<img src={usersIconUrl} alt="" className="h-5 w-5 shrink-0" />
				<span>Pool Washrooms</span>
			</div>
			<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
				{poolPageMock.washrooms.map((w) => (
					<div
						key={w.label}
						className="rounded-[0.3125rem] bg-[color:var(--primitive-white-shadow-5)] p-4"
					>
						<div className="mb-4 flex items-start justify-between gap-2">
							<span className="text-[0.875rem] text-text">{w.label}</span>
							<span className="shrink-0 text-[0.8125rem] text-text-dim">{w.occupied} occupied</span>
						</div>
						<div className="flex flex-row gap-2 justify-between">
							<div className="text-center min-[420px]:text-left">
								<div className="text-[0.875rem] leading-tight text-text">{w.usesToday}</div>
								<div className="mt-1.5 text-[0.75rem] text-text-dim">Uses today</div>
							</div>
							<div className="text-center min-[420px]:text-left">
								<div className="text-[0.875rem] leading-tight text-brand">{w.nextClean}</div>
								<div className="mt-1.5 text-[0.75rem] text-text-dim">Next clean</div>
							</div>
							<div className="text-center min-[420px]:text-left">
								<div className="text-[0.875rem] leading-tight text-text">{w.lastCleaned}</div>
								<div className="mt-1.5 text-[0.75rem] text-text-dim">Last cleaned</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
