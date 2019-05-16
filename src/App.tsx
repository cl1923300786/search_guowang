import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import routes from './routers/Router'
import { createBrowserHistory } from 'history'
// tslint:disable-next-line:no-import-side-effect
import './App.less'

const history = createBrowserHistory()

const App: React.FC = () => {
  const renderRouter = () => {
    return routes.map(router => {
      return <Route path={router.path} key={router.path} exact={router.exact} component={router.componet} />
    })
  }

  return (
    <Router history={history}>
      <Switch>{renderRouter()}</Switch>
    </Router>
  )
}

export default App
