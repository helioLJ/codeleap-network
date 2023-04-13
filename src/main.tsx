import ReactDOM from 'react-dom/client'

import './global.css'

import { Provider } from 'react-redux'
import { Routes } from './routes'

import configureAppStore from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'
const { persistingStore, persistor } = configureAppStore()
export type RootState = ReturnType<typeof persistingStore.getState>


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={persistingStore}>
    <PersistGate loading={null} persistor={persistor} >
      <Routes />
    </PersistGate>
  </Provider>
)
