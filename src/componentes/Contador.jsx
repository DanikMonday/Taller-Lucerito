import React, {useReducer} from "react";
import { BsTrashFill} from "react-icons/bs";

const initialState = {cantidad:0};

const TYPES = {
  INCREMENTO: "INCREMENTO",
  DECREMENTO: "DECREMENTO",
  RESET: "RESET"
}
// la funcion reducer recibe 2 parametros, state(estado anterior) y
// action(contiene el tipo de accion)
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENTO":
      return {cantidad: state.cantidad + 1};
    case "DECREMENTO":
      return {cantidad: state.cantidad - 1}
    default:
      // retorna el nuevo estado despues de ejecutar la funcion
      return state;
  }
  
}

function Contador(props){

 // El hook useReducer nos permite usar la funcion reducer 
//  para manipular el estado de una variable
  const [state, dispatch] = useReducer(reducer, initialState)
 // dispatch es la funcion que actualiza el estado, recibe el tipo de accion
  const adicionar = () => dispatch({type: TYPES.INCREMENTO});
  const sustraer = () => dispatch({type: TYPES.DECREMENTO});

  return(
   <div className="cont-conta">
          <p><b>Talla_{props.talla} </b></p>
          <p><button className="btn-sus" onClick={sustraer}>-</button></p>
          <p>{state.cantidad}</p>
          <p><button className="btn-adi" onClick={adicionar}>+</button></p>
          <button className="btn-basu" > <BsTrashFill/></button>
         
          
   </div>
  );
}

export default Contador;