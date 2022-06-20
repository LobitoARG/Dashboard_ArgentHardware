import React, { Component } from 'react';
import Users from '../pages/Users';
import { NavLink } from 'react-router-dom'

class UsersInDB extends Component{
    constructor(){
        super()
        this.state={
            informacion: []
        }
    }

    componentDidMount(){
        
        fetch(`http://localhost:3005/api/user`)
        //console.log(resultado)
        .then(respuesta =>{
            console.log(respuesta)
            return respuesta.json()
        })
        .then(info =>{
            //console.log(gif);
            this.setState({informacion: info.data})
          
            //console.log(info.count)
        })
        .catch(error=>console.log(error))
       
    }

    render(){
        return(

            <div className="container-categorias">
       
            <h1>Lista de Usuarios</h1>
            <table className="table caption-top">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Detalles</th>
                </tr>
            </thead>
            {
                    this.state.informacion.map((info,index)=>{
                        return <Users {...info} key={index}/>
                    })
            }

            </table>
            <NavLink to={`/NextPageUsers/`}>
            <button className="btn btn-outline-primary">Siguiente Pagina</button>
            </NavLink>
            </div>
            
        )
    }
}

export default UsersInDB;