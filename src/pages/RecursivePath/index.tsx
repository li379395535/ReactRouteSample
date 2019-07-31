import React,{ FC } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const RecursivePath:FC=()=>{
    return (
        <Router>
            <Person match={{params:{id:0},url:"/recursivepath"}} />
        </Router>
    )
}

const PEEPs=[
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
];


const find=(id:number)=>{
    return PEEPs.find(p=>p.id === id);
}

interface PersonProps{
    match:{params:{id:number};url:string};
}

const Person:FC<PersonProps>=({match})=>{
    let person=find(match.params.id);
    let view =null;
    if (person){
        view=
            <div>
                <h3>
                    {person.name}'s friends
                </h3>
                <ul>
                    {person.friends.map(fId=>{
                        const friend=find(fId);
                        if(friend){
                            return (
                                <li key={fId}>
                                    <Link to={`${match.url}/${fId}`}>{friend.name}</Link>
                                </li>
                            )
                        }
                        return null;
                    })}
                </ul>
                <Route path={`${match.url}/:id`} component={Person} />
            </div>

    }
    return view;
}

export default RecursivePath;