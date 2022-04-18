import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-calendar/dist/Calendar.css';
import Home from './components/PageComponents/Home'
import Calendario from './components/PageComponents/Calendario'
import MeusClubes from './components/PageComponents/MeusClubes'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login'

export default function App() {
  return (
    <div class="p-3 bg-dark text-white">
      <BrowserRouter>
<div>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="calendar" element={<Calendario />} />
      <Route path="clubs" element={<MeusClubes />} />
    </Routes>
  </div>
</BrowserRouter>


{/*   */}
</div>
);
}
 