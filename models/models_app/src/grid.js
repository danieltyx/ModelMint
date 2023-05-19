import React, { useState } from 'react';
import {GrAdd} from 'react-icons/gr';
import './App.css';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { ModelCard_statusDefault } from './components/ModelCard_statusDefault/ModelCard_statusDefault.tsx';
import { stringToBytes } from 'viem';
import ButtonDarkExample from './components/ModelCard_statusDefault/dropdownButton';
import NewModel from './Newmodel';

function Grid({onNewModel}) {
    const initialData = [
      { id: 1, title: 'GPT-3', description: 'GPT-3 is an autoregressive language model that uses deep learning to produce human-like text.' ,modelImage:'image-a'},
      { id: 2, title: 'GPT-4', description: 'GPT-4 is a larger and more advanced version of GPT-3 that can generate even more sophisticated text.',modelImage :'image-b' },
      { id: 3, title: 'ChatGPT', description: 'ChatGPT is a special version of the GPT model that is designed for generating conversational responses.' ,modelImage:'image-c'},
      { id: 4, title: 'BSGPT', description: 'BSGPT is purely BS' ,modelImage:'image-d'},
      // Add more items as needed
    ];
    const [data, setData] = useState(initialData);
    const [nextId, setNextId] = useState(5);
    

    function handleClick(){
            

      onNewModel(addNewGridItem);

    };

    const addNewGridItem = () => {
      const title = prompt('Enter title for new grid item:');
      const description = prompt('Enter description for new grid item:');
      setData([...data, { id: nextId, title, description }]);
      setNextId(nextId + 1);
    };

    // pass  back without actualling calling it






  
  
    const deleteGridItem = (id) => {
      setData(data.filter(item => item.id !== id));
    };
  
    const handleDelete = (id, data) => {
      console.log(id)
      console.log(data)
      if(data){
        deleteGridItem(id)
      }
    };
    return (
      <div>
        
 
      <div className="grid-container" >
        {data.map((item) => (
            <div>
              

              
              <div style={{ height: '50px' }}></div>
        <div style={{ width: '350px' }} className={`${resets.clapyResets} ${classes.root}`}>
        <ModelCard_statusDefault id={item.id} title={item.title} description={item.description} modelImage={item.modelImage} onDelete={handleDelete}/>
        
      </div>  
{/* 
          <div className="grid-item" key={item.id}>
            <button className="delete-button" onClick={() => deleteGridItem(item.id)}>X</button>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div> */}

          </div>
        ))}
        {/* <div className="grid-item add-new" onClick={addNewGridItem}>
          <h2><GrAdd></GrAdd></h2>
          <p>Click here to train a new fine-tune model</p>
        </div> */}

          
  
      </div>
      <div className='new-model-container-2'>
      <button  onClick={handleClick}>Create My Model</button>
      </div>
</div>
      
    );
  }
  
  export default Grid;