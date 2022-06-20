import React from "react";
import CategoriasCount from "../components/CategoriasCount";
import LastProductInDb from "../components/LastProductInDB";
import LastUserInDb from "../components/LastUserInDB";
import UsuariosCountCard from '../components/UsuariosCountCard'
import ProductosCountCard from "../components/ProductsCountCard";


function Home(){
    return(
        <>
        <div className="card-group">
        <LastUserInDb/>
        <LastProductInDb/>
        </div>
        <div className="container-cards-totals">
        <UsuariosCountCard/>	
        <ProductosCountCard/>	
        <CategoriasCount/>	
        </div>
        
        </>
        
    )
}

export default Home;