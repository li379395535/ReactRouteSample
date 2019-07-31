import React,{ FC, useState, } from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

const PreventTransition:FC= ()=>{
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/preventtransition/" >Home</Link>
                </li>
                <li>
                    <Link to="/preventtransition/one">One</Link>
                </li>
                <li>
                    <Link to="/preventtransition/two">Two</Link>
                </li>
                <Route path="/preventtransition/" exact component={Form} />
                <Route path="/preventtransition/one" component={()=>(<h2>One</h2>)} />
                <Route path="/preventtransition/two" component={()=>(<h3>Two</h3>)} />
            </ul>
        </Router>
    )
}


const Form:FC=()=>{
    const [isBlocking, setBlocking] = useState(false);
    const [inputText, setInput] = useState("");
    const view =
        <form
            onSubmit={(event)=>{
                event.preventDefault();
                setInput("");
                setBlocking(false);
            }}
        >
            <Prompt 
                when={isBlocking}
                message={location=>(`Are you sure you want to go to ${location.pathname}`)}
            />
            <p>
                Blocking?
                {isBlocking ? "Yes, click a link or the back button" : "Nope"}
            </p>
            <p>
                <input 
                    size={50}
                    placeholder="type something to block transition"
                    onChange={(event)=>{setInput(event.target.value)}}
                    value={inputText}
                />
            </p>
            <p>
                <button>Submit to stop blocking</button>
            </p>
        </form>
    return view;
}

export default PreventTransition;