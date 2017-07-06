import React, {Component} from 'react';
import { connect } from "react-redux";
import FontAwesome from 'react-fontawesome';
import Button from './button.js';
import ButtonSmall from './button_small.js';
import styles from './button_panel.scss';

@connect((store) => {
  return {
    playClass: `${styles.vc_control_play}`,
    nextClass: `${styles.vc_control_fforward}`,
    prevClass: `${styles.vc_control_rewind}`,
    stopClass: `${styles.vc_control_stop}`,
    listClass: `${styles.vc_control_list}`,
    ...store.cassette_player
  };
})

export default class ButtonPanel extends Component {

  render() {
    const {isPlaying, isPause, isLoading, onListBtnClick,
            onPlayBtnClick, onStopBtnClick, onPrevBtnClick,
            onNextBtnClick, currentSongIndex, isShowPlayList,
            onLoopBtnClick, isLooped, onSoundBtnClick, isSoundOn} = this.props;
    let play_icon = isPlaying ? 'pause' : 'play';
    let sound_icon = isSoundOn ? 'volume-up' : 'volume-off';
    return(
      <div>
        <ul className={`${styles.vc_small_buttons} container`}>
          <ButtonSmall cssClass={this.props.listClass} onBtnClick={onSoundBtnClick}
                  icon_name={sound_icon} active={isSoundOn}
                  sound_url={'sounds/click.mp3'}/>
          <ButtonSmall cssClass={this.props.listClass} onBtnClick={onLoopBtnClick}
                  icon_name={'retweet'} active={isLooped}
                  sound_url={'sounds/click.mp3'}/>
        </ul>
        <ul className={`${styles.vc_buttons} container`}>
          <Button cssClass={this.props.listClass} onBtnClick={onPlayBtnClick}
                  icon_name={play_icon} active={isPlaying}
                  sound_url={'sounds/click.mp3'}/>
          <Button cssClass={this.props.prevClass} onBtnClick={onPrevBtnClick}
                  icon_name={'backward'} active={false}
                  sound_url={'sounds/click.mp3'}/>
          <Button cssClass={this.props.nextClass} onBtnClick={onNextBtnClick}
                  icon_name='forward' active={false}
                  sound_url={'sounds/click.mp3'}/>
          <Button cssClass={this.props.stopClass} onBtnClick={onStopBtnClick}
                  icon_name='stop' active={false}
                  sound_url={'sounds/click.mp3'}/>
          <Button cssClass={this.props.playClass} onBtnClick={onListBtnClick}
                  icon_name='list' active={isShowPlayList}
                  sound_url={'sounds/switch.mp3'}/>
        </ul>
      </div>
    );
  }
}
