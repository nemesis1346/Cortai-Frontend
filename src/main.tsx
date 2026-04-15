import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import './style.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemePreferenceProvider, initTheme } from './theme/ThemePreferenceProvider'

initTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemePreferenceProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemePreferenceProvider>
	</React.StrictMode>,
)

