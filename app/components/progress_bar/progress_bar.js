import React, {Component} from 'react';
import reactMixin from 'react-mixin';
import styles from './progress_bar.scss';
import TimeFormatterMixin from 'mixins/TimeFormatterMixin';

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
    if (!this.props.percent) return;
    const container = this.refs.progressBar.getBoundingClientRect();
    const containerStartX = container.left;
    let percent = (e.clientX - containerStartX) / container.width;
    percent = percent >= 1 ? 1 : percent;
    this.props.seekTo(percent);
  }

  render() {
    const { percent, seek, duration } = this.props;
    const tem = this.secondsToTime(duration - seek);
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

reactMixin(ProgressBar.prototype, TimeFormatterMixin);
