import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './button_panel.scss';
import { Howl } from 'howler';

export default class Button extends Component {
    constructor(props) {
    super(props);
    this.state = {
        iconClass: '',
        active: false,
    };
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this._playEnd = this._playEnd.bind(this);
  }

  componentDidMount() {
    const el = this.refs.button;
    el.addEventListener('mousedown', this.handleTouchStart, false);
    document.addEventListener('mouseup', this.handleTouchEnd, false);
  }

  componentWillUnmount() {
    const el = this.refs.button;
    el.removeEventListener('mousedown', this.handleTouchStart, false);
    document.removeEventListener('mouseup', this.handleTouchEnd, false);
  }
  handleTouchStart(event) {
    const touch = event.type.indexOf('touch') === 0 ? event.changedTouches[0] : event;
    this.setState({
      iconClass: styles.vc_control_pressed,
      active: !this.state.active,
    });
    this._initSoundObject()
    this.howler.play();
    this.props.onBtnClick(event);
  }

  handleTouchEnd() {
    this.setState({
      iconClass: ''
    });
  }

  _initSoundObject() {
    this._clearSoundObject();
    this.howler = new Howl({
      src: this.props.sound_url,
      volume: 0.25,
      onend: this._playEnd,
    });
  }

  _playEnd() {
    this.howler.stop();
  }

  _clearSoundObject() {
    if (this.howler) {
      this.howler.stop();
      this.howler = null;
    }
  }

  render() {
    const {icon_name, active, cssClass} = this.props;
    let active_css = this.props.active ? styles.vc_control_active : ''
    let css_class = `${cssClass} ${this.state.iconClass} ${active_css}`;
    return(
      <li ref="button" className={css_class}><FontAwesome  name={icon_name} /></li>
    );
  }
}