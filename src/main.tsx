import ReactDOM from 'react-dom/client'

import './global.css'

import { Provider } from 'react-redux'
import { Routes } from './routes'

// import { store } from './Store'

import configureAppStore from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'
const { persistingStore, persistor } = configureAppStore()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={persistingStore}>
    <PersistGate loading={null} persistor={persistor} >
      <Routes />
    </PersistGate>
  </Provider>
)
