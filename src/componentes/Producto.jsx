import React from "react";
import AgregarCarrito from "./AgregarCarrito";



function Producto(props){
  return(
  <div className="cada-prod"> 
      <div className="cont-prod">
            <h2 className="nom-prod">{props.name}</h2>
            <img className="img-prod" src= 'https://picsum.photos/180' alt="productibiris"/>
      </div>
      <div className="precio-prod">
            <p className="cop-prod">${props.price}</p>
            <AgregarCarrito></AgregarCarrito>
      </div>
  </div>
  );
}

export default Producto;