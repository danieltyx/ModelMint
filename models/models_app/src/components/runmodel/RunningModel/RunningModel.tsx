import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Auto_read_playIcon } from './Auto_read_playIcon';
import { Content_copy_statusDefault } from './Content_copy_statusDefault/Content_copy_statusDefault';
import { Frame431Icon } from './Frame431Icon';
import { Frame_statusDefault } from './Frame_statusDefault/Frame_statusDefault';
import { PromptInputComplete_promptDefa } from './PromptInputComplete_promptDefa/PromptInputComplete_promptDefa';
import classes from './RunningModel.module.css';
import { Thumb_up_statusDefault } from './Thumb_up_statusDefault/Thumb_up_statusDefault';
import { UnionIcon } from './UnionIcon';

interface Props {
  className?: string;
  modelName?: string;
  modelDescription?: string;
  modelId?: string;
  modelcreatedtime?: string;
}
/* @figmaId 487:5630 */
export const RunningModel: FC<Props> = memo(function RunningModel(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.nikuowwi_large_dark_chamber_wi}></div>
      <div className={classes.nikuowwi_website_UI_background}></div>
      <div className={classes.frame431}>
        <Frame431Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle338}></div>
      <div className={classes.union}>
        <UnionIcon className={classes.icon3} />
      </div>
      <div className={classes.prompt}>Prompt</div>
      <div className={classes.rectangle336}></div>
      <div className={classes.anOpenCityIsACityThatHasBeenDe}>
        An open city is a city that has been declared neutral and is not defended against attack. This usually occurs
        when the defending forces realize they cannot hold the city against the attacking forces and decide to spare the
        civilian population from the horrors of urban warfare.
      </div>
      <div className={classes.frame2733}>
        <div className={classes.output}>Output</div>
      </div>
      <div className={classes.frame2742}>
        <Thumb_up_statusDefault classes={{ thumb_up: classes.thumb_up }} />
        <Content_copy_statusDefault classes={{ content_copy: classes.content_copy }} />
        <Frame_statusDefault />
      </div>
      <PromptInputComplete_promptDefa
        className={classes.promptInputComplete}
        classes={{ auto_read_play: classes.auto_read_play }}
        swap={{
          auto_read_play: (
            <div className={classes.auto_read_play}>
              <Auto_read_playIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.testRun}>Test run</div>
      <div className={classes.frame2811}>
        <div className={classes.voxellaAI}>{props.modelName}</div>
        <div className={classes.writerAICapableOfAnyTopicGenre}>
          {props.modelDescription}
        </div>
      </div>
      <div className={classes.frame2817}>
        <div className={classes.frame2815}>
          <div className={classes.modelId}>Model id</div>
          <div className={classes.ftAsdhfhsduifhuasdhfodhfiodsjf}>{props.modelId}</div>
        </div>
        <div className={classes.frame2816}>
          <div className={classes.createdTime}>Created time</div>
          <div className={classes._202325233545}>{props.modelcreatedtime}</div>
        </div>
      </div>
      <div className={classes.rectangle345}></div>
    </div>
  );
});
