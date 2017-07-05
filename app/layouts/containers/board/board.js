import React, {Component} from 'react';
import { connect } from "react-redux";
import Panel from 'layouts/components/panel/panel';
import Album from 'layouts/components/album/album';
import CassettePlayer from 'layouts/components/cassette_player/cassette_player';
import styles from './styles.scss';

import {resizeWindow, fetchSimilarAlbums} from 'actions/boardAction';

@connect((store) =>{
  return {
    width: store.board.width,
    similarAlbums: store.board.similarAlbums
  }
}, {resizeWindow, fetchSimilarAlbums})

class Board extends Component {
  updateStateValue() {
    if(this.refs.cassettePlayer) {
      this.props.resizeWindow(this.refs.cassettePlayer.offsetWidth);
    }
  }
  updateDimensions() {
    this.updateStateValue()
  }
  componentWillMount() {
    this.props.fetchSimilarAlbums('albumsId');
    this.updateDimensions();
  }
  componentDidMount() {
    this.updateStateValue()
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  _mapSimilarAlbums(albums) {
    return albums.map((album, index) => {
      return(<Album album={album} key={index}/>);
    });
  }

  render() {
    // const songs = 
    const {width, songs, similarAlbums} = this.props;
    let albumsList = this._mapSimilarAlbums(similarAlbums);

    return (
      <div className="app-container" ref="cassetteBoard">
        <div className={styles.panel_playboard} ref="cassettePlayer">
          <CassettePlayer />
        </div>
        <div className={styles.panel_playlist}>
          {albumsList}
        </div>
      </div>
    );
  }
}

export default Board;
