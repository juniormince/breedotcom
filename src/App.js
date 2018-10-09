import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

//comps
import Home from './components/Home/Home';



const App = () => (
  <div>
    {/* header component to come
    <Header className="header" title="HELLO IT'S BREE. LEAVE A MESSAGE." /> */}

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
