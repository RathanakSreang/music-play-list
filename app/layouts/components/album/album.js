import React, {Component} from 'react';
import styles from './styles.scss';
import Image from 'layouts/components/image/image';
import { css_parse } from 'layouts/util/css_parse';

class Album extends Component {
  static defaultProps = { className: '' }
  constructor(props) {
    super(props);
    this.state = {
      cssClass: `${css_parse(styles, this.props.className)} ${styles.music_container}`
    };
  }

  render() {
    const {album} = this.props;
    return (
      <div className={this.state.cssClass}>
        <div className={styles.music}>
          <div className={styles.image_section}>
            <a href="test">
              <Image />
            </a>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>
              <a href="test">
                {album.title}
              </a>
            </h3>
            <p className={styles.uploader}>
              <span><a href="f">Rathanak</a></span>
              <span>1000K</span>
            </p>
            <p className={styles.aditional_info}>
              <span><a href="f">Rathanak</a></span>
              <span>Rathanak</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;

