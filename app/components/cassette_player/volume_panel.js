import React, {Component} from 'react';
import styles from './volume.scss';

export default class VolumePanel extends Component {
  constructor(props) {
    super(props);
  }

  valueToRadian(value) {
    return Math.round((value / 100) * 270)
  }

          // <div className={`${styles.tick} ${activetick}`}></div>
  render() {
    return(
      <div className={styles.knob_surround}>
        <div className={styles.knob}></div>
        <span className={styles.min}>Min</span>
        <span className={styles.max}>Max</span>
        <div className={styles.ticks}>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
        </div>
      </div>
    );
  }
}
