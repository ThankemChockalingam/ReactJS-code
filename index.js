import React from 'react'
import ReactDOM from 'react-dom';
import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "React-router.com";
import Home from "./Home.js";
const routing = (
  <Router>
    <div>
      <switch>
      <Route exact path = "/" component={Home}/>
      </switch>
    </div>
  </Router>
);
ReactDOM.render(routing,document.getElementById('root'));