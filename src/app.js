import { React } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Auth from './components/auth.js';
import Login from './components/login.js';
// import LoginContext from './components/context.js';
import './scss/header.scss';
import './scss/form.scss';
import './scss/footer.scss';


import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Settings from './components/settings/settings';

function App() {
  return (
    <>
      <Router>
          <Login/>
          <Auth>
        <Header className="Header"/>
          <Switch>
          {/* Main Route */}
          <Route exact path="/">
            <Auth>
            <ToDo />
            </Auth>
          </Route>
          {/* Route to Settings */}
          <Route path="/settings">
            <Settings />
          </Route>
          </Switch>
          </Auth>
        <Footer className="Footer"/>
      </Router>
    </>
  );
}

export default App;
