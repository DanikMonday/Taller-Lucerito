import React from "react";
import { Link } from "react-router-dom";
import Bienvenida from "../componentes/Bienvenida";
import Producto from "../componentes/Producto";
import data from '../productos.json'

function DescripcionIndividual(props){
  return(
    <div className="sec-descr">
        <div className="img-prod-descr"> 
                <Producto
                    name={props.producto.name}
                    price={props.producto.price}
                />
        </div>
        <div className="cont-p-descr">
            <div><h2 className="tit-descr">DESCRIPCIÓN</h2></div>
            <p className="p-descr">{props.producto.description}</p> 
        </div>
    </div>



  );
}

export default DescripcionIndividual;

