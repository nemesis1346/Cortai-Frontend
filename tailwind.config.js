/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: "#0f1518",
				card: "#141c20",
				border: "#1f2a30",
				text: { DEFAULT: "#d5e4ea", dim: "#9fb3bd", mute: "#6e838d" },
				brand: "#22d3ee",
				ok: "#22c55e",
				warn: "#f59e0b",
				danger: "#ef4444",
				info: "#38bdf8"
			},
			boxShadow: { innerCard: "inset 0 1px 0 rgba(255,255,255,0.03)" }
		}
	},
	plugins: []
}

