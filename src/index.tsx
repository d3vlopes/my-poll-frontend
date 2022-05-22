import { Base } from 'layout/Base'
import { Polls } from 'pages/Polls'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/global'
import { theme } from 'styles/theme'

import { Home } from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Base>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/polls" element={<Polls />} />
        </Routes>
      </Base>
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>,
)
