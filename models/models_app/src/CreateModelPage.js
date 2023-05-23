import React,{useState} from "react";
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Create } from './components/Create/Create.tsx';

function CreateModelPage()
{
  const [modelName, setModelName] = useState('');

  const handleNameChange = (nameValue) => {
    setModelName(nameValue);
    console.log(modelName);
  };
         return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Create onNameChange={handleNameChange} />
    </div>)
}
export default CreateModelPage;