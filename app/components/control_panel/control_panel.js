import React, {Component} from 'react';
import styles from './control_panel.scss';
import ButtonPanel from '../button_panel/button_panel.js';
import VolumePanel from '../volume_panel/volume_panel.js';
import VolumeBar from '../volume_bar/volume_bar.js';
import ProgressBar from '../progress_bar/progress_bar.js';

export default class ControllPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {width, isPlaying, isPause, isLoading, songCount, isShowList,
            onPlayBtnClick, onStopBtnClick, onPrevBtnClick,
            onNextBtnClick, currentSongIndex, volume, seekTo,
            percent, adjustVolumeTo, seek, duration, onListBtnClick} = this.props;

    let vc_control_w = 586;
    if(width < 600) {
      let s = width / 600;
      vc_control_w = vc_control_w * s;
    }

    let vc_control = {
      width: vc_control_w + 'px',
    }

    return(
      <div className={`${styles.vc_controls} container`} style={vc_control}>
        <div className={`${styles.vc_container} container`}>
          <div className={styles.vc_volumes}>
            <VolumePanel volume={volume} adjustVolumeTo={adjustVolumeTo} />
          </div>
          <div className={styles.vc_buttons}>
            <ButtonPanel isPlaying={isPlaying}
              isPause={isPause}
              isLoading={isLoading}
              isShowList={isShowList}
              currentSongIndex={currentSongIndex} songCount={songCount}
              onPlayBtnClick={onPlayBtnClick} onStopBtnClick={onStopBtnClick}
              onPrevBtnClick={onPrevBtnClick} onNextBtnClick={onNextBtnClick}
              onListBtnClick={onListBtnClick}/>
          </div>
        </div>
        <div className={`${styles.vc_container} container`}>
          <div className={styles.vc_volumes_bar}>
            <VolumeBar volume={volume} adjustVolumeTo={adjustVolumeTo} />
          </div>
          <div className={styles.vc_progress_bar}>
            <ProgressBar percent={percent} seekTo={seekTo} seek={seek} duration={duration} />
          </div>
        </div>
      </div>
    );
  }
}
