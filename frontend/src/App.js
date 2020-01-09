import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import TypeA from './components/TypeA'
import TypeB from './components/TypeB'
import TypeC from './components/TypeC'
import TypeD from './components/TypeD'
import TypeE from './components/TypeE'


function App() {
  return (
      <div className = 'App'>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path = '/' component = {Home}/>
              <Route exact path = '/typeA' component = {TypeA}/>
              <Route exact path = '/typeB' component = {TypeB}/>
              <Route exact path = '/typeC' component = {TypeC}/>
              <Route exact path = '/typeD' component = {TypeD}/>
              <Route exact path = '/typeE' component = {TypeE}/>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
  );
}

export default App;
