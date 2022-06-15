import React from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import logoE from './logo.png'


function Sidebar (){
    return(
        <div className='container-sidebar bg-light'>
        <h2 className='px-2' id='text-title-side'>DASHBOARD</h2>
        <div className='container-img-logo'>
        <img src={logoE} alt='logo' width={100}/>
        </div>
        <ul>
            <li>
                <NavLink to="/" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaHome className='me-2'/> Inicio </NavLink>
            </li>
            <li>
                <NavLink to="/products" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaBoxes className='me-2'/> Productos</NavLink>
                
            </li>
            <li>
                <NavLink to="/users" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaUsers className='me-2'/> Usuarios</NavLink>
            </li>
            <li>
                <NavLink to="/categories" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeclassname='active'><FaIcons.FaLayerGroup className='me-2'/> Categorias</NavLink>
            </li>
        </ul>
        </div>
    )
}

export default Sidebar;