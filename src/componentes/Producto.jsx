import React from "react";
import AgregarCarrito from "./AgregarCarrito";



function Producto(){
  return(
  <div className="cada-prod"> 
      <div className="cont-prod">
            <h2 className="nom-prod">Bambú</h2>
            <img className="img-prod" src= '' alt="productibiris"/>
      </div>
      <div className="precio-prod">
            <p className="cop-prod">$200.000</p>
            <AgregarCarrito></AgregarCarrito>
      </div>
  </div>
  );
}

export default Producto;