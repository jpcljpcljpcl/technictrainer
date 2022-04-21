import { React, useRef, useState } from 'react'
import { signup, useAuth, logout, signin, setUidProfile } from './firebase';
import {Form,Button} from 'react-bootstrap';

export default function FormLogin() {
const [loading,setLoading]=useState(false);
const currentUser=useAuth();

const emailRef = useRef();
const passwordRef = useRef();
const uidnameRef = useRef();

function refreshPage() {
  window.location.reload(false);
}

async function handleSignup (){
  setLoading(true);
  try{
    await signup(emailRef.current.value, passwordRef.current.value);
  } catch {
    alert("Email ja resgistado");
  }
  setLoading(false);
}

async function handleSignin (){
  setLoading(true);
  try{
    await signin(emailRef.current.value, passwordRef.current.value);
  } catch {
    alert("Conta inexistente");
  }
  setLoading(false);
}

async function handleLogout(){
  setLoading(true);
    try {
     await logout();
    } catch (error) {
      alert("Erro no Logout!");
    }
  setLoading(false);
}


  return (
    <div>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Button onClick={handleSignin} variant="primary" disabled={loading || currentUser}>
    Sign In
  </Button>
  <Button onClick={handleSignup} variant="primary" disabled={loading || currentUser}>
    Sign Up
  </Button>
  <Button onClick={handleLogout} variant="primary" disabled={loading || !currentUser}>
    Log Out
  </Button>
</Form>




    </div>
  )
}
