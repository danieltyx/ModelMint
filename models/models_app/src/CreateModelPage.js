import React from "react";
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Create } from './components/Create/Create.tsx';

function CreateModelPage()
{
         return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Create />
    </div>)
}
export default CreateModelPage;