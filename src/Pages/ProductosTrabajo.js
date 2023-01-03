
import '../App';
import Bienvenida from '../componentes/Bienvenida';
import Producto from '../componentes/Producto';


function ProductosTrabajo(props) {
  return (
    <section className="sec-prod">
      <Bienvenida
        titulo='PRODUCTOS:
         Ropa de Trabajo'
        /> 
      <div className='ProductosTrabajo'>
        <Producto/> 
        <Producto/> 
        <Producto/> 
        <Producto/>
        <Producto/> 
        <Producto/>  
      </div>
    </section>
  );
}

export default ProductosTrabajo;
