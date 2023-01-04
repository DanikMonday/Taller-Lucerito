import React from "react";
import { Link } from "react-router-dom";
import Bienvenida from "../componentes/Bienvenida";
import DescripcionIndividual from "../componentes/DescripcionIndividual";
import Producto from "../componentes/Producto";
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

