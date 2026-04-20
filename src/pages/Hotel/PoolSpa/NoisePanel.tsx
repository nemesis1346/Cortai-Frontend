import audioWaveformIconUrl from '../../../assets/audio-waveform.svg?url'
import { poolPageMock } from '../../../data/mock'
import { primitive } from '../../../theme/tokens.generated'

function dbToBottomPercent(db: number) {
	const min = 58
	const max = 82
	const p = ((db - min) / (max - min)) * 100
	return Math.min(94, Math.max(6, p))
}

function dbTextClass(db: number) {
	if (db < 70) return 'text-ok'
	if (db < 76) return 'text-warn'
	return 'text-danger'
}

export default function NoisePanel() {
	return (
		<div className="rounded-2xl border border-border bg-panel p-4">
			<div className="text-[1rem] text-text inline-flex items-center gap-2">
				<img src={audioWaveformIconUrl} alt="" className="w-5 h-5 shrink-0" />
				<span>Noise Levels</span>
			</div>
			<div className="mt-5 grid grid-cols-2 gap-6">
				{poolPageMock.noiseLevels.map((z) => (
					<div key={z.label} className="flex flex-row items-center gap-2">
						<div className="flex flex-row items-stretch gap-1.5">
							<div className="relative w-3 shrink-0 flex items-end justify-center" style={{ height: 30 }}>
								<div
									className="absolute left-2 w-0 h-0 border-y-[0.3125rem] border-y-transparent border-l-[0.4375rem] border-r-[color:var(--primitive-white-shadow-100)]"
									style={{ bottom: `calc(${dbToBottomPercent(z.db)}% - 0.3125rem)` }}
								/>
							</div>
							<div className="flex h-[5.5rem] w-2.5 shrink-0 flex-col rounded-sm overflow-hidden border border-[color:var(--primitive-white-shadow-20)]">
								<div className="flex-1" style={{ background: primitive.SemanticDanger }} />
								<div className="flex-1" style={{ background: primitive.SemanticWarning }} />
								<div className="flex-1" style={{ background: primitive.SemanticSuccess }} />
							</div>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className={`text-[1rem] ${dbTextClass(z.db)}`}>{z.db}dB</div>
							<div className="text-[0.875rem] text-text-dim text-center">{z.label}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
