import { React, useRef, useState } from 'react'
import { useAuth, setUidProfile } from './firebase';
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
  } catch (error) {
    alert("Error!");
  }
  setLoading(false);
}


  return (
    <div>
       {/*  <Form>
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
<div>Email logado : {currentUser?.email}</div>

<br /> */}

<h1>Insira Nome Completo</h1>

<Form>
<Form.Control ref={uidnameRef} placeholder={currentUser?.displayName}
  />
  <br />
    <Button onClick={setUidName} disabled={loading || !currentUser}>
    Alterar Nome
  </Button>
  <Link to="/">Home</Link>
</Form>




    </div>
  )
}
