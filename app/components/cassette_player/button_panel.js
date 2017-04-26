import React, {Component} from 'react';
import styles from './button_panel.scss';

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    // this.props = {
    //   currentSongIndex: 0,
    //   songCount: 0,
    // };
  }

  render() {
    const {isPlaying, isPause, isLoading, songCount,
            onPlayBtnClick, onPauseBtnClick, onPrevBtnClick,
            onNextBtnClick, currentSongIndex} = this.props;

    return(
      <div className={styles.vc_controls}>
        <div className={styles.vc_volumes}>Volume</div>
        <div className={styles.vc_buttons}>
          <ul>
            <li onClick={onPlayBtnClick}><span>Play</span></li>
            <li onClick={onPrevBtnClick}><span>REW</span></li>
            <li onClick={onNextBtnClick}><span>FF</span></li>
            <li onClick={onPauseBtnClick}><span>STOP</span></li>
            <li onClick={onPauseBtnClick}><span>SWITCH</span></li>
          </ul>
        </div>
      </div>
    );
  }
}
