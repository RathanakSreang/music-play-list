import React, {Component} from 'react';
import Panel from 'components/panel/panel';
import Music from 'containers/music/music';
import CassettePlayer from 'components/cassette_player/cassette_player';
import styles from './styles.scss';

class Board extends Component {
  render() {
    return (
      <div className="app-container">
        <div className={styles.panel_playboard}>
          <CassettePlayer />
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
