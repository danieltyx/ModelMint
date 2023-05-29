import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';
import classes from './App.module.css';
import resets from './components/Mint/_resets.module.css';
import { MintModel } from './components/Mint/MintModel/MintModel';
import { useHistory } from 'react-router-dom';


interface Props {
  className?: string;
}
export const MintModelPage: FC<Props> = memo(function App(props = {}) {
 
  const history = useHistory();
    function handleMint() {
    console.log("mint clikced");
    history.push('/models');
    //Nick: start your code here 
  }
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MintModel onMint={handleMint}/>
    </div>
  );
});

export default MintModelPage;
