import React from "react";

function Categories(props){
    return(
       <>
       <tbody>
        <tr>
        <th scope="row">1</th>
        <td>PC GAMERS</td>
        <td>{props.pc_gamer}</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>NOTEBOOKS</td>
        <td>{props.notebooks}</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>COMPONENTES</td>
        <td>{props.componentes}</td>
        </tr>
        </tbody>
       </>
        
        
    )
}

export default Categories;