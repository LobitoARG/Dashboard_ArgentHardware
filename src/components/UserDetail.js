import React, {useState, useEffect} from 'react'; 
import { NavLink, useParams } from 'react-router-dom'

function UserDetail(){
    const { id } = useParams();
    console.log(id)
    

    const [userDetailing, setUserDetailing ] = useState('')
    useEffect( () => {
        fetch(`http://localhost:3005/api/user/detailUser/${id}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(usuarios =>{
        let usuarioSelect = usuarios.data;
        setUserDetailing(usuarioSelect)
        })
        .catch(error => console.log(error))
    }, [id] ) 

    //console.log(userDetailing)
    return(
        <>	
        <div className="card" id="card1">
            <h2 className="nombre-card">{userDetailing.first_name} {userDetailing.last_name}</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/img/usersImg/${userDetailing.imagenUsers}`} alt='img_user' className='all-imagenes-detail'></img>
            <div className="card-body">
            <h5 className="card-title">Datos del usuario Nro: {userDetailing.id_usuario}</h5> 
            <p className="card-text">E-Mail.: {userDetailing.email}</p>
            <p className="card-text">Tel.: {userDetailing.telefono}</p>
            <p className="card-text"><small className="text-muted">Updated at: Date</small></p>
            <NavLink to='/' exact>
            <button className="btn btn-outline-primary">Atras</button>
            </NavLink>
            </div>
        </div>
        </>
    ) 
}
export default UserDetail;