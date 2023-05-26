import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';
import classes from './App.module.css';
import resets from './components/Mint/_resets.module.css';
import { MintModel } from './components/Mint/MintModel/MintModel';

interface Props {
  className?: string;
}
export const MintModelPage: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MintModel />
    </div>
  );
});

export default MintModelPage;
