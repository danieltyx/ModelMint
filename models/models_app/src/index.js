import React,{useState} from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Import the BrowserRouter, Switch, and Route components
import Grid from './grid.js'
import Navbar from './Navbar.js';
import SignUpLogin from './SignUpLogin.js';
import WriteToFirestore from './WriteToFirestore.js';
import firebase from "./firebaseConfig";
import 'firebase/firestore';
import Web3authfunction from './web3authPortal.js'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Walletlogin } from './rainbowlogin.js';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import NewPage from './marketplace/Newpage.js'; // Import the NewPage component
import NewModel from './Newmodel.js';
import "@fontsource/red-rose"
import ModelMainPage from './ModelMainPage.js';
import GlobalNavbar from './GlobalNavbar.js';
import CreateModelPage from './CreateModelPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div>
<BrowserRouter> 
     {/* <Navbar/> */}
     <GlobalNavbar/>
     <Switch> 
        <Route exact path="/" component={ModelMainPage} />
        <Route path="/marketplace" component={NewPage}/> 
        <Route path="/create-model" component={CreateModelPage}/>
      </Switch>
      </BrowserRouter>
      </div>

);

