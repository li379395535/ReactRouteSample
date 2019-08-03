import React,{FC} from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    Redirect, 
    RouteComponentProps
} from "react-router-dom";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import './index.css';


const AnimatedTransition:FC = ()=>{
    return (
        <Router>
            <Route 
                render={({location})=>(
                    <div className="fill">
                        <Route 
                            exact 
                            path="/AnimatedTransition"
                            render={()=>(<Redirect to="/AnimatedTransition/hsl/10/90/50" />)}
                        />
                        <ul className="nav">
                            <NavLink to="/AnimatedTransition/hsl/10/90/50">Red</NavLink>
                            <NavLink to="/AnimatedTransition/hsl/120/100/40">Green</NavLink>
                            <NavLink to="/AnimatedTransition/rgb/33/150/243">Blue</NavLink>
                            <NavLink to="/AnimatedTransition/rgb/240/98/146">Pink</NavLink>
                        </ul>
                        <div className="fill content">
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={300}
                                >
                                    <Switch location={location}>
                                        <Route exact path="/AnimatedTransition/hsl/:h/:s/:l" component={HSL} />
                                        <Route exact path="/AnimatedTransition/rgb/:r/:g/:b" component={RGB} />                                        
                                        <Route render={() => <div>Not Found</div>} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                )}
            />
        </Router>
    )
}

interface NavLinkProps{
    to:string;
}

const NavLink:FC<NavLinkProps> = (props)=>{
    return (
        <li className="navLinkItem">
            <Link className="link" {...props} />
        </li>
    )
}

interface HSLRouteParams{
    h:string;
    s:string;
    l:string;
}

const HSL:FC<RouteComponentProps<HSLRouteParams>> =({match:{params}})=>{
    return (
        <div className="fill hsl" style={{
            background:`hsl(${params.h},${params.s}%,${params.l}%)`}}>
            hsl({`${params.h},${params.s}%,${params.l}%`})
        </div>
    )
}

interface RGBRouteParams{
    r:string;
    g:string;
    b:string;
}

const RGB:FC<RouteComponentProps<RGBRouteParams>> = ({match:{params}})=>{
    return(
        <div className="fill rgb" style={{
            background:`rgb(${params.r},${params.g},${params.b})`
        }}>
            {`rgb(${params.r},${params.g},${params.b})`}
        </div>
    )
}

export default AnimatedTransition;