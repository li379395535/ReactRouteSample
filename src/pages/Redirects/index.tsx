import React,{ FC, useState } from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Link,
    Redirect, 
    withRouter 
} from "react-router-dom";
import { RouteProps,RouteComponentProps } from "react-router";

const Redirects:FC = props=>{
    const view = 
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/redirects/public" >Public Page</Link>
                    </li>
                    <li>
                        <Link to="/redirects/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/redirects/public" component={Public} />
                <Route path="/redirects/login" component={Login} />
                <PrivateRoute path="/redirects/protected" component={Protected} />
            </div>
        </Router>
    return view;
}

const fakeAuth = {
    isAuthenticated:false,
    authenticate(cb:TimerHandler){ 
        this.isAuthenticated=true; 
        setTimeout(cb,100)
    },
    signout(cb:TimerHandler){
        this.isAuthenticated=false;
        setTimeout(cb,100);
    }
}

const AuthButton = withRouter(
    ({history})=>(
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!
                <button
                    onClick={()=>{
                        fakeAuth.signout(()=>{history.push("/redirects/")})
                    }}
                    >signout</button>
            </p>
        ):(<p>You are not logged in.</p>)
    ));


const PrivateRoute:FC<RouteProps>=({component,...rest})=>{
    return (
        <Route
            {...rest}
            render={((props)=>(
                fakeAuth.isAuthenticated ? (
                   React.createElement(component!, props)
                ):(
                    <Redirect 
                        to={{
                            pathname:"/redirects/login",
                            state:{from:props.location},
                        }}
                    />
                )
            ))}
        />
        
    );
}

const Public = ()=>(<h3>Public</h3>);
const Protected = ()=>(<h3>Protected</h3>);

const Login:FC<RouteComponentProps>=(props)=>{
    let {from} = props.location.state || {from:{pathname:"/redirects/"}}
    const [redirectToReferer, setRedirectToReferer] = useState(false)
    if(redirectToReferer){
       return (<Redirect to={from} />);
    }

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={()=>{
                fakeAuth.authenticate(() => {
                    setRedirectToReferer(true);
            });}}>Log in</button>
        </div>
    )
}



export default Redirects;