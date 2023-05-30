import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CreateButton_statusDefaultSize2 } from '../CreateButton_statusDefaultSize2/CreateButton_statusDefaultSize2';
import { IconCollection_iconBuyStatusDe } from '../IconCollection_iconBuyStatusDe/IconCollection_iconBuyStatusDe';
import classes from './CreateButton_statusDefaultBoug.module.css';
import { Local_mallIcon } from './Local_mallIcon';

interface Props {
  className?: string;
  classes?: {
    local_mall?: string;
    root?: string;
  };
}
/* @figmaId 456:5698 */
export const CreateButton_statusDefaultBoug: FC<Props> = memo(function CreateButton_statusDefaultBoug(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <CreateButton_statusDefaultSize2
        className={classes.createButton}
        swap={{
          iconCollection: (
            <IconCollection_iconBuyStatusDe
              className={classes.iconCollection}
              classes={{ local_mall: classes.local_mall }}
              swap={{
                local_mall: (
                  <div className={classes.local_mall}>
                    <Local_mallIcon className={classes.icon} />
                  </div>
                ),
              }}
            />
          ),
        }}
        text={{
          createAModel: <div className={classes.createAModel}>Buy now</div>,
        }}
      />
    </button>
  );
});
