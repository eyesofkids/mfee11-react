import React from 'react'
import AnimalManager from './component/AnimalManager'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AnimalManager} />
          <Route path="/page/:page" component={AnimalManager} />
        </Switch>
      </Router>
    )
  }
}

export default App
