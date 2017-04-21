import React, {Component} from 'react';
import Music from 'containers/music/music';

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <Music className={''} />
        <Music className={''} />
        <Music className={''} />
        <Music className={''} />
        <Music className={''} />
      </div>
    );
  }
}

export default Home;
