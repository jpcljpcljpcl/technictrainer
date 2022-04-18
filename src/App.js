import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import Calend from './components/Calend/Calend';
import FormRegisto from './components/Forms/FormRegisto';
import Stack from 'react-bootstrap/Stack';
import 'react-calendar/dist/Calendar.css';
import Timebar from './components/Navbar/Timebar';
import FormAssiduidade from './components/Forms/FormAssiduidade';
import FormCalendario from './components/Forms/FormCalendario';
import FormClube from './components/Forms/FormClube';
import Home from './components/PageComponents/Home'
import Calendario from './components/PageComponents/Calendario'
import MeusClubes from './components/PageComponents/MeusClubes'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function App() {
  return (
    
    <div>

      <BrowserRouter>
<div>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="calendar" element={<Calendario />} />
      <Route path="clubs" element={<MeusClubes />} />
      {/*<Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/calendar" exact>
        <Calendario/>
      </Route>
      <Route path="/club" exact>
        <MeusClubes/>
      </Route>*/}
    </Routes>
  </div>
</BrowserRouter>
</div>
);
}
 {/*   */}