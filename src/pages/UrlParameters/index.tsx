import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Link, match } from "react-router-dom";
interface MatchProps{
    id:string;
}

interface UrlParamsProps{
    match?:match<MatchProps>
}

const UrlParameters:FC<UrlParamsProps>=props=>{
    const view=
        <Router>
            <div>
                <h2>Account</h2>
                <ul>
                    <li>
                        <Link to="/urlparams/netflix">NetFlix</Link>
                    </li>
                    <li>
                        <Link to="/urlparams/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/urlparams/yahoo">Yahoo</Link>
                    </li>
                    <li>
                        <Link to="/urlparams/modux-create">Modux Create</Link>
                    </li>
                </ul>
                <Route path="/urlparams/:id" component={({match}:{match:match<MatchProps>})=>(<div>{match.params.id||""}</div>)} />
            </div>
        </Router>
    return view;
}

export default UrlParameters;
