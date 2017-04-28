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
    const {isPlaying, isPause, isLoading, songCount,
            onPlayBtnClick, onPauseBtnClick, onPrevBtnClick,
            onNextBtnClick, currentSongIndex} = this.props;

    return(
      <div className={`${styles.vc_controls} container`}>
        <div className={`${styles.vc_container} container`}>
          <div className={styles.vc_volumes}>
            <VolumePanel />
          </div>
          <div className={styles.vc_buttons}>
            <ButtonPanel isPlaying={isPlaying}
              isPause={isPause}
              isLoading={isLoading}
              currentSongIndex={currentSongIndex} songCount={songCount}
              onPlayBtnClick={onPlayBtnClick} onPauseBtnClick={onPauseBtnClick}
              onPrevBtnClick={onPrevBtnClick} onNextBtnClick={onNextBtnClick}/>
          </div>
        </div>
        <div className={`${styles.vc_container} container`}>
          <div className={styles.vc_volumes_bar}>
            <VolumeBar />
          </div>
          <div className={styles.vc_progress_bar}>
            <ProgressBar />
          </div>
        </div>
      </div>
    );
  }
}
