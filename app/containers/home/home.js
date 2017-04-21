import React, {Component} from 'react';
import Panel from 'components/panels/panel';

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <Panel className={'panel-playboard'}>
          <h1>Play Board</h1>
        </Panel>
        <Panel className={'panel-playlist'}>
          <h1>Play list</h1>
        </Panel>
      </div>
    );
  }
}

export default Home;