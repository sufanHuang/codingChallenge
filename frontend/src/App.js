import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import BaseLayout from './components/BaseLayout'
import Home from './components/Home'



function App() {
  return (
        <BrowserRouter>
          <BaseLayout>
              <Route exact path = '/' component = {Home}/>
          </BaseLayout>
        </BrowserRouter>
  );
}

export default App;
