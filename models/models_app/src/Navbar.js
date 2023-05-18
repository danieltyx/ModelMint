import React,{useState} from 'react';
import { FaCog } from 'react-icons/fa';
import WriteToFirestore from './WriteToFirestore';
// import { useRainbow } from '@rainbow-me/rainbow';
import { ConnectButton,getDefaultWallets } from '@rainbow-me/rainbowkit';
import MetaMaskSDK from '@metamask/sdk';

// const [modalIsOpen, setIsOpen] = useState(false);

const Navbar = () => {
  const [walletAddress,setWalletAddress] = useState('null');
  const MMSDK = new MetaMaskSDK();
  const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

    function handleConnect()
    {
      window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] })
      .then(() => {
        console.log('Wallet connected successfully.');
        setWalletAddress(window.ethereum.selectedAddress);
        console.log(window.ethereum.isConnected());
        WriteToFirestore('Users',walletAddress,{'created_time':new Date().toLocaleTimeString()});
      })
      .catch((error) => {
        console.error('Failed to connect wallet:', error);
      });
    }

    function handleDisconnect() {
      window.ethereum.on('disconnect', (error) => {
        console.log('Wallet disconnected successfully.');
      });
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleOpen = () => setModalOpen(true);
    function handleClose()
    {

      setModalOpen(false);
      WriteToFirestore('xxsxx','user_id',{'api':inputValue});

    } 
    const handleChange = (e) => setInputValue(e.target.value);

    function handleClick() {
        handleOpen();
    }

  var [modalIsOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://d30a90h19r65wj.cloudfront.net/kl.png" alt="Logo" />
        <h1>Model GPT Creator Dashboard</h1>
      </div>
      <div className="settings">
        <FaCog onClick={handleOpen}/>

        {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter your OpenAI API</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClose}>Save</button>
          </div>
        </div>
      )}
        
      </div>
      <div className="wallet-address-container">
      {walletAddress == 'null' ?  <button onClick={handleConnect}>Connect to MetaMask</button>:<h1>{walletAddress}</h1>}
     </div>
      {/* <button onClick={handleDisconnect}>Disconnect</button> */}
      {/* <div className='connect-button'>
       <ConnectButton onClick={(data) => {
        // console.log('accountStatus')  
        // console.log(accountStatus)
        handleConnect(data)
       }}/>
        </div> */}
    </nav>
  );
};

export default Navbar;
