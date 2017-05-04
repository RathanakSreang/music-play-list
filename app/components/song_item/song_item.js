import React, {Component} from 'react';
import styles from './song_item.scss';
import FontAwesome from 'react-fontawesome';

export default class SongItem extends Component {
  render(){
    const { currentSongIndex, eventKey, isPlaying, name, onSongItemClick } = this.props;
    const isSelected = currentSongIndex === eventKey;
    const components = [];
    if ( isSelected && isPlaying ) {
      components[0] = <FontAwesome  name='pause' key="2" className={`${styles.playing} ${styles.icon}`} />
    } else {
      components[0] = <FontAwesome  name='play' key="2" className={`${styles.icon}`} />
    }
    components[1] = <span key="1" className={`${styles.song_title}`} >{name}</span>;

    return(
      <li className={`${styles.song_item} ${isSelected ? styles.active : ''}`}
          onClick={onSongItemClick}>
        {components}
      </li>
    );
  }
}