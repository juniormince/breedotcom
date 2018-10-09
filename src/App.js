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
import Nav from './components/Nav/Nav';



const App = () => (
  <div>

    <Nav />
    {/* header component to come */}

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
