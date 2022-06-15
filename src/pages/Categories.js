import React from "react";

function Categories(){
    return(
        <div className="container-categorias">
            <h1>Lista de categorias</h1>
        <table className="table caption-top">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Actividad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>PC GAMERS</td>
            <td>15</td>
            <td>Si</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>NOTEBOOKS</td>
            <td>20</td>
            <td>Si</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>COMPONENTES</td>
            <td>50</td>
            <td>Si</td>
            </tr>
        </tbody>
        </table>
        </div>
    )
}

export default Categories;