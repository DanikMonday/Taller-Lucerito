import React from "react";
import { Link } from "react-router-dom";
import AgregarCarrito from "./AgregarCarrito";


function Producto(props){
  return(
  <div className="cada-prod"> 
      <div className="cont-prod">
            <h2 className="nom-prod">{props.name}</h2>
            <div><Link to="/Descripcion" className="cont-img-prod"><img className="img-prod" src= 'https://picsum.photos/180' alt="productibiris"/></Link></div>
            
      </div>
      <div className="precio-prod">
            <p className="cop-prod">${props.price} COP</p>
            <AgregarCarrito></AgregarCarrito>
      </div>
  </div>
  );
}

export default Producto;