import React from "react";
import DescripcionIndividual from "../componentes/DescripcionIndividual";
import data from '../productos.json'

function Descripcion(props){
  return(
    <div>
        {data.map(producto=><DescripcionIndividual
        producto={producto}/>)}
    </div>
  );
}

export default Descripcion;

