import { React, useRef, useState } from 'react'
import { useAuth, setUidProfile, adicionarUser, carregarClube } from './firebase';
import {Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FormName() {
const [loading,setLoading]=useState(false);
const currentUser=useAuth();

const uidnameRef = useRef();

function setUidName(){
  setLoading(true);
  try{
    setUidProfile(uidnameRef.current.value);
    adicionarUser(currentUser.uid,uidnameRef.current.value);
    carregarClube("Default",currentUser.uid);
  } catch (error) {
    alert("Error!");
  }
  setLoading(false);
}


  return (
    <div>

<h1>Insira Nome Completo</h1>

<Form>
<Form.Control ref={uidnameRef} placeholder={currentUser?.displayName}
  />
  <br />
    <Button onClick={setUidName} disabled={loading || !currentUser}>
    Guardar
  </Button>
  <Link to="/">Home</Link>
</Form>




    </div>
  )
}
