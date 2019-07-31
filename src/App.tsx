import React from 'react';
import { Link,BrowserRouter as Router,Route } from "react-router-dom";

import BasicRouter from './pages/basic';
import UrlParameters from "./pages/UrlParameters";
import Redirects from "./pages/Redirects";
import CustomLink from "./pages/CustomLink";
import PreventTransition from "./pages/PreventTransition";
import NotMatch from "./pages/NotMatch";
import RecursivePath from "./pages/RecursivePath";
import Sidebar from "./pages/Sidebar";

const App: React.FC = () => {
  return (
    <div>
      <h1>BasePage</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/basic" >Basic</Link>
            </li>  
            <li>
              <Link to="/urlparameters" >Url Parameters</Link>
            </li>
            <li>
              <Link to="/redirects" >Redirects</Link>
            </li>
            <li>
              <Link to="/customlink" >Custom Link</Link>
            </li>
            <li>
              <Link to="/preventtransition" >Prevent Transition</Link>
            </li>
            <li>
              <Link to="/notmatch" >Not Match</Link>
            </li>
            <li>
              <Link to="/recursivepath" >Recursive Path</Link>
            </li>
            <li>
              <Link to="/sidebar">Sidebar</Link>
            </li>
          </ul>          
        </div>
        <div>
          <Route path="/basic" component={BasicRouter} />
          <Route path="/urlparameters" component={UrlParameters} />
          <Route path="/redirects" component={Redirects} />
          <Route path="/customlink" component={CustomLink} />
          <Route path="/preventtransition" component={PreventTransition} />
          <Route path="/notmatch" component={NotMatch} />
          <Route path="/recursivepath" component={RecursivePath} />
          <Route path="/sidebar" component={Sidebar} />
        </div>

      </Router>
    </div>
  );
}

export default App;
