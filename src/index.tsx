import { Base } from 'layout/Base'
import { Poll } from 'pages/Poll'
import { Polls } from 'pages/Polls'
import { Result } from 'pages/Result'
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
          <Route path="polls" element={<Polls />}></Route>
          <Route path="poll/:pollId" element={<Poll />} />
          <Route path="poll/result/:pollId" element={<Result />} />
          <Route
            path="*"
            element={
              <div style={{ padding: '1rem' }}>
                <p>Ops, página não encontrada.</p>
              </div>
            }
          />
        </Routes>
      </Base>
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>,
)
