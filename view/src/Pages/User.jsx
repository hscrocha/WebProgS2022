import React from "react";
import UserTable from "../UserComponents/UserTable";


export default function User(){
    return (
        <div className="container">
            <h1> Users Page </h1>
            <UserTable />
        </div>
    );
}