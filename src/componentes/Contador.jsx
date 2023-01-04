import React, {useState} from "react";


function Contador(props){

  const [cantidad, setCantidad]= useState(0);
  const adicionar = () => setCantidad(cantidad + 1);
  const sustraer = () => setCantidad(cantidad - 1);

  return(
   <div className="cont-conta">
          <p><b>Talla </b>  </p>
          <p><button className="btn-sus" onClick={sustraer}>-</button></p>
          <p>{cantidad}</p>
          <p><button className="btn-adi" onClick={adicionar}>+</button></p>
         
          
   </div>
  );
}

export default Contador;