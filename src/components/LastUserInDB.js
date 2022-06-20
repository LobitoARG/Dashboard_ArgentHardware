import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'
//import testing from './img/usersImg/test.jpg'
//import gpu from './pages/gpu.png'
//const carpetaUsers = '../img/usersImg'

function LastUserInDb(){

    const [lastUser, setLastUser ] = useState('')
    useEffect( () => {
        fetch(`http://localhost:3005/api/user/lastUser`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(usuarios =>{
        let last = usuarios.data[usuarios.data.length - 1]
        setLastUser(last)
        })
        .catch(error => console.log(error))
    }, [] ) 

    //console.log(lastUser)
    return (
        <>	
        <div className="card" id="card1">
            <h2 className="nombre-card">Ultimo usuario</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/img/usersImg/${lastUser.imagenUsers}`} alt='img_user' className='all-imagenes'></img>
            <div className="card-body">
            <h5 className="card-title">Datos del usuario {lastUser.id_usuario}</h5>
            <p className="card-text"><strong>Nombre completo: </strong> {lastUser.first_name} {lastUser.last_name}</p>
            <p className="card-text"><strong>E-Mail: </strong>{lastUser.email}</p>
            <NavLink to={`/UserDetail/${lastUser.id_usuario}`}>
            <button className="btn btn-outline-primary">Detalles</button>
            </NavLink>
            </div>
        </div>
        </>
    )
}
export default LastUserInDb;