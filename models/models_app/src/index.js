import React,{useState} from 'react';
import ReactDOM from 'react-dom/client'
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

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>

{/* <WagmiConfig config={wagmiConfig}>

      <RainbowKitProvider chains={chains}> */}

    {/* <Web3authfunction/> */}
{/* <Walletlogin/> */}
     <Navbar/>
    <Grid/> 
{/* <WriteToFirestore/> */}
{/* <SignUpLogin/> */}

{/* </RainbowKitProvider>
    </WagmiConfig> */}
  </div>
);

