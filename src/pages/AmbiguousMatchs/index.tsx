import React,{ FC } from "react";
import { BrowserRouter as Router, Route, Link, Switch, RouteComponentProps } from "react-router-dom";

const AmbiguousMatchs:FC = ()=>{
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/ambiguous-matchs/about">About Us (static)</Link>
                    </li>
                    <li>
                        <Link to="/ambiguous-matchs/company">Company (static)</Link>
                    </li>
                    <li>
                        <Link to="/ambiguous-matchs/kim">Kim (dynamic)</Link>
                    </li>
                    <li>
                        <Link to="/ambiguous-matchs/chris">Chris (dynamic)</Link>
                    </li>
                </ul>

                {/*
                Sometimes you want to have a whitelist of static paths
                like "/about" and "/company" but also allow for dynamic
                patterns like "/:user". The problem is that "/about"
                is ambiguous and will match both "/about" and "/:user".
                Most routers have an algorithm to decide for you what
                it will match since they only allow you to match one
                "route". React Router lets you match in multiple places
                on purpose (sidebars, breadcrumbs, etc). So, when you
                want to clear up any ambiguous matching, and not match
                "/about" to "/:user", just wrap your <Route>s in a
                <Switch>. It will render the first one that matches.
            */}
                <Switch>
                    <Route path="/ambiguous-matchs/about" component={About} />
                    <Route path="/ambiguous-matchs/company" component={Company} />
                    <Route path="/ambiguous-matchs/:user" component={User} />                
                </Switch>
            </div>
        </Router>
    )
}

const About:FC = ()=> {
    return <h2>About</h2>;
  }
  
const Company:FC=()=> {
    return <h2>Company</h2>;
  }
  

interface UserParams{
    user:string;
}
const User:FC<RouteComponentProps<UserParams>> = ({ match })=> {
    return (
      <div>
        <h2>User: {match.params.user}</h2>
      </div>
    );
}

export default AmbiguousMatchs;