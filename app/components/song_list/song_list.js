import React, {Component} from 'react';
import reactMixin from 'react-mixin';
import styles from './song_list.scss';
import SongItem from '../song_item/song_item.js';
import SongFormatterMixin from 'mixins/SongFormatterMixin';

export default class SongList extends Component {
  render(){
    const { currentSongIndex, isPlaying, isPause, onSongItemClick, songs, style } = this.props;
    const songCount = songs.length;

    let songItems = songs.map((song, index) => {
      let songName = this.getSongName(song);
      songName = songCount > 1 ? `${index + 1}. ${songName}` : songName
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
reactMixin(SongList.prototype, SongFormatterMixin);
