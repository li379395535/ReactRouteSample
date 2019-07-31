import React,{ FC } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, RouteComponentProps } from "react-router-dom";

const NotMatchExample:FC = (props)=>{
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/notmatch" >Home</Link>
                    </li>
                    <li>
                        <Link to="/notmatch/old-match">Old match, to be redirected</Link>
                    </li>
                    <li>
                        <Link to="/notmatch/will-match">Will Match</Link>
                    </li>
                    <li>
                        <Link to="/notmatch/will-not-match">Will not match</Link>
                    </li>
                    <li>
                        <Link to="/notmatch/also/will/not/match">Also will not match</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/notmatch" exact component={Home} />
                    <Redirect from="/notmatch/old-match" to="/notmatch/will-match" />
                    <Route path="/notmatch/will-match" componet={WillMatch} />
                    <Route component={NotMatch} />
                </Switch>
            </div>
        </Router>
    )
}

const Home = ()=>{
    return (
        <p>
          A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
          that matches. A <code>&lt;Route></code> with no <code>path</code> always
          matches.
        </p>
      );
}

const WillMatch:FC = ()=>{
    return <h3>Matched!</h3>
}

const NotMatch:FC<RouteComponentProps> = ({location})=>{
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default NotMatchExample;