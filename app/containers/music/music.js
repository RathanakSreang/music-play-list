import React, {Component} from 'react';
import styles from './styles.scss';
import Panel from 'components/panel/panel';
import Image from 'components/image/image';

class Music extends Component {
  render() {
    return (
      <Panel className={styles.music}>
        <a href="test">
          <Image className={'sm-cover'} />
          <Panel className={'panel-music-info'}>
            <h3 className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur
            </h3>
            <h3 className={styles.uploader_name}>
              Rathanak
            </h3>
          </Panel>
        </a>
      </Panel>
    );
  }
}

export default Music;
