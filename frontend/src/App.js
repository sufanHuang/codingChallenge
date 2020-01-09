import React from 'react'
import { BrowserRouter, Routes, Switch } from 'react-router-dom'

function App() {
  return (
      <div className = 'App'>
        <BrowserRouter>
          <BaseLayout>
            <switch>
              <Route exact path = '/' component = {home}/>
              <Route exact path = '/typeA' component = {typeA}/>
              <Route exact path = '/typeB' component = {typeB}/>
              <Route exact path = '/typeC' component = {typeC}/>
              <Route exact path = '/typeD' component = {typeD}/>
              <Route exact path = '/typeE' component = {typeE}/>
            </switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
  );
}

export default App;
