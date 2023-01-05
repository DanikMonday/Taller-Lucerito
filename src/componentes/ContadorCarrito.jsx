
const TYPES = {
    INCREMENTO: "INCREMENTO",
    DECREMENTO: "DECREMENTO",
    RESET: "RESET",
    CLEAR_CART:"CLEAR_CART"
  };

  export const initialState = {
    productos:[
        {id:1 , name:"cosa1", price:"100"},
        {id:2 , name:"cosa1", price:"200"},
        {id:3 , name:"cosa1", price:"300"},
        {id:4 , name:"cosa4", price:"400"},
    ],
    cart:[],
  };

  export function ContadorCarrito(state, action) {
    switch (action.type) {
      case "INCREMENTO":
        return {cantidad: state.cantidad + 1};
      case "DECREMENTO":
        return {cantidad: state.cantidad - 1};
      case "RESET":
        return initialState;
      case "CLEAR":
        return {cantidad: state.cantidad - 3};
      default:
        // retorna el nuevo estado despues de ejecutar la funcion
        return state;
    }
    
  }

