import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Button from './button.js';
import styles from './button_panel.scss';

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playClass: `${styles.vc_control_play}`,
        nextClass: `${styles.vc_control_fforward}`,
        prevClass: `${styles.vc_control_rewind}`,
        stopClass: `${styles.vc_control_stop}`,
        listClass: `${styles.vc_control_list}`,
    };
    this.playClick = this.playClick.bind(this);
    // this._onPauseBtnClick = this._onPauseBtnClick.bind(this);
    // this._onPrevBtnClick = this._onPrevBtnClick.bind(this);
    // this._onNextBtnClick = this._onNextBtnClick.bind(this);
    // this._seekTo = this._seekTo.bind(this);
    // this._updateCurrentDuration = this._updateCurrentDuration.bind(this);
    // this._adjustVolumeTo = this._adjustVolumeTo.bind(this);
    // this._initSoundObjectCompleted = this._initSoundObjectCompleted.bind(this);
    // this._playEnd = this._playEnd.bind(this);
    // this._onSongItemClick = this._onSongItemClick.bind(this);
    // this._onListBtnClick = this._onListBtnClick.bind(this);
    // this._onStopBtnClick = this._onStopBtnClick.bind(this);
  }

  playClick(event) {
    // this.props.onPlayBtnClick;
    // this.setState({
    //   playClass: `${styles.vc_control_play} ${styles.vc_control_pressed}`
    // });
  }

  render() {
    const {isPlaying, isPause, isLoading, songCount, onListBtnClick,
            onPlayBtnClick, onStopBtnClick, onPrevBtnClick,
            onNextBtnClick, currentSongIndex, isShowList} = this.props;
    let play_icon = isPlaying ? 'pause' : 'play';
    return(
      <ul className={`${styles.vc_buttons} container`}>
        <Button cssClass={this.state.listClass} onBtnClick={onPlayBtnClick}
                icon_name={play_icon} active={isPlaying}
                sound_url={'sounds/click.mp3'}/>
        <Button cssClass={this.state.prevClass} onBtnClick={onPrevBtnClick}
                icon_name={'backward'} active={false}
                sound_url={'sounds/rewind.mp3'}/>
        <Button cssClass={this.state.nextClass} onBtnClick={onNextBtnClick}
                icon_name='forward' active={false}
                sound_url={'sounds/fforward.mp3'}/>
        <Button cssClass={this.state.stopClass} onBtnClick={onStopBtnClick}
                icon_name='stop' active={false}
                sound_url={'sounds/click.mp3'}/>
        <Button cssClass={this.state.playClass} onBtnClick={onListBtnClick}
                icon_name='list' active={isShowList}
                sound_url={'sounds/switch.mp3'}/>
      </ul>
    );
  }
}
