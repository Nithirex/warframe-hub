import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import WarframeList from './WarframeList';
import WarframeStats from './WarframeStats';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/warframelist">
              <WarframeList />
            </Route>
            <Route path="/warframestats/:name">
              <WarframeStats />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;