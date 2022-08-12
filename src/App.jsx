
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Publicidad from './component/contenedor/publicidad/Publicidad';
import Nav from './component/contenedor/nav/Nav';


function App() {
  return (
    <BrowserRouter>
    <Publicidad/>
      <Nav/>
      <Routes>
        {/* <Route path='/home' element={<Fecht/>} /> */}
        {/* <Route path='/' element={<Fecht/>} /> */}
        {/* <Route path='/promesa' element={<PromiseContainer/>}/> */}
        {/* <Route path='/filtro/:category' element={<Fecht/>}/> /     */}
        {/* <Route path='/detalle/:id' element={<DetalleContainer/>} /> */}
        {/* <Route path='/filtroinput' element={<Buscador/>}/> */}
        {/* <Route path='/error' element={<Error/>} /> */}
        {/* <Route path='*' element={<Navigate to='/error'/>}/> */}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
