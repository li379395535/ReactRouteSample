import React,{ FC } from "react";
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";

interface RoutePropsType {
    routes?:RouteItemType[];
}

const Sandwiches:FC<RoutePropsType> = ()=>{
    return <h2>Sandwiches</h2>
}

const Tacos:FC<RoutePropsType> = ({routes})=>{
    return(
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/routeconfig/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/routeconfig/tacos/cart">Cart</Link>
                </li>
            </ul>
            {routes!.map((route, i) => (
                <RouteWithSubRoutes key={i} route={route} />
              ))}
        </div>
    )
}

const Bus:FC<RoutePropsType>=()=> {
    return <h3>Bus</h3>;
  }
  
const Cart:FC<RoutePropsType>=()=> {
return <h3>Cart</h3>;
}

interface RouteItemType{
    path:string;
    component:React.FunctionComponent<RoutePropsType>;    
    routes?:RouteItemType[];
}

const routes:RouteItemType[] = [
    {
      path: "/routeconfig/sandwiches",
      component: Sandwiches
    },
    {
      path: "/routeconfig/tacos",
      component: Tacos,
      routes: [
        {
          path: "/routeconfig/tacos/bus",
          component: Bus
        },
        {
          path: "/routeconfig/tacos/cart",
          component: Cart
        }
      ]
    }
];

interface RouteWithSubRoutesPropType{
    route:RouteItemType
}

const RouteWithSubRoutes:FC<RouteWithSubRoutesPropType>=({route})=>{
    return(
        <Route 
            path={route.path}
            render={subprops=>(
                React.createElement(route.component, {
                    ...subprops,
                    routes:route.routes
                })
            )}
        />
    )
}

const RouteConfig:FC = ()=>{
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/routeconfig/tacos">Tacos</Link>
              </li>
              <li>
                <Link to="/routeconfig/sandwiches">Sandwiches</Link>
              </li>
            </ul>
    
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} route={route} />
            ))}
          </div>
        </Router>
      );
}

export default RouteConfig;