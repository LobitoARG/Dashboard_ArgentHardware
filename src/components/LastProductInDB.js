import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'
//import gpu from './pages/gpu.png'


function LastProductInDb(){

    const [lastProduct, setLastProduct ] = useState('')
    useEffect( () => {
        fetch(`http://localhost:3005/api/products/lastProduct`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
        let last = products.data[products.data.length - 1]
        setLastProduct(last)
        })
        .catch(error => console.log(error))
    }, [] ) 

    console.log(lastProduct)
    return (
        <>	

        <div className="card" id="card2">
            <h2 className="nombre-card">Ultimo producto</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/img/componente/${lastProduct.imagen}`} alt='img_user' className='all-imagenes'></img>
            <div className="card-body">
            <h5 className="card-title">Datos del producto Nro.: {lastProduct.id}</h5>
            <p className="card-title"><strong>Nombre: </strong>{lastProduct.name}</p>
            <p className="card-text"><strong>Descripcion: </strong> {lastProduct.description}</p>
            <p className="card-text"><strong>Categoria: </strong> {lastProduct.category}</p>
            <NavLink to={`/ProductDetail/${lastProduct.id}`}>
            <button className="btn btn-outline-primary">Detalles</button>
            </NavLink>
            </div>
        </div>
        </>
    )
}
export default LastProductInDb;