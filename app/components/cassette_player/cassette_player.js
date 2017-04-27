import React, {Component} from 'react';
import styles from './style.scss';
import Cassette from './cassette.js';
import ButtonPanel from './button_panel.js';
import { Howl } from 'howler';

export default class CassettePlayer extends Component {
  constructor(props) {
    super(props);
    // this.props = { songs: [] };
    this.state = {
        isPlaying: false,
        isPause: false,
        isLoading: false,
        currentSongIndex: -1,
        totalSong: 0,
        volume: 0.5,
        speed: 0.0,
        rotation: 'rotateLeft',
        percentage: 0,
    };
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
  }

  componentWillMount() {
    const { dataUrl, songs } = this.props;

    if (dataUrl) {
      $.ajax({
        dataType: 'json',
        url: this.props.dataUrl,
        success: response => {
          this.setState({
            songs: response.songs,
            currentSongIndex: 0,
            totalSong: response.songs.length,
          });
        },
      });
    } else if(this.props.songs){
      this.setState({
        songs: this.props.songs,
        currentSongIndex: 0,
        totalSong: this.props.songs.length,
      });
    } else {
      throw Error('no data');
    }
  }

  componentDidMount() {
    // this.play();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { isPlaying, currentSongIndex } = this.state;
    if (isPlaying && currentSongIndex != prevState.currentSongIndex) {
      this._initSoundObject();
    }
  }

  _onPlayBtnClick() {
    if (this.state.isPlaying && !this.state.isPause) {
      return;
    };
    this.setState({
      speed: 2.0,
      rotation: 'rotateLeft',
    });
    this.play();
  }

  _onPauseBtnClick() {
    if(this.howler === undefined || this.howler === null) {
      return;
    }
    const isPause = !this.state.isPause;
    this.setState({ isPause: isPause });
    isPause ? this._pause() : this._play();
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
    const { currentSongIndex, isPause, isPlaying } = this.state;
    // handle pause/playing state.
    if (currentSongIndex == songIndex) {
      if (isPause) {
        this._onPauseBtnClick();
      } else if (!isPlaying) {
        this._onPlayBtnClick();
      }
      return;
    }

    // handle index change state, it must change to play.
    this._stop();
    this._clearSoundObject();
    this.setState({
                    currentSongIndex: songIndex,
                    duration: 0,
                    isPlaying: true,
                    isPause: false
                  });
  }

  play() {
    this.setState({ isPlaying: true, isPause: false });

    if (!this.howler) {
      this._initSoundObject();
    } else {
      const songUrl = this.state.songs[this.state.currentSongIndex].url;
      if (songUrl != this.howler._src) {
        this._initSoundObject();
      } else {
        this._play();
      }
    }
  }

  _initSoundObject() {
    this._clearSoundObject();
    this.setState({ isLoading: true });

    const song = this.state.songs[this.state.currentSongIndex];
    this.howler = new Howl({
      src: song.url,
      volume: this.state.volume,
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
    this.setState({
      duration: this.howler.duration(),
      isLoading: false,
    });
  }

  _play() {
    this.setState({
      speed: 2.0,
      rotation: 'rotateLeft',
    });

    this.howler.play();
    this._stopUpdateCurrentDuration();
    this._updateCurrentDuration();
    this.interval = setInterval(this._updateCurrentDuration, 1000);
  }

  _playEnd() {
    this.setState({
      speed: 0,
    });
    if(this.state.currentSongIndex == this.state.songs.length - 1) {
      this._stop();
    } else {
      this._next();
    }
  }

  _stop() {
    this.setState({
      speed: 0,
    });
    this._stopUpdateCurrentDuration();
    this.setState({ seek: 0, isPlaying: false });
  }

  _pause() {
    this.setState({
      speed: 0,
    });
    this.howler.pause();
    this._stopUpdateCurrentDuration();
  }

  _prev() {
    this._seekTo(0);
    if (this.state.currentSongIndex > 0) {
      this._updateSongIndex(this.state.currentSongIndex - 1);
    }
  }

  _next() {
    let lastSongIndex = this.state.totalSong -1;
    this._seekTo(0);
    if (this.state.currentSongIndex < lastSongIndex) {
      this._updateSongIndex(this.state.currentSongIndex + 1);
    }
  }

  _updateSongIndex(index) {
    this.setState({
      currentSongIndex: index,
      duration: 0,
    });
    if (this.state.isPause) {
      this._stop();
      this._clearSoundObject();
    } else {
      this._stopUpdateCurrentDuration();
    }
  }

  _updateCurrentDuration() {
    this.setState({ seek: this.howler.seek() });
  }

  _stopUpdateCurrentDuration() {
    clearInterval(this.interval);
  }

  _seekTo(percent) {
    const seek = this.state.duration * percent;
    this.howler.seek(seek);
    this.setState({ seek: seek });
  }

  _adjustVolumeTo(percent) {
    this.setState({ volume: percent });
    if (this.howler) {
      this.howler.volume(percent);
    }
  }

  songCount() {
    return this.state.songs ? this.state.songs.length : 0;
  }

  getCurrentSongName() {
    if (this.state.currentSongIndex < 0) return '';
    const song = this.state.songs[this.state.currentSongIndex];
    return this.getSongName(song);
  }

  render() {
    const songCount = this.songCount();
    const { seek, duration, volume,
            isPlaying, isPause, isLoading, currentSongIndex } = this.state;
    let percent = 0;
    if (seek && duration) {
      percent = seek / duration;
    }

    return(
      <div>
        <Cassette width={this.props.width} speed={this.state.speed} rotation={this.state.rotation} percentage={percent} />
        <ButtonPanel isPlaying={isPlaying}
                     isPause={isPause}
                     isLoading={isLoading}
                     currentSongIndex={currentSongIndex} songCount={songCount}
                     onPlayBtnClick={this._onPlayBtnClick} onPauseBtnClick={this._onPauseBtnClick}
                     onPrevBtnClick={this._onPrevBtnClick} onNextBtnClick={this._onNextBtnClick}/>
      </div>
    );
  }
}
