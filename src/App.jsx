
import './App.css';
import PromiseContainer from './component/promiseContainer/PromiseContainer';
import Fecht from './fecht/Fecht';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './component/nav/Nav';
import Publicidad from './component/publicidad/Publicidad';
import DetalleContainer from './detalle/DetalleContainer';
// import Footer from './component/footer/Footer';
import Error from './component/error/Error';
import Buscador from './component/buscador/Buscador';


function App() {
  const infor='esta es la infor del componente'

  return (
    //se usa BrowserRouter para crear rutas de navegacion 
    ///filtro/:category se define el dato dinamico con :
    
    <BrowserRouter>
    <Publicidad/>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Fecht/>} />
        {/* <Route path='/' element={<Fecht/>} /> */}
        <Route path='/promesa' element={<PromiseContainer/>}/>
        <Route path='/filtro/:category' element={<Fecht/>}/> /    
        <Route path='/detalle/:id' element={<DetalleContainer/>} />
        <Route path='/filtroinput' element={<Buscador/>}/>
        <Route path='/error' element={<Error/>} />
        <Route path='*' element={<Navigate to='/error'/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
