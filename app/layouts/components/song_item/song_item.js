import React, {Component} from 'react';
import styles from './song_item.scss';
import FontAwesome from 'react-fontawesome';

export default class SongItem extends Component {
  render(){
    const { currentSongIndex, eventKey, isPlaying, isPause, name, onSongItemClick } = this.props;
    const isSelected = currentSongIndex === eventKey;
    const components = [];
    let icon_name, icon_classes;
    if ( isSelected) {
      icon_classes = `${styles.playing} ${styles.icon}`;
      if(isPlaying) {
        icon_name = 'pause';
      }else {
        icon_name = 'play';
      }
    } else {
      icon_classes = `${styles.icon}`;
      icon_name = 'play';
    }
    components[0] = <FontAwesome  name={icon_name} key="2" className={icon_classes} />
    components[1] = <span key="1" className={`${styles.song_title}`} >{name}</span>;

    return(
      <li className={`${styles.song_item} ${isSelected ? styles.active : ''}`}
          onClick={onSongItemClick}>
        {components}
      </li>
    );
  }
}