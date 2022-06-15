import React from "react";

function Users(){
    return(
        <div className="container-categorias">
        <h1>Lista de Usuarios</h1>
    <table className="table caption-top">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Email</th>
        <th scope="col">Telefono</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Alejandro DH</td>
        <td>hjabo@gmail.com</td>
        <td>1140301832</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Juan Pablo DH</td>
        <td>juampi@gmail.com</td>
        <td>1140301832</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Leonardo DH </td>
        <td>leo@gmail.com</td>
        <td>1140301832</td>
        </tr>
    </tbody>
    </table>
    </div>
    )
}

export default Users;