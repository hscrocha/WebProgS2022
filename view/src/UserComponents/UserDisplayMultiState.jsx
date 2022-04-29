import React from "react";

export default function UserDisplay(){
    const [name, setName] = React.useState('unregistered');
    const [login, setLogin] = React.useState('email@domain.com');
    const [permission, setPermission] = React.useState(2);
    return (
        <ul>
            <li> Name: {name} </li>
            <li> Login: {login} </li>
            <li> Permission: {permission===1?"admin":"normal"} </li>
        </ul>
    );
}