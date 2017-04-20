import React from 'react';
import styles from './styles.scss';
class Header extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li><a className={'${styles.active}'} href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;