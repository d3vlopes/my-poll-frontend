import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/global'
import { theme } from 'styles/theme'

import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
)
