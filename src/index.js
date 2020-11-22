import { h } from 'preact'
import { Router } from 'preact-router'

import Home from './routes/home'
import { GlobalStyle } from './utils'

const App = () => (
  <div id="app">
    <GlobalStyle />
    <Router>
      <Home path="/" />
    </Router>
  </div>
)

export default App
