import React from "react";
import cat from './cat.png'
import gpu from './gpu.png'
import Cards from "../components/Cards";

function Home(){
    return(
        <>
        <div className="card-group">
        <div className="card" id="card1">
            <h2 className="nombre-card">Ultimo usuario</h2>
            <img src={cat} width={250} alt="img" className="img-card"/>
            <div className="card-body">
            <h5 className="card-title">Alejandro Jabo</h5>
            <p className="card-text">E-Mail: hjabo97@gmail.com</p>
            <p className="card-text">Telefono: 1140301832</p>
            <p className="card-text"><small className="text-muted">Updated at: Date</small></p>
            <button className="btn btn-outline-primary">Detalles</button>
            </div>
        </div>
        <div className="card" id="card2">
            <h2 className="nombre-card">Ultimo producto</h2>
            <img src={gpu} width={250} alt="img" className="img-card"/>
            <div className="card-body">
            <h5 className="card-title">GPU RTX NVIDIA 3090 24GB GDDR6</h5>
            <p className="card-text">Precio: ARS$499.999</p>
            <p className="card-text">Categoria: Placas de video</p>
            <p className="card-text"><small className="text-muted">Updated at: Date</small></p>
            <button className="btn btn-outline-primary">Detalles</button>
            </div>
        </div>
        </div>

        <Cards/>

        
					
        </>
        
    )
}

export default Home;