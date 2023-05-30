import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CreateButton_statusDefaultSize2 } from '../CreateButton_statusDefaultSize2/CreateButton_statusDefaultSize2';
import { IconCollection_iconBuyStatusDe } from '../IconCollection_iconBuyStatusDe/IconCollection_iconBuyStatusDe';
import classes from './CreateButton_statusDefaultBoug.module.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import zokshUrl from '../../../../zoksh';

interface Props {
  className?: string;
  classes?: {
    local_mall?: string;
    root?: string;
  };
}
/* @figmaId 456:5698 */
export const CreateButton_statusDefaultBoug: FC<Props> = memo(function CreateButton_statusDefaultBoug(props = {}) {
  function handleBuy(){
    // console.log("Buy button clicked");
    //start payment process here
    // how to jump to a url
    console.log("zokshUrl: ", zokshUrl());
    window.location.href = zokshUrl();
  }
  return (
    <button onClick={handleBuy} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <CreateButton_statusDefaultSize2
        className={classes.createButton}
        swap={{
          iconCollection: (
            <IconCollection_iconBuyStatusDe
              className={classes.iconCollection}
              classes={{ local_mall: classes.local_mall }}
              swap={{
                local_mall: (
                  <div className={classes.local_mall} style={{'color': 'rgb(22,37,43)'}} >
                  <LocalMallIcon/>
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
