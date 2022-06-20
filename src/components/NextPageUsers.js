import React, { Component } from 'react';
import Users from '../pages/Users';
import { NavLink } from 'react-router-dom'

class UsersInDB2 extends Component{
    constructor(){
        super()
        this.state={
            informacionUsuarios: []
        }
    }

    componentDidMount(){
        
        fetch(`http://localhost:3005/api/user?limit=10&page=2`)
        //console.log(resultado)
        .then(respuesta =>{
            //console.log(respuesta)
            return respuesta.json()
        })
        .then(info =>{
            //console.log(gif);
            this.setState({informacionUsuarios: info.data})
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
                    this.state.informacionUsuarios.map((info,index)=>{
                        return <Users {...info} key={index}/>
                    })
            }

            </table>
            <div>
            <button className="btn btn-outline-primary">Siguiente Pagina</button>
            <NavLink to={'/users'}>  
            <button className="btn btn-outline-primary">Pagina Anterior</button>
            </NavLink>                                                                   
            </div>
            </div>
            
        )
    }
}

export default UsersInDB2;