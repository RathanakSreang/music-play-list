import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './volume_bar.scss';

export default class VolumeBar extends Component {
  constructor(props) {
    super(props);
  }

  valueToRadian(value) {
    return Math.round((value / 100) * 270)
  }

  render() {
    return(
      <div className={styles.valume_panel}>
        <div className={styles.volume_surround}>
          <FontAwesome  name='volume-down' className={styles.valume_down} />
          <div className={styles.value}>
            <span className={styles.bar}></span>
            <span className={styles.handler}></span>
          </div>
          <FontAwesome  name='volume-up' className={styles.valume_up} />
        </div>
      </div>
    );
  }
}
