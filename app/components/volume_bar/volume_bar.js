import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './volume_bar.scss';

export default class VolumeBar extends Component {
  constructor(props) {
    super(props);
    this.adjustVolumeTo = this.adjustVolumeTo.bind(this);
    this.volumeToMax = this.volumeToMax.bind(this);
    this.volumeToMin = this.volumeToMin.bind(this);
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
    console.log(this.props.volume)
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
          <div className={styles.value} ref="audioVolumePresentContainer" onClick={this.adjustVolumeTo}>
            <span style={style} className={styles.volume_bar}></span>
          </div>
          <FontAwesome  name='volume-up' className={styles.valume_up} onClick={this.volumeToMax} />
        </div>
      </div>
    );
  }
}
