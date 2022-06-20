import React from "react";
import { NavLink } from 'react-router-dom'


function Users(props){
    return(
        <>
        <tbody>
        <tr>
        <th scope="row">{props.id}</th>
        <td>{props.first_name}</td>
        <td>{props.email}</td>
        <td>
        <NavLink to={`/UserDetail/${props.id}`}>
            <button className="btn btn-outline-primary">Detalles</button>
        </NavLink>
        </td>
        </tr>
        </tbody>
        </>
   
    
    )
}

export default Users;