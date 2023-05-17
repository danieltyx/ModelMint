import React,{useState} from 'react';
import { FaCog } from 'react-icons/fa';
import WriteToFirestore from './WriteToFirestore';

// const [modalIsOpen, setIsOpen] = useState(false);

const Navbar = () => {
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

    </nav>
  );
};

export default Navbar;
