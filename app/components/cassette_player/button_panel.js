import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
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
            <li className={styles.vc_control_play} onClick={onPlayBtnClick}><FontAwesome  name='play' /></li>
            <li className={styles.vc_control_rewind} onClick={onPrevBtnClick}><FontAwesome  name='backward' /></li>
            <li className={styles.vc_control_fforward} onClick={onNextBtnClick}><FontAwesome  name='forward' /></li>
            <li className={styles.vc_control_pause} onClick={onPauseBtnClick}><FontAwesome  name='pause' /></li>
            <li className={styles.vc_control_pause} onClick={onPauseBtnClick}><FontAwesome  name='stop' /></li>
          </ul>
        </div>
      </div>
    );
  }
}
