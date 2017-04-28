import React, {Component} from 'react';
import styles from './progress_bar.scss';

export default class ProgressBar extends Component {
  render() {
    return(
      <div className={styles.progress_bar_container}>
        <span className={styles.progress_bar}></span>
        <span className={styles.progress_status}>00:00</span>
      </div>
    );
  }
}