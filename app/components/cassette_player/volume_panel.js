import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './volume.scss';

export default class VolumePanel extends Component {
  constructor(props) {
    super(props);
  }

  valueToRadian(value) {
    return Math.round((value / 100) * 270)
  }

  render() {
    return(
      <div className={styles.valume_panel}>
        <div className={styles.knob_surround}>
          <div className={styles.knob}>
            <div className={styles.knob_base}></div>
          </div>
        </div>
        <div className={styles.volume_surround}>
          <FontAwesome  name='volume-down' className={styles.valume_minus} />
          <span className={styles.knob_value}></span>
          <FontAwesome  name='volume-up' className={styles.valume_plus} />
        </div>
      </div>
    );
  }
}
