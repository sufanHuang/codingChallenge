import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BaseLayout from './components/BaseLayout'
import Home from './components/Home'



function App() {
  return (
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path = '/' component = {Home}/>
           </Switch>
          </BaseLayout>
        </BrowserRouter>
  );
}

export default App;
