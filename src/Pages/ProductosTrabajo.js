
import '../App';
import Bienvenida from '../componentes/Bienvenida';
import Producto from '../componentes/Producto';
import data from '../productos.json'

function ProductosTrabajo(props) {
  return (
    <section className="sec-prod">
      <Bienvenida
        titulo='
         Ropa de Trabajo'
        /> 
      <div className='ProductosTrabajo'>
        {data.map(producto=>
            <Producto
                name={producto.name}
                price={producto.price}
            />
        )}
        
      </div>
    </section>
  );
}

export default ProductosTrabajo;
