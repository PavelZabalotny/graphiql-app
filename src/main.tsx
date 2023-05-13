import { CssBaseline } from '@mui/material'
import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.scss'

import { store } from '@/store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
