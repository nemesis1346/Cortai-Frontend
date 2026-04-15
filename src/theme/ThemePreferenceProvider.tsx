import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from 'react'

export const THEME_STORAGE_KEY = 'cortai-theme-preference'

export type ThemePreference = 'light' | 'dark' | 'system'

type ThemePreferenceContextValue = {
	preference: ThemePreference
	effective: 'light' | 'dark'
	setPreference: (p: ThemePreference) => void
}

const ThemePreferenceContext = createContext<ThemePreferenceContextValue | null>(null)

export function getStoredPreference(): ThemePreference {
	try {
		const v = localStorage.getItem(THEME_STORAGE_KEY)
		if (v === 'light' || v === 'dark' || v === 'system') return v
		return 'system'
	} catch {
		return 'system'
	}
}

export function getEffectiveTheme(pref: ThemePreference, systemPrefersDark: boolean): 'light' | 'dark' {
	if (pref === 'system') return systemPrefersDark ? 'dark' : 'light'
	return pref
}

export function applyDocumentTheme(effective: 'light' | 'dark') {
	document.documentElement.dataset.theme = effective
	document.documentElement.style.colorScheme = effective
}

export function initTheme() {
	const pref = getStoredPreference()
	const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	applyDocumentTheme(getEffectiveTheme(pref, systemDark))
}

export function ThemePreferenceProvider({ children }: { children: ReactNode }) {
	const [systemDark, setSystemDark] = useState(
		() => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches,
	)

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)')
		const onChange = () => setSystemDark(mq.matches)
		mq.addEventListener('change', onChange)
		return () => mq.removeEventListener('change', onChange)
	}, [])

	const [preference, setPreferenceState] = useState<ThemePreference>(() => getStoredPreference())

	const effective = useMemo(() => getEffectiveTheme(preference, systemDark), [preference, systemDark])

	useEffect(() => {
		applyDocumentTheme(effective)
	}, [effective])

	const setPreference = useCallback((p: ThemePreference) => {
		setPreferenceState(p)
		try {
			localStorage.setItem(THEME_STORAGE_KEY, p)
		} catch {
			return
		}
	}, [])

	const value = useMemo(
		() => ({ preference, effective, setPreference }),
		[preference, effective, setPreference],
	)

	return <ThemePreferenceContext.Provider value={value}>{children}</ThemePreferenceContext.Provider>
}

export function useThemePreference() {
	const ctx = useContext(ThemePreferenceContext)
	if (!ctx) throw new Error('useThemePreference must be used within ThemePreferenceProvider')
	return ctx
}
