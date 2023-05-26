import React, { useState, useEffect } from "react";
import { setCurrentUserWalletAddress, getCurrentUserWalletAddress } from './globalVariable';
import './GlobalNavbar.css';
import { TextField, Input } from '@mui/material';
import WriteToFirestore from './firebaseFunctions/WriteToFirestore';

import ModelGPTLogo from './images/ModelGPTLogo.png';
import connectLogo from './images/connect.png';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import firebase from "./firebaseFunctions/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import 'firebase/firestore';
import ReadFromFirestoreAll from './firebaseFunctions/ReadFromFirestoreAll';
import MetaMaskSDK from '@metamask/sdk';

const db = firebase.firestore();


function GlobalNavbar() {

    const [walletAddress, setWalletAddress] = useState('null');
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const MMSDK = new MetaMaskSDK();
    const ethereum = MMSDK.getProvider();



    function handlePopupInputChange(event) {
        setInputValue(event.target.value);
      }
    
      function handlePopupSubmit() {
        // Do something with the input value
        console.log(inputValue);
        setShowPopup(false);
      }

      
    async function handleConnect() {
        await window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] })
            .then(() => {
                console.log('Wallet connected successfully.');
                setWalletAddress(window.ethereum.selectedAddress);
                console.log(window.ethereum.isConnected());
                // console.log(walletAddress)
                // console.log(window.ethereum.selectedAddress)

            }).then(() => {
                setCurrentUserWalletAddress(window.ethereum.selectedAddress);
                console.log(getCurrentUserWalletAddress());
                WriteToFirestore('Users', window.ethereum.selectedAddress, { 'created_time': new Date().toLocaleTimeString() });
            }).then(() => {
                setShowPopup(true);
            })

            .catch((error) => {
                console.error('Failed to connect wallet:', error);
            });


    }
    useEffect(() => {
        const storedWalletAddress = localStorage.getItem('walletAddress');
        if (storedWalletAddress) {
            setCurrentUserWalletAddress(storedWalletAddress);
        }
    }, []);

    return (
        <div className="global-navbar-container">
            <div className="global-navbar-container2">

                {/* <h1>ModelGPT</h1>
            <h2>Dashboard</h2>  */}

                {/* when img1 onClicked link to /marketplace */}
                <a href="/marketplace">
                    <img className="img1" src={ModelGPTLogo} alt="Logo" style={{ display: 'inline-block', padding: '0', marginLeft: '300px', lineHeight: '0' }} />
                </a>
                <div className="search-bar">
                    <input type="text" placeholder="Search Models" style={{
                        backgroundColor: 'transparent',
                        width: '500px', borderColor: 'transparent',
                        borderWidth: '0px', fontSize: '16px',
                        color: "white",
                        opacity: "0.7", outline: 'none'
                    }} />
                </div>
                {(getCurrentUserWalletAddress() != null) ? (
                    // display the first 4 and last 4 digits of the wallet address
                    <div >
                        <a href="/models"> <h1 className="creator-space">Creator Space</h1></a>


                        {/* <p>{getCurrentUserWalletAddress().substring(0, 4) + "..." + getCurrentUserWalletAddress().substring(getCurrentUserWalletAddress().length - 4)}</p> */}
                    </div>
                ) : (<img className="img2" src={connectLogo} onClick={handleConnect} alt="Logo" />)}

                {showPopup && (
                    <div>
                        <input type="text" value={inputValue} onChange={handlePopupInputChange} />
                        <button onClick={handlePopupSubmit}>Submit</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default GlobalNavbar;