import React from "react";

export default function UserRow(props){
    return (
        <tr>
            <td> {props.user._id } </td>
            <td> {props.user.name } </td>
            <td> {props.user.login} </td>
            <td> {props.user.permission} </td>
        </tr>
    );
}