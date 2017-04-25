import React, {Component} from 'react';
import styles from './style.scss';

const front = require('assets/images/cs_front.png');
const back = require('assets/images/cs_back.png');
const wheel = require('assets/images/cs_wheel.png');
export default class CassettePlayer extends Component {
  render() {
    var vc_tape = {
      width: '586px',
      height: '379px',
    };

    var vc_tape_wheel = {
      width: '125px',
      height: '125px',
      top: '110px',
      animationName: 'rotateLeft',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDuration: '3s',
      animationFillMode: 'forwards',
    };

    var vc_tape_wheel_left = {
      left: '109px',
      boxShadow: '0 0 0 70px #000',
    };

    var vc_tape_wheel_right = {
      right: '113px',
      boxShadow: '0 0 0 10px #000',
    }

    return(
      <div style={vc_tape} className={styles.vc_tape}>
        <img src={back} className={styles.vc_tape_back} />
        <img src={wheel} style={Object.assign({}, vc_tape_wheel, vc_tape_wheel_left)} className={`${styles.vc_tape_wheel}`} />
        <img src={wheel} style={Object.assign({}, vc_tape_wheel, vc_tape_wheel_right)} className={`${styles.vc_tape_wheel}`} />
        <img src={front} className={styles.vc_tape_front} />
        {this.props.width}
      </div>
    );
  }
}
        // <span className={styles.vc_tape_side_a}>A</span>
        // <span className={styles.vc_tape_side_b}>B</span>
