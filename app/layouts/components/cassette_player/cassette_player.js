import React, {Component} from 'react';
import { connect } from "react-redux";
import styles from './cassette_player.scss';
import Cassette from '../cassette/cassette.js';
import ControlPanel from '../control_panel/control_panel.js';
import { Howl } from 'howler';

import {fetchSongs, toggleSongList,
  togglePlaySong, stopSong, loadingSong,
  togglePauseSong, selectSong, stopPlayAnimation,
  playSong, loadingSongCompleted, stopPlaying,
  updateCurrentSongIndex, updateSeek, updateValume} from 'actions/cassettePlayerAction';

@connect((store) => {
  return {
    width: store.board.width,
    ...store.cassette_player
  };
}, {fetchSongs, toggleSongList, togglePlaySong, stopSong, togglePauseSong,
selectSong, playSong, loadingSongCompleted, stopPlaying, loadingSong,
updateCurrentSongIndex, updateSeek, updateValume, stopPlayAnimation})
export default class CassettePlayer extends Component {
  constructor(props) {
    super(props);
    this._onPlayBtnClick = this._onPlayBtnClick.bind(this);
    this._onPauseBtnClick = this._onPauseBtnClick.bind(this);
    this._onPrevBtnClick = this._onPrevBtnClick.bind(this);
    this._onNextBtnClick = this._onNextBtnClick.bind(this);
    this._seekTo = this._seekTo.bind(this);
    this._updateCurrentDuration = this._updateCurrentDuration.bind(this);
    this._adjustVolumeTo = this._adjustVolumeTo.bind(this);
    this._initSoundObjectCompleted = this._initSoundObjectCompleted.bind(this);
    this._playEnd = this._playEnd.bind(this);
    this._onSongItemClick = this._onSongItemClick.bind(this);
    this._onListBtnClick = this._onListBtnClick.bind(this);
    this._onStopBtnClick = this._onStopBtnClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchSongs('albumId');
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this._stop();
    this._clearSoundObject();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { isPlaying, currentSongIndex } = this.props;
    if (isPlaying && currentSongIndex != prevProps.currentSongIndex) {
      this._initSoundObject();
    }
  }

  _onListBtnClick() {
    this.props.toggleSongList();
  }

  _onPlayBtnClick() {
    this.props.togglePlaySong();
    if (this.props.isPlaying) {
      this.play();
    } else {
      this._pause();
    }
  }

  _onStopBtnClick() {
    if(this.howler === undefined || this.howler === null) {
      return;
    }
    if(!this.props.isPlaying && !this.props.isPause) {
      return;
    }
    this._stop();
    this._clearSoundObject();
    this.props.stopSong();
  }

  _onPauseBtnClick() {
    if(this.howler === undefined || this.howler === null) {
      return;
    }
    this.props.togglePauseSong();
    this.props.isPause ? this._pause() : this._play();
  }

  _onPrevBtnClick() {
    if(this.howler === undefined || this.howler === null) {
      return;
    }
    this._prev();
  }

  _onNextBtnClick() {
    if(this.howler === undefined || this.howler === null) {
      return;
    }
    this._next();
  }

  _onSongItemClick(songIndex) {
    // handle pause/playing state.
    if (this.props.currentSongIndex == songIndex) {
      this._onPlayBtnClick();
      return;
    }

    // handle index change state, it must change to play.
    this._stop();
    this._clearSoundObject();
    this.props.selectSong(songIndex);
  }

  play() {
    this.props.playSong();

    if (!this.howler) {
      this._initSoundObject();
    } else {
      const songUrl = this.props.songs[this.props.currentSongIndex].url;
      if (songUrl != this.howler._src) {
        this._initSoundObject();
      } else {
        this._play();
      }
    }
  }

  _initSoundObject() {
    this._clearSoundObject();
    this.props.loadingSong();
    const song = this.props.songs[this.props.currentSongIndex];
    this.howler = new Howl({
      src: song.url,
      volume: this.props.volume,
      onload: this._initSoundObjectCompleted,
      onend: this._playEnd,
    });
  }

  _clearSoundObject() {
    if (this.howler) {
      this.howler.stop();
      this.howler = null;
    }
  }

  _initSoundObjectCompleted() {
    this._play();
    this.props.loadingSongCompleted(this.howler.duration());
  }

  _play() {
    this.props.playSong();

    this.howler.play();
    this._stopUpdateCurrentDuration();
    this._updateCurrentDuration();
    this.interval = setInterval(this._updateCurrentDuration, 1000);
  }

  _playEnd() {
    this.props.stopPlayAnimation();
    if(this.props.currentSongIndex == this.props.songs.length - 1) {
      this._stop();
    } else {
      this._next();
    }
  }

  _stop() {
    this._stopUpdateCurrentDuration();
    this.props.stopPlaying();
  }

  _pause() {
    this.props.stopPlayAnimation();
    this.howler.pause();
    this._stopUpdateCurrentDuration();
  }

  _prev() {
    this._seekTo(0);
    if (this.props.currentSongIndex > 0) {
      this._updateSongIndex(this.props.currentSongIndex - 1);
    }
  }

  _next() {
    let lastSongIndex = this.props.totalSong -1;
    this._seekTo(0);
    if (this.props.currentSongIndex < lastSongIndex) {
      this._updateSongIndex(this.props.currentSongIndex + 1);
    }
  }

  _updateSongIndex(index) {
    this.props.updateCurrentSongIndex(index);
    if (this.props.isPause) {
      this._stop();
      this._clearSoundObject();
    } else {
      this._stopUpdateCurrentDuration();
    }
  }

  _updateCurrentDuration() {
    this.props.updateSeek(this.howler.seek());
  }

  _stopUpdateCurrentDuration() {
    clearInterval(this.interval);
  }

  _seekTo(percent) {
    const seek = this.props.duration * percent;
    this.howler.seek(seek);
    this.props.updateSeek(seek);
  }

  _adjustVolumeTo(percent) {
    this.props.updateValume(percent);
    if (this.howler) {
      this.howler.volume(percent);
    }
  }

  getCurrentSongName() {
    if (this.props.currentSongIndex < 0) return '';
    const song = this.props.songs[this.props.currentSongIndex];
    return this.getSongName(song);
  }

  render() {
    return(
      <div>
        <Cassette onSongItemClick={this._onSongItemClick}/>
        <ControlPanel onPlayBtnClick={this._onPlayBtnClick} onStopBtnClick={this._onStopBtnClick}
                      onPrevBtnClick={this._onPrevBtnClick} onNextBtnClick={this._onNextBtnClick}
                      onListBtnClick={this._onListBtnClick}
                      seekTo={this._seekTo}
                      adjustVolumeTo={this._adjustVolumeTo}/>
      </div>
    );
  }
}
