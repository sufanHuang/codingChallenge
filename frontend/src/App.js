import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import TypeA from './components/TypeA'
import TypeB from './components/TypeB'
import TypeC from './components/TypeC'
import TypeD from './components/TypeD'
import TypeE from './components/TypeE'
import TypeF from './components/TypeF'
import TypeG from './components/TypeG'
import TypeH from './components/TypeH'
import TypeI from './components/TypeI'
import TypeJ from './components/TypeJ'
import TypeK from './components/TypeK'
import TypeL from './components/TypeL'



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
                <Route exact path = '/typeF' component = {TypeF}/>
                <Route exact path = '/typeG' component = {TypeG}/>
                <Route exact path = '/typeH' component = {TypeH}/>
                <Route exact path = '/typeI' component = {TypeI}/>
                <Route exact path = '/typeJ' component = {TypeJ}/>
                <Route exact path = '/typeK' component = {TypeK}/>
                <Route exact path = '/typeL' component = {TypeL}/>



            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
  );
}

export default App;
