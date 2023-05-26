import React,{useState} from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Import the BrowserRouter, Switch, and Route components
import NewPage from './marketplace/Newpage.js'; // Import the NewPage component
import ModelMainPage from './ModelMainPage.js';
import GlobalNavbar from './GlobalNavbar.js';
import CreateModelPage from './CreateModelPage.js';
import useModel from './useModel.js';
import Setup from './Setup.js';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<div>
  <Setup/>
<BrowserRouter> 
     {/* <Navbar/> */}
     <Switch>
        <Route exact path="/models" component={ModelMainPage} />
        <Route path="/marketplace" component={NewPage}/> 
        <Route path="/create-model" component={CreateModelPage}/>
        <Route path="/try-model" component={useModel}/>
      </Switch>
      </BrowserRouter>
      </div>

);

