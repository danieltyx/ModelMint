import React from 'react';
import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/runmodel/_resets.module.css';
import { RunningModel } from './components/runmodel/RunningModel/RunningModel';

function useModel() {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
        <RunningModel />
      </div>
    )
}

export default useModel;