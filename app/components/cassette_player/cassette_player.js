import React, {Component} from 'react';
import styles from './style.scss';

const temp = require('assets/images/cs_front.png');
const temp1 = require('assets/images/cs_back.png');
const temp2 = require('assets/images/cs_wheel.png');
export default class CassettePlayer extends Component {
  render() {
    console.log(temp);
    return(
      <div className={styles.vc_container}>
        <div className={styles.vc_tape_wrapper}>
          <div className={styles.vc_tape}>
            <div className={styles.vc_tape_back}>
              <div className={`${styles.vc_tape_wheel} ${styles.vc_tape_wheel_left}`}><div></div></div>
              <div className={`${styles.vc_tape_wheel} ${styles.vc_tape_wheel_right}`}><div></div></div>
            </div>
            <div className={`${styles.vc_tape_front} ${styles.vc_tape_side_a}`}>
              <span>A</span>
            </div>
            <div className={`${styles.vc_tape_front} ${styles.vc_tape_side_b}`}>
              <span>B</span>
            </div>
          </div>
        </div>
        <div className={styles.vc_loader}></div>
      </div>
    );
  }
}