import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar (){
    return(
        <div className='container-sidebar'>
        <h1>SIDEBAR</h1>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/products">Productos</Link>
                
            </li>
            <li>
                <Link to="/users">Usuarios</Link>
            </li>
        </ul>
        </div>
    )
}

export default Sidebar;