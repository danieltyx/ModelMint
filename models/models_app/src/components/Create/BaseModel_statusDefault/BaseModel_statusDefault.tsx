import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ColorfulModelNameLogo_modelC } from '../ColorfulModelNameLogo_modelC/ColorfulModelNameLogo_modelC.tsx';
import classes from './BaseModel_statusDefault.module.css';
import { FrameIcon } from './FrameIcon.tsx';

interface Props {
  className?: string;
  swap?: {
    colorfulModelNameLogo?: ReactNode;
  };
  text?: {
    veryCapableButFasterAndLowerCo?: ReactNode;
  };
}
/* @figmaId 163:2237 */
export const BaseModel_statusDefault: FC<Props> = memo(function BaseModel_statusDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame2663}>
        {props.swap?.colorfulModelNameLogo || <ColorfulModelNameLogo_modelC />}
        <div className={classes.frame}>
          <FrameIcon className={classes.icon} />
        </div>
      </div>
      {props.text?.veryCapableButFasterAndLowerCo != null ? (
        props.text?.veryCapableButFasterAndLowerCo
      ) : (
        <div className={classes.veryCapableButFasterAndLowerCo}>
          Very capable, but faster and lower cost than Davinci.
        </div>
      )}
    </div>
  );
});
