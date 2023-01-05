import React, {useReducer, useState} from "react";

const initialState = {cantidad:0};

function reducer(state, action) {
  switch (action.type) {
    case "incremento":
      return {cantidad: state.cantidad + 1};
    case "decremento":
      return {cantidad: state.cantidad - 1}
    default:
      return state;
  }
  
}

function Contador(props){

 // El hook useReducer nos permite usar la funcion reducer 
//  para manipular el estado de una variable
  const [state, dispatch] = useReducer(reducer, initialState)
 // dispatch es la funcion que actualiza el estado
  const adicionar = () => dispatch({type:"incremento"});
  const sustraer = () => dispatch({type: "decremento"});

  return(
   <div className="cont-conta">
          <p><b>Talla_{props.talla} </b></p>
          <p><button className="btn-sus" onClick={sustraer}>-</button></p>
          <p>{state.cantidad}</p>
          <p><button className="btn-adi" onClick={adicionar}>+</button></p>
         
          
   </div>
  );
}

export default Contador;