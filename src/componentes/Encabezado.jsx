import React from "react";

function Encabezado(){
  return(
    <div className="cont-enc">
      <img className="img-enc" src={require("../imagenes/logodef.png")} alt="logo"/>
    </div>
  );
}

export default Encabezado;