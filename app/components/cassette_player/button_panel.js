import React, {Component} from 'react';
import styles from './style.scss';

export default class ButtonPanel extends Component {
  constructor() {
    super();
    this.props = {
      currentSongIndex: 0,
      songCount: 0,
    };
  }

  render() {
    const {isPlaying, isPause, isLoading, songCount,
            onPlayBtnClick, onPauseBtnClick, currentSongIndex} = this.props;

    return(
      <ul className={styles.vc_controls}>
        <li onClick={this._onPlayBtnClick}>Play<span></span></li>
        <li onClick={this._onPrevBtnClick}>REW<span></span></li>
        <li onClick={this._onNextBtnClick}>FF<span></span></li>
        <li onClick={this._onPauseBtnClick}>STOP<span></span></li>
      </ul>
    );
  }
}