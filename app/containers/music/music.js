import React, {Component} from 'react';
import styles from './styles.scss';
import Image from 'components/image/image';
import { css_parse } from 'util/css_parse';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cssClass: `${css_parse(styles, this.props.className)} ${styles.music_container}`
    };
  }

  render() {
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
                Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
                sit amet, consectetur
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

export default Music;

