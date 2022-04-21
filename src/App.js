import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-calendar/dist/Calendar.css';
import Home from './components/PageComponents/Home'
import Calendario from './components/PageComponents/Calendario'
import MeusClubes from './components/PageComponents/MeusClubes'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FormLogin from './FormLogin'
import ProtectedRoutes from './components/PageComponents/ProtectedRoutes'
import FormName from './FormName'
import { useAuth } from './firebase';
import { Button } from 'react-bootstrap';

export default function App() {
  const currentUser=useAuth();

  return (
    <div class="p-3 bg-dark text-white">
            <div>UID: {currentUser?.uid}</div>
            <div>Email: {currentUser?.email}</div>
            <div>Nome: {currentUser?.displayName}</div>
            <div><Button href="/setname">changename</Button></div>
<br />
<br />
<br />

      {/* <FormLogin/> */}
<br/>
<br/>
<br/>
<br/>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<FormLogin />} />
          <Route path="/setname" element={<FormName />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendario />} />
          <Route path="/clubs" element={<MeusClubes />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

{/*   */}
</div>
);
}
 