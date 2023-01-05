
import '../App';
import Bienvenida from '../componentes/Bienvenida';
import Producto from '../componentes/Producto';
import data from '../productos.json'

function ProductosTrabajo(props) {
  const añadirCarrito = ( id) => {
    console.log(id);
};
  return (
    <section className="sec-prod">
      <Bienvenida
        titulo='
         Ropa de Trabajo'
        /> 
      <div className='ProductosTrabajo'>
        {data.map(producto=>
            <Producto
            key={producto.id} data={producto} 
                añadirCarrito={añadirCarrito}
                name={producto.name}
                price={producto.price}
            />
        )}
        
      </div>
    </section>
  );
}

export default ProductosTrabajo;
