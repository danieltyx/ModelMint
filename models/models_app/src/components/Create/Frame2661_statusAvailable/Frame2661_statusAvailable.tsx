import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Emoji_flagsIcon } from './Emoji_flagsIcon';
import classes from './Frame2661_statusAvailable.module.css';
import { InfoIcon } from './InfoIcon';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import DoneAllIcon from '@mui/icons-material/DoneAll';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    emoji_flags?: ReactNode;
    info?: ReactNode;
  };
  currentstatus: string;
}
/* @figmaId 178:5993 */
export const Frame2661_statusAvailable: FC<Props> = memo(function Frame2661_statusAvailable(props = { status: 'available'}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame2675}>
        <div className={classes.trainButton}>
          <div className={classes.frame2647}>
                <div>
            {props.currentstatus === "available" && <EmojiFlagsIcon />}
            {props.currentstatus === "training" && <HourglassTopIcon />}
            {props.currentstatus === "finished" && <DoneAllIcon />}
          </div>

            <div className={classes.emoji_flags}>
              {props.swap?.emoji_flags || <Emoji_flagsIcon className={classes.icon} />}
              
            </div>
            <div className={classes.train}>train</div>
          </div>
        </div>
        <div className={classes.frame2677}>
          <div className={classes.info}>{props.swap?.info || <InfoIcon className={classes.icon2} />}</div>
          <div className={classes.usesTheCSVFileAboveToFineTuneT}>
            Uses the CSV file above to fine-tune the selected base model.{' '}
          </div>
        </div>
      </div>
    </div>
  );
});
