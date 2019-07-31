import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import "./index.css";



const SidebarExample: FC = (props) => {
    const routes = [
        {
            path: "/sidebar",
            exact: true,
            sidebar: SidebarHome,
            main: MainHome
        },
        {
            path: "/sidebar/bubblegum",
            sidebar: SidebarBubblegum,
            main: MainBubblegum
        },
        {
            path: "/sidebar/shoelaces",
            sidebar: SidebarShoelaces,
            main: MainShoelaces
        }
    ]

    return (
        <Router>
            <div className="container">
                <div className="sidebar">
                    <ul className="links">
                        <li>
                            <Link to="/sidebar">Home</Link>
                        </li>
                        <li>
                            <Link to="/sidebar/bubblegum">Bubblegum</Link>
                        </li>
                        <li>
                            <Link to="/sidebar/shoelaces">Shoelaces</Link>
                        </li>
                    </ul>
                    {
                        routes.map((r, i) => (
                            <Route
                                key={i}
                                path={r.path}
                                exact={r.exact}
                                component={r.sidebar}
                            />
                        ))
                    }
                </div>
                <div className="main">
                    {
                        routes.map((r, i) => (
                            <Route
                                key={i}
                                path={r.path}
                                exact={r.exact}
                                component={r.main}
                            />
                        ))
                    }
                </div>
            </div>
        </Router>
    )
}

const SidebarHome:FC<RouteComponentProps>=(props)=>{
    return (<div>Home!</div>)
}

const SidebarBubblegum:FC<RouteComponentProps>=(props)=>{
    return (<div>Bubblegum!</div>)
}

const SidebarShoelaces:FC<RouteComponentProps>=(props)=>{
    return (<div>Shoelaces!</div>)
}

const MainHome:FC<RouteComponentProps>=(props)=>{
    return (<div>Home</div>)
}

const MainBubblegum:FC<RouteComponentProps>=(props)=>{
    return (<div>Bubblegum</div>)
}

const MainShoelaces:FC<RouteComponentProps>=(props)=>{
    return (<div>Shoelaces</div>)
}

export default SidebarExample;