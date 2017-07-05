import React, {Component} from 'react';
import { connect } from "react-redux";
import FontAwesome from 'react-fontawesome';
import styles from './volume.scss';
import {touchVolumePanel} from 'actions/volumePanelAction';

@connect((store) => {
  return {
    volume: store.cassette_player.volume,
    ...store.volume_panel
  };
}, {touchVolumePanel})

export default class VolumePanel extends Component {

  componentDidMount() {
    const el = this.refs.valumePanel;
    el.addEventListener('touchstart', this.handleTouchStart, false);
    el.addEventListener('touchmove', this.handleTouchMove, false);
    el.addEventListener('touchend', this.handleTouchEnd, false);
    el.addEventListener('mousedown', this.handleTouchStart, false);
    el.addEventListener('mousemove', this.handleTouchMove, false);
    document.addEventListener('mouseup', this.handleTouchEnd, false);
  }

  componentWillUnmount() {
    const el = this.refs.valumePanel;
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
    this.props.touchVolumePanel(true);
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
    this.props.touchVolumePanel(false);
  }

  adjustVolumeTo(e) {
    const container = this.refs.valumePanel.getBoundingClientRect();
    const center = {
      y: container.top + container.height / 2,
      x: container.left + container.width / 2
    }
    var a, b, deg, tmp, rad2deg = 180/Math.PI;
    a = center.y - e.clientY;
    b = center.x - e.clientX;
    deg = Math.atan2(a,b)*rad2deg + 45;
    if(deg<0) deg = 360 + deg;

    if(deg >= this.props.minangle && deg <= this.props.maxangle) {
      let percent = deg / this.props.maxangle;
      percent = percent >= 1 ? 1 : percent;
      this.props.adjustVolumeTo(percent);
    }
  }

  valueToRadian(value) {
    return Math.round((value) * this.props.maxangle);
  }

  render() {
    const volume = this.props.volume;
    const temp = {
      transform: `rotate(${this.valueToRadian(volume)}deg)`
    }
    return(
      <div className={styles.valume_panel}>
        <div className={styles.knob_surround} ref="valumePanel">
          <div className={styles.knob} style={temp}>
          </div>
        </div>
      </div>
    );
  }
}
