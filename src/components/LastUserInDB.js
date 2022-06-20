import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'
//import gpu from './pages/gpu.png'



function LastUserInDb(){

    const [lastUser, setLastUser ] = useState('')
    useEffect( () => {
        fetch(`http://localhost:3005/api/user`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(usuarios =>{
        let last = usuarios.data[usuarios.data.length - 1]
        setLastUser(last)
        })
        .catch(error => console.log(error))
    }, [] ) 

    console.log(lastUser)
    return (
        <>	

        <div className="card" id="card1">
            <h2 className="nombre-card">Ultimo usuario</h2>
            <div className="card-body">
            <h5 className="card-title">Datos del usuario {lastUser.id}</h5>
            <p className="card-text">Nombre completo: {lastUser.first_name} {lastUser.last_name}</p>
            <p className="card-text">E-Mail: {lastUser.email}</p>
           
            <NavLink to={`/UserDetail/${lastUser.id}`}>
            <button className="btn btn-outline-primary">Detalles</button>
            </NavLink>
            
            </div>
        </div>
        </>
    )
}
export default LastUserInDb;