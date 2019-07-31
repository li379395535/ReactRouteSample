import React, { FC, Fragment } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


interface BasicRouteProps {
}

const BasicRoute: FC<BasicRouteProps> = props => {
    const view =
        <Fragment>
            <Router>
                <h1>content</h1>
                <ul>
                    <li>
                        <Link to="/basic/">Home</Link>
                    </li>
                    <li>
                        <Link to="/basic/about">About</Link>
                    </li>
                    <li>
                        <Link to="/basic/topic">Topic</Link>
                    </li>
                </ul>
                <div>
                    <Route exact path="/basic/" component={() => (<div>Home</div>)}></Route>
                    <Route exact path="/basic/about" component={() => (<div>About</div>)}></Route>
                    <Route exact path="/basic/topic" component={() => (<div>Topic</div>)}></Route>
                </div>

            </Router>
        </Fragment>

    return view;
}

export default BasicRoute;