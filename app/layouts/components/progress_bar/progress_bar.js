import React, {Component} from 'react';
import { connect } from "react-redux";
import reactMixin from 'react-mixin';
import styles from './progress_bar.scss';
// import TimeFormatterMixin from 'layouts/mixins/TimeFormatterMixin';

@connect((store) => {
  return {
    seek: store.cassette_player.seek,
    duration: store.cassette_player.duration,
  };
})

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this._seekTo = this._seekTo.bind(this);
    this.state = {
      touched: false
    }
  }

  componentDidMount() {
    const el = this.refs.progressBar;
    el.addEventListener('touchstart', this.handleTouchStart, false);
    el.addEventListener('touchmove', this.handleTouchMove, false);
    el.addEventListener('touchend', this.handleTouchEnd, false);
    el.addEventListener('mousedown', this.handleTouchStart, false);
    el.addEventListener('mousemove', this.handleTouchMove, false);
    document.addEventListener('mouseup', this.handleTouchEnd, false);
  }

  componentWillUnmount() {
    const el = this.refs.progressBar;
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
    this.setState({touched: true});
    this._seekTo(touch);
  }

  handleTouchMove = (event) => {
    if(!this.state.touched)return;
    event.preventDefault();
    const touch = event.type.indexOf('touch') === 0 ? event.changedTouches[0] : event;
    this._seekTo(touch);
  }

  handleTouchEnd = (event) => {
    event.preventDefault();
    this.setState({touched: false});
  }

  _seekTo(e) {
    const { seek, duration } = this.props;
    if (seek && duration) {
      const container = this.refs.progressBar.getBoundingClientRect();
      const containerStartX = container.left;
      let percent = (e.clientX - containerStartX) / container.width;
      percent = percent >= 1 ? 1 : percent;
      this.props.seekTo(percent);
    }
  }

    _secondsToTime(secs) {
    if(isNaN(secs)) return '00:00:00';
    secs = Math.round(secs);
    const hours = Math.floor(secs / (60 * 60));

    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);

    let time = '';

    if (hours > 0) time += `${hours}`;
    time += `${this._timeUnitFormat(minutes)}:`;
    time += `${this._timeUnitFormat(seconds)}`;

    return time;
  }

  _timeUnitFormat(time) {
    if (time < 1) {
      return '00';
    } else if(time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  }

  render() {
    const { seek, duration } = this.props;
    let percent = 0;
    if (seek && duration) {
      percent = seek / duration;
    }
    const tem = this._secondsToTime(duration - seek);
    const _percent = percent * 100;
    const style = { width: `${_percent}%` };

    return(
      <div className={styles.progress_bar_container}>
        <div className={styles.progress_bar} ref="progressBar" style={this.props.progressStyle}>
          <span className={styles.bar_status} style={style}></span>
        </div>
        <div className={styles.progress_status}>{tem}</div>
      </div>
    );
  }
}

// reactMixin(ProgressBar.prototype, TimeFormatterMixin);
