import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import './Styles/Main.scss'
import LoginScreen from './pages/Login Screen/LoginScreen'
import Dashboard from './pages/Dashboard/Dashborad'

function App() {
  return (
    <Router>
          <Switch>
            <Route
              path='/login'
              render={() => <LoginScreen />}
            />
            <Route
              path='/dashboard'
              render={() => <Dashboard />}
            />
          </Switch>
          {/* <Route path='*'>
              <Redirect to='/dashboard' />
            </Route> */}
        </Router>
  );
}

export default App;
