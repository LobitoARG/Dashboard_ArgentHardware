import React from "react";

function Products(){
    return(
        <div className="container-categorias">
        <h1 className="titulo-tablas">Lista de Productos</h1>
    <table className="table caption-top">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>PC GAMER INTEL CORE I5 GTX 1660 6GB SSD 600w</td>
        <td>2</td>
        <td>$150.999</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Lenovo 15.6 Intel Core i3 8GB SSD 256GB</td>
        <td>3</td>
        <td>$89.999</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>WATER COOLER ASUS ROG STRIX LC120 RGB</td>
        <td>1</td>
        <td>$23.999</td>
        </tr>
    </tbody>
    </table>
    </div>
    )
}

export default Products;