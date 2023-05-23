import { memo , useState} from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BaseModel_statusDefault } from './BaseModel_statusDefault/BaseModel_statusDefault';
import { ColorfulModelNameLogo_modelA } from './ColorfulModelNameLogo_modelA/ColorfulModelNameLogo_modelA';
import { ColorfulModelNameLogo_modelB } from './ColorfulModelNameLogo_modelB/ColorfulModelNameLogo_modelB';
import { ColorfulModelNameLogo_modelD } from './ColorfulModelNameLogo_modelD/ColorfulModelNameLogo_modelD';
import classes from './Create.module.css';
import { Emoji_flagsIcon } from './Emoji_flagsIcon';
import { Frame11Icon } from './Frame11Icon';
import { Frame2661_statusAvailable } from './Frame2661_statusAvailable/Frame2661_statusAvailable';
import { InfoIcon } from './InfoIcon';
import { SelectACSVFile_statusDefault } from './SelectACSVFile_statusDefault/SelectACSVFile_statusDefault';
import { TextField_statusDefault } from './TextField_statusDefault/TextField_statusDefault';
import { Upload_fileIcon } from './Upload_fileIcon';

interface Props {
  className?: string;
  hide?: {
    search?: boolean;
    search2?: boolean;
  };
}
/* @figmaId 171:3222 */
export const Create: FC<Props> = memo(function Create(props = {}) {

  const [modelName, setmodelName] = useState("");

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setmodelName(event.target.value);
  };


  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame2659}>
        <div className={classes.frame2650}>
          <div className={classes.frame2654}>
            <div className={classes.nameYourModel}>Name your model</div>
          </div>
          <TextField_statusDefault
          
            hide={{
              search: true,
            }}
          />
        </div>
        <div className={classes.frame26592}>
          <div className={classes.frame26542}>
            <div className={classes.description}>Description</div>
          </div>
          <TextField_statusDefault
            className={classes.textField}
            hide={{
              search: true,
            }}
            text={{
              eGNameGPT: (
                <div className={classes.eGNameGPT}>
                  <div className={classes.textBlock}>
                    Describe the functions, creative ways, and ideal scenarios of using this model.
                  </div>
                  <div className={classes.textBlock2}>
                    <p></p>
                  </div>
                  <div className={classes.textBlock3}>
                    <p></p>
                  </div>
                </div>
              ),
            }}
          />
        </div>
        <div className={classes.frame2658}>
          <div className={classes.selectABaseModel}>Select a base model</div>
          <div className={classes.frame2657}>
            <div className={classes.frame2656}>
              <BaseModel_statusDefault
                swap={{
                  colorfulModelNameLogo: <ColorfulModelNameLogo_modelA />,
                }}
                text={{
                  veryCapableButFasterAndLowerCo: (
                    <div className={classes.veryCapableButFasterAndLowerCo}>
                      Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.
                    </div>
                  ),
                }}
              />
              <BaseModel_statusDefault
                swap={{
                  colorfulModelNameLogo: <ColorfulModelNameLogo_modelB />,
                }}
                text={{
                  veryCapableButFasterAndLowerCo: (
                    <div className={classes.veryCapableButFasterAndLowerCo2}>
                      Capable of straightforward tasks, very fast, and lower cost.
                    </div>
                  ),
                }}
              />
            </div>
            <div className={classes.frame26572}>
              <BaseModel_statusDefault />
              <BaseModel_statusDefault
                swap={{
                  colorfulModelNameLogo: (
                    <ColorfulModelNameLogo_modelD
                      swap={{
                        frame11: <Frame11Icon className={classes.icon} />,
                      }}
                    />
                  ),
                }}
                text={{
                  veryCapableButFasterAndLowerCo: (
                    <div className={classes.veryCapableButFasterAndLowerCo3}>
                      Most capable GPT-3 model. Cover all tasks the other models do, with higher quality.
                    </div>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <div className={classes.frame2649}>
          <div className={classes.uploadYourCSVFile}>Upload your CSV file</div>
          <SelectACSVFile_statusDefault
            swap={{
              upload_file: <Upload_fileIcon className={classes.icon2} />,
            }}
            text={{
              selectFileCSV: <div className={classes.selectFileCSV}>Select file (.csv)</div>,
            }}
          />
        </div>
      </div>
      <Frame2661_statusAvailable
        className={classes.frame2661}
        swap={{
          emoji_flags: <Emoji_flagsIcon className={classes.icon3} />,
          info: <InfoIcon className={classes.icon4} />,
        }}
      />
      <div className={classes.modelCard}>
        <div className={classes.createATextBasedModel}>Create a text-based model </div>
        <div className={classes.trainingCanOnlyStartOnceAllThe}>
          Training can only start once all the following blanks are filled.{' '}
        </div>
      </div>
    </div>
  );
});
