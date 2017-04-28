import React, {Component} from 'react';
import styles from './cassette.scss';

const front = require('assets/images/cs_front.png');
const back = require('assets/images/cs_back.png');
const wheel = require('assets/images/cs_wheel.png');
export default class Cassette extends Component {
  render() {
    const {width , speed, rotation, percentage} = this.props;
    let vc_tape_w = 586,
      vc_tape_h = 379,
      wheel_w_h = 125,
      wheel_top = 110,
      wheel_left = 109,
      wheel_right = 113,
      wheel_max_shadow = 90;

    if(width < 600) {
      let s = width / 600;
      vc_tape_w = vc_tape_w * s;
      vc_tape_h = vc_tape_h * s;
      wheel_w_h = wheel_w_h * s;
      wheel_top = wheel_top * s;
      wheel_left = wheel_left * s;
      wheel_right = wheel_right * s;
      wheel_max_shadow = wheel_max_shadow * s;
    }
    let right_shadow = wheel_max_shadow * percentage;
    let left_shadow = wheel_max_shadow * (1 - percentage);
    var vc_tape = {
      width: vc_tape_w + 'px',
      height: vc_tape_h + 'px',
    };

    var vc_tape_wheel = {
      width: wheel_w_h + 'px',
      height: wheel_w_h + 'px',
      top: wheel_top + 'px',
      animationName: rotation,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDuration: speed + 's',
      animationFillMode: 'forwards',
    };

    var vc_tape_wheel_left = {
      left: wheel_left + 'px',
      boxShadow: '0 0 0 ' + left_shadow + 'px #000',
    };

    var vc_tape_wheel_right = {
      right: wheel_right + 'px',
      boxShadow: '0 0 0 ' + right_shadow + 'px #000',
    }

    return(
      <div style={vc_tape} className={styles.vc_tape}>
        <img src={back} className={styles.vc_tape_back} />
        <img src={wheel} style={Object.assign({}, vc_tape_wheel, vc_tape_wheel_left)} className={`${styles.vc_tape_wheel}`} />
        <img src={wheel} style={Object.assign({}, vc_tape_wheel, vc_tape_wheel_right)} className={`${styles.vc_tape_wheel}`} />
        <img src={front} className={styles.vc_tape_front} />
      </div>
    );
  }
}