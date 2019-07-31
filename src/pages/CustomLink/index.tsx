import React,{ FC } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CustomLink:FC = (props)=>{
    return (
        <Router>
            <div>
                <OldSchoolMenuLink activeOnlyWhenExact to="/customLink/" label="Home" />
                <OldSchoolMenuLink activeOnlyWhenExact={false} to="/customLink/about" label="about" />
                <hr />
                <Route exact path="/customLink/" component={Home} />
                <Route path="/customLink/about" component={About} />
            </div>
        </Router>
    )
}

interface OldSchoolMenuLinkProps{
    label:string;
    to:string;
    activeOnlyWhenExact:boolean;
}

const OldSchoolMenuLink:FC<OldSchoolMenuLinkProps>=({label,to, activeOnlyWhenExact})=>{
    return(
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={(props)=>{
                const {match} =props;
                return (
                    <div className={match?"active":""}>
                        {match?">":""}
                        <Link to={to}>{label}</Link>
                    </div>
                )
            }}
        />
    )
}

const Home = ()=>(
    <div>
        <h2>Home</h2>
    </div>
);

const About=()=>(
    <div>
        <h2>About</h2>
    </div>
)

export default CustomLink;