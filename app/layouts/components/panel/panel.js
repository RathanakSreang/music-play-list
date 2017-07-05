import React from 'react';
import styles from './styles.scss';
import { css_parse } from 'layouts/util/css_parse';

class Panel extends React.Component {
  // state = {
  //   cssClass: `${css_parse(styles, this.props.className)} ${styles.panel}`,
  //   children: this.props.children,
  // }
  constructor(props) {
    super(props);
    this.state = {
      cssClass: `${css_parse(styles, this.props.className)} ${styles.panel}`,
      children: this.props.children,
    };
  }

  render() {
    return(
      <div className={this.state.cssClass}>
        { this.state.children }
      </div>
    );
  }
}

export default Panel;
