import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

//now with style
import './styles/main.css';

//comps
import Home from './components/Home/Home';
import Header from './components/Header/Header';




const App = () => (
  <div>
    {/* header component to come */}
    <Header className="header" title="HELLO IT'S BREE." />

    {/* url directory */}
    <Router>
      <Switch>

        <Redirect exact from="/" to="/home" />

        <Route
          path="/home"
          component={Home}
        />



        {/* 404 here */}
        {/* <Route render={() => <ErrorComponentHere />
        } /> */}
        {/* YOU LOST BUDDY? YA LOOK LOST. */}

      </Switch>
    </Router>
  </div>
);

export default App;
