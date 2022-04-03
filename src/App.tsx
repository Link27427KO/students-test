import React from 'react'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider, ReactReduxContext } from 'react-redux'
import { createBrowserHistory } from 'history'

import '../src/styles-template/_layout.scss'
import { useRoutes } from './routes'
import { configureStore } from './modules/root'
import MenuBar from './containers/menu/MenuBar'

const history = createBrowserHistory({ basename: '/' })
export const store = configureStore(history)

function App() {
  const routes = useRoutes()
  return (
    <Provider store={store} context={ReactReduxContext}>
      <MenuBar />
      <Router>{routes}</Router>
    </Provider>
  )
}

export default App
