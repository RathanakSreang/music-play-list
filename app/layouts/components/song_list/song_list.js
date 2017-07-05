import React, {Component} from 'react';
import reactMixin from 'react-mixin';
import { connect } from "react-redux";
import styles from './song_list.scss';
import SongItem from '../song_item/song_item.js';
// import SongFormatterMixin from 'layouts/mixins/SongFormatterMixin';

@connect((store) => {
  return {
    width: store.board.width,
    ...store.cassette_player
  };
})
export default class SongList extends Component {
  _getSongName(song) {
    if (song.hasOwnProperty('name')) {
      return song.name;
    } else {
      const urlSplit = song.url.split('/');
      return urlSplit[urlSplit.length - 1];
    }
  }

  mixins: [SubscriptionMixin]

  render(){
    const { currentSongIndex, isPlaying, isPause, onSongItemClick, songs, totalSong, style } = this.props;
    console.log(this)
    let songItems = songs.map((song, index) => {
      let songName = this._getSongName(song);
      songName = totalSong > 1 ? `${index + 1}. ${songName}` : songName
      return <SongItem currentSongIndex={currentSongIndex}
                       name={songName}
                       key={index}
                       eventKey={index}
                       isPlaying={isPlaying}
                       isPause={isPause}
                       onSongItemClick={onSongItemClick.bind(null, index)} />
    });
    return(
      <div className={`${styles.song_list} container`} style={style}>
        <ul>
          {songItems}
        </ul>
      </div>
    );
  }
}
// reactMixin(SongList.prototype, SubscriptionMixin);
