import React, { Component } from 'react';
//import Users from '../pages/Users';
//import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';

class UsuariosCount extends Component{
    constructor(){
        super()
        this.state={
            informacionMeta: []
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
            this.setState({informacionMeta: info.meta})
            //console.log(info.count)
        })
        .catch(error=>console.log(error))
       
    }

    render(){
        return(

           <>
            <div className="col-md-4 mb-1" id="card-productos-2">
				<div className="card border-left-success shadow h-100 py-2">
					<div className="card-body">
						<div className="row no-gutters align-items-center">
							<div className="col mr-2">
								<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total de usuarios</div>
								<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.informacionMeta.total}</div>
								</div>
								<div className="col-auto">
                                <FaIcons.FaUsers className='me-2'/>
							</div>
						</div>
					</div>
				</div>
		    </div>
           </>
            
        )
    }
}

export default UsuariosCount;