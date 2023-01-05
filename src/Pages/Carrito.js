import React , {useReducer} from "react";
import{initialState, ContadorCarrito} from "../componentes/ContadorCarrito"
import Producto from "../componentes/Producto";
import data from '../productos.json'

function Carrito(){
    // const [state, dispatch] = useReducer(ContadorCarrito, initialState);
    // const {productos,cart} = state;

    const añadirCarrito = ( id) => {
        console.log(id);
    };
    const removerCarrito = () => {};
    const limpiarCarrito = () => {}

  return(
    <div>
        {data.map((product) => <Producto key={product.id} data={product} 
        añadirCarrito={añadirCarrito}
        name={product.name}
        price={product.price}/>)}
        aqui los productos
    </div>
  );
}

export default Carrito;
