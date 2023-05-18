import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { FrameIcon2 } from './FrameIcon2.tsx';
import { FrameIcon } from './FrameIcon.tsx';
import classes from './ModelCard_statusDefault.module.css';
import image_a from './model_images/a.jpg'
import image_b from './model_images/b.jpg'
import image_c from './model_images/c.jpg'
import image_d from './model_images/d.jpg'

import { ModelNameLogo_modelVariant2 } from './ModelNameLogo_modelVariant2/ModelNameLogo_modelVariant2.tsx';
import React from 'react';
interface Props {
  className?: string;
  title: string;
  description: string;
  modelImage: string;
}
/* @figmaId 7:288 */
export const ModelCard_statusDefault: FC<Props> = memo(function ModelCard_statusDefault({title, description,modelImage}: Props) {
  
  let imageSrc;
  if (modelImage === 'image-a') {
    imageSrc = image_a;
  } else if (modelImage === 'image-b') {
    imageSrc = image_b;
  } else if (modelImage === 'image-c') {
    imageSrc = image_c;
  } else if (modelImage === 'image-d') {
    imageSrc = image_d;
  } 

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.gPT3IsTheLanguageModelIMCurren}>
        {description}
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
      <div className={classes.modelNameGPT3}>{title}</div>
      {/* insert image in model_image folder */}
      <div className={classes.modelImage}>
    
     
      {imageSrc==image_a && <img src={imageSrc} alt='model' width='60' height='40'  / >}
      {imageSrc==image_b && <img src={imageSrc} alt='model' width='100' height='40'  / >}
      {imageSrc==image_c && <img src={imageSrc} alt='model' width='70' height='40'  / >}
      {imageSrc==image_d && <img src={imageSrc} alt='model' width='90' height='40'  / >}
      </div>

    

      {/* <ModelNameLogo_modelVariant2 className={classes.modelNameLogo} /> */}
    </div>
  );
});
