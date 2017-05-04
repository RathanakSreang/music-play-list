import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './button_panel.scss';

export default class ButtonPanel extends Component {
  render() {
    const {isPlaying, isPause, isLoading, songCount, onListBtnClick,
            onPlayBtnClick, onPauseBtnClick, onPrevBtnClick,
            onNextBtnClick, currentSongIndex} = this.props;
    return(
      <ul className={`${styles.vc_buttons} container`}>
        <li className={styles.vc_control_play} onClick={onPlayBtnClick}><FontAwesome  name='play' /></li>
        <li className={styles.vc_control_rewind} onClick={onPrevBtnClick}><FontAwesome  name='backward' /></li>
        <li className={styles.vc_control_fforward} onClick={onNextBtnClick}><FontAwesome  name='forward' /></li>
        <li className={styles.vc_control_pause} onClick={onPauseBtnClick}><FontAwesome  name='stop' /></li>
        <li className={styles.vc_control_list} onClick={onListBtnClick}><FontAwesome  name='list' /></li>
      </ul>
    );
  }
}