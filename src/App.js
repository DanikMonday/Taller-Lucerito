
import { Route, Routes } from 'react-router';
// import { HashRouter } from 'react-router-dom';
import './App.css';
import Contacto from './componentes/Contacto';
import Encabezado from './componentes/Encabezado';
import Navegacion from './componentes/Navegacion';
import Pie from './componentes/Pie';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      {/* <HashRouter> */}
      <Encabezado/>
      <Navegacion/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Contacto 
      parrafo='CONTACTO' 
      celular='+57 321 9536176'
      correo='luce_2358@hotmail.com'/>
      <Pie/>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
