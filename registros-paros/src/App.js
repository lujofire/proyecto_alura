import './assets/css/base.css'
import './assets/css/componentes/card.css'
import './assets/css/componentes/navbar.css'
import Header from './components/Header';
import Home from './rutas/Home';
import Policita from './rutas/Politica';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Syso from './rutas/Syso';
import Space from './rutas/Space';
import Page404 from './rutas/page404';
import Navbar from './components/Navbar';
import Sasson from './components/Sasson';
import Cashitas from './components/Cashitas';
import './assets/css/componentes/area.css';
import Frascos from './rutas/Frascos';
import Salsas from './rutas/Salsas';
import { useState } from 'react';
import { v4 as uuid } from "uuid";


function App() {
  const [produccion, setProduccion] = useState([{
    
    id: uuid(),
    foto: "https://github.com/harlandlohora.png",
    area: "FRASCOS",
    descripcion: "Instructor"
  },
  {
    id: uuid(),
    foto: "https://github.com/genesysaluralatam.png",
    area: "SALSAS",
    descripcion: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    foto: "https://github.com/JeanmarieAluraLatam.png",
    area: "ACEITUNAS",
    descripcion: "Instructora en Alura Latam"
  },
  { 
    id: uuid(),
    foto: "https://github.com/christianpva.png",
    area: "MASIPACK",
    descripcion: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    area: "FRITURAS",
    descripcion: "Dev FullStack"
  }])

  const [areas, setAreas] = useState ([
   
    { 
      id: uuid(),
      titulo: "FRASCOS",
      colorPrimario: "#57C278",
    },
    {
      id: uuid(),
      titulo: "SALSAS",
      colorPrimario: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "ACEITUNAS",
      colorPrimario: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "MASIPACK",
      colorPrimario: "#E06B69"
    },
    {
      id: uuid(),
      titulo: "FRITURAS",
      colorPrimario: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "SOBRES",
      colorPrimario: "#FFBA05",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29"
    }
  ])
    

  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/politica' element={<Policita />} />
      <Route path='/syso' element={<Syso />} />
      <Route path='/space' element={<Space />} />
      <Route path='/sasson' element={<Sasson />} />
      <Route path='/cashitas' element={produccion.map((producto) => <Cashitas 
       datos={producto}
       key ={producto.area}
       descripcion ={producto.descripcion}
       foto ={producto.foto}
       areas = {areas.filter(area => area.titulo === producto.descripcion)}
      />) 
      } 
      />
      <Route path='/frascos' element={<Frascos />} />
      <Route path='/salsas' element={<Salsas />} />
      <Route path='*' element={<Page404 />} />
      </Routes>
      <Navbar />
    </Router>
    
       
  );
  
}

export default App;
