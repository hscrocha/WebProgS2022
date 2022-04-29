import React from "react";

export default function UserDisplay(){
    const [user, setUser] = React.useState(
        {name:'New User',login:'a@a.com',permission:1});
    function example(){
        setUser({name:'Changed',login:'a@a.com',permission:1});
    }
    return (
        <ul>
            <li> Name: {user.name} </li>
            <li> Login: {user.login} </li>
            <li> Permission: {user.permission===1?"admin":"normal"} </li>
            <li> <button onClick={example}> Change </button> </li>
        </ul>
    );
}