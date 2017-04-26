import React, {Component} from 'react';
import Panel from 'components/panel/panel';
import Music from 'containers/music/music';
import CassettePlayer from 'components/cassette_player/cassette_player';
import styles from './styles.scss';

class Board extends Component {
  state = {
    width: 600
  }
  updateStateValue() {
    if(this.refs.cassettePlayer) {
      this.setState({width: this.refs.cassettePlayer.offsetWidth});
    }
  }
  updateDimensions() {
    this.updateStateValue()
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    this.updateStateValue()
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const songs = [
      {url: 'mp3/like.mp3'},
      {url: 'mp3/BlankKyt_RSPN.ogg'},
      {url: 'mp3/BlankKytt_ThursdaySnowReprise.mp3'},
      {url: 'mp3/BlueDucks_FourFlossFiveSix.mp3'},
    ]
    return (
      <div className="app-container" ref="cassetteBoard">
        <div className={styles.panel_playboard} ref="cassettePlayer">
          <CassettePlayer width={this.state.width} songs={songs} />
        </div>
        <div className={styles.panel_playlist}>
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
          <Music className={''} />
        </div>
      </div>
    );
  }
}

export default Board;
