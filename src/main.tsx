import { CssBaseline } from '@mui/material'
import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.scss'

import ErrorBoundary from '@/common/components/ErrorBoundary/ErrorBoundary.tsx'

import { store } from '@/store/store.ts'

const errorBoundaryFallback = <p>Sorry, something went wrong!!!</p>

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <ErrorBoundary fallback={errorBoundaryFallback}>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
)
