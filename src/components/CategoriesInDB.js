import React, { Component } from 'react';
import Categories from '../pages/Categories'

class CategoriesInDB extends Component{
    constructor(){
        super()
        this.state={
            informacion: []
        }
    }

    componentDidMount(){
        
        fetch(`http://localhost:3005/api/products/countByCategory`)
        //console.log(resultado)
        .then(respuesta =>{
            //console.log(respuesta)
            return respuesta.json()
        })
        .then(info =>{
            console.log(info);
            this.setState({informacion: info})
        })
        .catch(error=>console.log(error))
    }

    render(){
        return(

            <div className="container-categorias">
            <h1>Lista de Categorias</h1>
            <table className="table caption-top">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                
                </tr>
            </thead>
            {
                <Categories {...this.state.informacion}/>
            }

            </table>
            </div>
            
        )
    }
}

export default CategoriesInDB;