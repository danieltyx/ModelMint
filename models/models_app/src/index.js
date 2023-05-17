import React,{useState} from 'react';
import ReactDOM from 'react-dom/client'
import Grid from './grid.js'
import Navbar from './Navbar.js';
import SignUpLogin from './SignUpLogin.js';
import WriteToFirestore from './WriteToFirestore.js';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>
    {/* <Navbar/>
    
    <Grid/> */}
<WriteToFirestore/>
{/* <SignUpLogin/> */}
  </div>
);

