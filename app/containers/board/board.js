import React, {Component} from 'react';
import Panel from 'components/panel/panel';
import Music from 'containers/music/music';
import styles from './styles.scss';

class Board extends Component {
  render() {
    return (
      <div className="app-container">
        <div className={styles.panel_playboard}>
          <h1>Play Board</h1>
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
