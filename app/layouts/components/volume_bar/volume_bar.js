import React, {Component} from 'react';
import { connect } from "react-redux";
import FontAwesome from 'react-fontawesome';
import styles from './volume_bar.scss';
import {touchVolumeBar} from 'actions/valumeBarAction';

@connect((store) => {
  return {
    volume: store.cassette_player.volume,
    ...store.volume_bar
  };
}, {touchVolumeBar})

export default class VolumeBar extends Component {
  static defaultProps = { className: '' }
  constructor(props) {
    super(props);
    this.adjustVolumeTo = this.adjustVolumeTo.bind(this);
    this.volumeToMax = this.volumeToMax.bind(this);
    this.volumeToMin = this.volumeToMin.bind(this);
  }

  componentDidMount() {
    const el = this.refs.audioVolumePresentContainer;
    el.addEventListener('touchstart', this.handleTouchStart, false);
    el.addEventListener('touchmove', this.handleTouchMove, false);
    el.addEventListener('touchend', this.handleTouchEnd, false);
    el.addEventListener('mousedown', this.handleTouchStart, false);
    el.addEventListener('mousemove', this.handleTouchMove, false);
    document.addEventListener('mouseup', this.handleTouchEnd, false);
  }

  componentWillUnmount() {
    const el = this.refs.audioVolumePresentContainer;
    el.removeEventListener('touchstart', this.handleTouchStart, false);
    el.removeEventListener('touchmove', this.handleTouchMove, false);
    el.removeEventListener('touchend', this.handleTouchEnd, false);
    el.removeEventListener('mousedown', this.handleTouchStart, false);
    el.removeEventListener('mousemove', this.handleTouchMove, false);
    document.removeEventListener('mouseup', this.handleTouchEnd, false);
  }

  handleTouchStart = (event) => {
    event.preventDefault();
    const touch = event.type.indexOf('touch') === 0 ? event.changedTouches[0] : event;
    this.props.touchVolumeBar(true);
    this.adjustVolumeTo(touch);
  }

  handleTouchMove = (event) => {
    if(!this.props.touched)return;
    event.preventDefault();
    const touch = event.type.indexOf('touch') === 0 ? event.changedTouches[0] : event;
    this.adjustVolumeTo(touch);
  }

  handleTouchEnd = (event) => {
    event.preventDefault();
    this.props.touchVolumeBar(false);
  }

  adjustVolumeTo(e) {
    const container = this.refs.audioVolumePresentContainer.getBoundingClientRect();
    const containerStartX = container.left;
    let percent = (e.clientX - containerStartX) / container.width;
    percent = percent >= 1 ? 1 : percent;
    this.props.adjustVolumeTo(percent);
  }

  volumeToMax() {
    if(this.props.volume >= 1){
      return;
    }
    this.props.adjustVolumeTo(this.props.volume + 0.05);
  }

  volumeToMin() {
    if(this.props.volume <= 0){
      return;
    }
    this.props.adjustVolumeTo(this.props.volume - 0.05);
  }

  render() {
    const percent = this.props.volume * 100;
    const style = {width: `${percent}%`};

    return(
      <div className={styles.valume_panel} ref="audioVolumeBarContainer">
        <div className={styles.volume_surround}>
          <FontAwesome  name='volume-down' className={styles.valume_down} onClick={this.volumeToMin} />
          <div className={`${styles.value_with_panel} volumeValue`} ref="audioVolumePresentContainer">
            <span style={style} className={styles.volume_bar}></span>
          </div>
          <FontAwesome  name='volume-up' className={styles.valume_up} onClick={this.volumeToMax} />
        </div>
      </div>
    );
  }
}
