import React from "react";
import useFetch from "react-fetch-hook";
import UserRow from "./UserRow";

export default function UserTable(){
    const {data, isLoading, error } = useFetch('/user'); 
    if(isLoading) return <h2> Loading...</h2>;
    else if(error) return <h2> Error: {error.message} </h2>;
    else return (
        <table className="table table-striped table-hover">
            <thead>
                <tr> 
                    <th> ID </th>
                    <th> Name </th>
                    <th> Login </th>
                    <th> Permission </th>
                </tr>
            </thead>
            <tbody>
                { data.map(singleuser => 
                    <UserRow user={singleuser} /> ) } 
            </tbody>
        </table>
    );
}
