import React, { Component } from 'react';
import Products from '../pages/Products';
import { NavLink } from 'react-router-dom'

class ProductsInDB2 extends Component{
    constructor(){
        super()
        this.state={
            informacion: []
        }
    }

    componentDidMount(){
        
        fetch(`http://localhost:3005/api/products?limit=10&page=2`)
        //console.log(resultado)
        .then(respuesta =>{
            //console.log(respuesta)
            return respuesta.json()
        })
        .then(info =>{
            //console.log(gif);
            this.setState({informacion: info.data})
        })
        .catch(error=>console.log(error))
    }

    render(){
        return(

            <div className="container-categorias">
       
            <h1>Lista de Productos</h1>
            <table className="table caption-top">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Categoria</th>
                <th scope="col">Detalles</th>
                </tr>
            </thead>
            {
                    this.state.informacion.map((info,index)=>{
                        return <Products {...info} key={index}/>
                    })
            }

            </table>
            <div>
            <button className="btn btn-outline-primary">Siguiente Pagina</button>
            <NavLink to={'/products'}> 
            <button className="btn btn-outline-primary">Pagina Anterior</button>
            </NavLink>
            </div>
            </div>
            
        )
    }
}

export default ProductsInDB2;