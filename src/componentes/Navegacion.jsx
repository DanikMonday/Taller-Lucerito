import React from "react";

function Navegacion(){
  return(
   <div className="cont-nav">
      <div className="ini-nav">INICIO</div>
      <div className="pro-nav">PRODUCTOS</div>
      <div>
        <img className="img-cart" src={require("../imagenes/cartb.png")}alt="carrito" />
      </div>
   </div>
  );
}

export default Navegacion;

