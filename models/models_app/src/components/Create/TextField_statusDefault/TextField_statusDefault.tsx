import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { SearchIcon } from './SearchIcon.tsx';
import classes from './TextField_statusDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    search?: boolean;
  };
  text?: {
    eGNameGPT?: ReactNode;
  };
}
/* @figmaId 178:4180 */
export const TextField_statusDefault: FC<Props> = memo(function TextField_statusDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.search && (
        <div className={classes.search}>
          <SearchIcon className={classes.icon} />
        </div>
      )}
      {props.text?.eGNameGPT != null ? props.text?.eGNameGPT : <div className={classes.eGNameGPT}>e.g. nameGPT</div>}
    </div>
  );
});
