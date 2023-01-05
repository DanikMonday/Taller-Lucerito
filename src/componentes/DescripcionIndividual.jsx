import React from "react";
import Producto from "../componentes/Producto";
import Contador from "../componentes/Contador";
import AgregarCarrito from "./AgregarCarrito";
import { BsTabletLandscape } from "react-icons/bs";
import data from '../productos.json'

function DescripcionIndividual(props){
  return(
    <div className="sec-descr-gen">
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
        <div className="sec-conta">
            <div>{props.producto.talla.mujer.map(t=><Contador talla={t}/>)}</div><br/>
            <div>{props.producto.talla.hombre.map(t=><Contador talla={t}/>)}</div>
        </div>
    </div>
   


  );
}

export default DescripcionIndividual;

