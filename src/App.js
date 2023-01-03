
import { Route, Routes } from 'react-router';

import './App.css';
import Contacto from './componentes/Contacto';
import Encabezado from './componentes/Encabezado';
import Navegacion from './componentes/Navegacion';
import Pie from './componentes/Pie';
// import Home from './Pages/Home';
import ProductosTrabajo from './Pages/ProductosTrabajo';

function App() {
  return (
    <div className="App">
      <Encabezado/>
      <Navegacion/>
      <Routes>
        <Route path='/' element={<ProductosTrabajo/>}/>
      </Routes>
      <Contacto 
      parrafo='CONTACTO' 
      celular=' +57 321 9536176'
      correo=' luce_2358@hotmail.com'/>
      <Pie/>
     
    </div>
  );
}

export default App;
