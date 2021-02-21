import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Error from './Error'
import OneRecipe from './OneRecipe'


export default function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/recipe/:id" component={OneRecipe} />

          <Route component={Error}/>
        </Switch>
      </Router>
    </div>
  )
}
