import React, {useState, useEffect} from 'react'; 
import { NavLink, useParams } from 'react-router-dom'

function ProductDetail(){
    const { id }= useParams();
    console.log(id)
    

    const [productDetailing, setproductDetailing ] = useState('')
    useEffect( () => {
        fetch(`http://localhost:3005/api/products/detailProduct/${id}`)
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(productos =>{
        let productoSelect = productos.data;
        setproductDetailing(productoSelect)
        })
        .catch(error => console.log(error))
    }, [id] ) 

    console.log(productDetailing)
    return(
        <>	
        <div className="card" id="card1">
            <h2 className="nombre-card">{productDetailing.nombre}</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/img/${productDetailing.tipo}/${productDetailing.imagen}`} alt='img_user' className='all-imagenes-detail'></img>
            <div className="card-body">
            <h5 className="card-title">Datos del producto Nro: {productDetailing.id_producto}</h5> 
            <p className="card-text">Nombre: {productDetailing.nombre}</p>
            <p className="card-text">Precio: {productDetailing.precio}</p>
            <p className="card-text">Descuento: {productDetailing.descuento}</p>
            <p className="card-text">Descripcion: {productDetailing.descripcion}</p>
            <p className="card-text"><small className="text-muted">Created at: {productDetailing.created_at}</small></p>
            <NavLink to='/' exact>
            <button className="btn btn-outline-primary">Atras</button>
            </NavLink>
            
            </div>
        </div>
        </>
    ) 
}
export default ProductDetail;