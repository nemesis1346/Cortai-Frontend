/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: 'var(--color-bg)',
				card: 'var(--color-card)',
				elevated: 'var(--color-elevated)',
				panel: 'var(--color-panel)',
				border: 'var(--color-border)',
				text: {
					DEFAULT: 'var(--color-text)',
					dim: 'var(--color-text-dim)',
					mute: 'var(--color-text-mute)',
				},
				brand: 'var(--color-brand)',
				ok: 'var(--color-ok)',
				warn: 'var(--color-warn)',
				danger: 'var(--color-danger)',
				info: 'var(--color-info)',
			},
			boxShadow: { innerCard: 'var(--shadow-inner-card)' },
		},
	},
}
