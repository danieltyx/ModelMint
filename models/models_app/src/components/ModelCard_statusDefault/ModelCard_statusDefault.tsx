import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { FrameIcon2 } from './FrameIcon2.tsx';
import { FrameIcon } from './FrameIcon.tsx';
import classes from './ModelCard_statusDefault.module.css';


import { ModelNameLogo_modelVariant2 } from './ModelNameLogo_modelVariant2/ModelNameLogo_modelVariant2.tsx';
import React from 'react';
interface Props {
  className?: string;
}
/* @figmaId 7:288 */
export const ModelCard_statusDefault: FC<Props> = memo(function ModelCard_statusDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.gPT3IsTheLanguageModelIMCurren}>
        GPT-3 is the language model I’m currently writing a nonsense...
      </div>
      <div className={classes.frame5}>
        <div className={classes.frame}>
          <FrameIcon className={classes.icon} />
        </div>
        <div className={classes.frame4}>
          <div className={classes.frame2}>
            <FrameIcon2 className={classes.icon2} />
          </div>
          <div className={classes.run}>Run</div>
        </div>
      </div>
      <div className={classes.modelNameGPT3}>Model name GPT3</div>
      <ModelNameLogo_modelVariant2 className={classes.modelNameLogo} />
    </div>
  );
});
