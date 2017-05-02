import React, {Component} from 'react';
import styles from './progress_bar.scss';

export default class ProgressBar extends Component {
    constructor(props) {
    super(props);
    this._seekTo = this._seekTo.bind(this);
  }

  _seekTo(e) {
    if (!this.props.percent) return;
    const container = this.refs.progressBar.getBoundingClientRect();
    const containerStartX = container.left;
    let percent = (e.clientX - containerStartX) / container.width;
    percent = percent >= 1 ? 1 : percent;
    this.props.seekTo(percent);
  }

  render() {
    const { percent } = this.props;
    const _percent = percent * 100;
    const style = { width: `${_percent}%` };

    return(
      <div className={styles.progress_bar_container}>
        <div className={styles.progress_bar} ref="progressBar" style={this.props.progressStyle} onClick={this._seekTo}>
          <span className={styles.bar_status} style={style}></span>
        </div>
        <div className={styles.progress_status}>00:00</div>
      </div>
    );
  }
}
