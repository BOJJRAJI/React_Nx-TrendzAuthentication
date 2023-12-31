import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route path="/bad-path" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
