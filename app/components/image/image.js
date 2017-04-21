import React from 'react';
import styles from './styles.scss';
import { css_parse } from 'util/css_parse';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cssClass: `${css_parse(styles, this.props.className)}`
    };
  }

  render() {
    return(<img src="http://placehold.it/80x80" className={this.state.cssClass} />);
  }
}
