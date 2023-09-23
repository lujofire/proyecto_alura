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
import Sasson from './rutas/Sasson';
import Cashitas from './rutas/Cashitas';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/politica' element={<Policita />} />
      <Route path='/syso' element={<Syso />} />
      <Route path='/space' element={<Space />} />
      <Route path='/sasson' element={<Sasson />} />
      <Route path='/cashitas' element={<Cashitas />} />
      <Route path='*' element={<Page404 />} />
      </Routes>
      <Navbar />
  
    </Router>
    
    
    
   
        
  );
  
}

export default App;
