import React from "react";
import { Link } from "react-router-dom";

function Navegacion(){
  return(
   <div className="cont-nav">
      <div >
        <Link to="/" className="ini-nav">INICIO</Link>
      </div>
      <div >
        <Link to="/ProductosTrabajo" className="pro-nav">PRODUCTOS</Link>
      </div>
      <div>
        <img className="img-cart" src={require("../imagenes/cartb.png")}alt="carrito" />
      </div>
   </div>
  );
}

export default Navegacion;

