import React from "react";
import { NavLink } from 'react-router-dom'

function Products(props){
    return(
        <>
        <tbody>
        <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.category}</td>
       
        <td>
        <NavLink to={`/ProductDetail/${props.id}`}>
            <button className="btn btn-outline-primary">Detalles</button>
        </NavLink>
        </td>
        </tr>
        </tbody>
        </>
    
   
    )
}

export default Products;