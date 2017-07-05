import React, {Component} from 'react';
import { connect } from "react-redux";
import styles from './control_panel.scss';
import ButtonPanel from '../button_panel/button_panel.js';
import VolumePanel from '../volume_panel/volume_panel.js';
import VolumeBar from '../volume_bar/volume_bar.js';
import ProgressBar from '../progress_bar/progress_bar.js';

@connect((store) => {
  return {
    width: store.board.width,
    ...store.cassette_player
  };
})
export default class ControllPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {width, onPlayBtnClick, onStopBtnClick, onPrevBtnClick,
            onNextBtnClick, currentSongIndex, seekTo,
            percent, adjustVolumeTo, onListBtnClick} = this.props;

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
            <VolumePanel adjustVolumeTo={adjustVolumeTo} />
          </div>
          <div className={styles.vc_buttons}>
            <ButtonPanel onPlayBtnClick={onPlayBtnClick} onStopBtnClick={onStopBtnClick}
              onPrevBtnClick={onPrevBtnClick} onNextBtnClick={onNextBtnClick}
              onListBtnClick={onListBtnClick}/>
          </div>
        </div>
        <div className={`${styles.vc_container} container`}>
          <div className={styles.vc_volumes_bar}>
            <VolumeBar adjustVolumeTo={adjustVolumeTo} />
          </div>
          <div className={styles.vc_progress_bar}>
            <ProgressBar percent={percent} seekTo={seekTo} />
          </div>
        </div>
      </div>
    );
  }
}
