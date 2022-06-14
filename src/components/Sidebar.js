import React from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';

function Sidebar (){
    return(
        <div className='container-sidebar bg-light'>
        <h2 className='text-dark'>Opciones</h2>
        <ul>
            <li>
                <NavLink to="/" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeClassName='active'><FaIcons.FaHome className='me-2'/> Inicio </NavLink>
            </li>
            <li>
                <NavLink to="/products" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeClassName='active'><FaIcons.FaBoxes className='me-2'/> Productos</NavLink>
                
            </li>
            <li>
                <NavLink to="/users" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeClassName='active'> <FaIcons.FaUsers className='me-2'/> Usuarios</NavLink>
            </li>
        </ul>
        </div>
    )
}

export default Sidebar;