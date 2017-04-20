import React from 'react';
import NavItem from '../nav_item/nav_item';
import styles from './styles.scss';
class Header extends React.Component {

  render() {
    console.log(styles[0]);
    return (
      <nav className={styles.nav}>
        <ul>
          <NavItem to="apis" activeClassName={styles.active}>
            <a className={styles.active} href="#home">Home</a>
          </NavItem>
          <NavItem to="apis" activeClassName={styles.active}>
            <a className={'styles.active'} href="#music">All Musics</a>
          </NavItem>
          <NavItem to="apis" activeClassName={styles.active} className={styles.right_item}>
            <a className={'styles.active'} href="#about">About</a>
          </NavItem>
        </ul>
      </nav>
    );
  }
}

export default Header;
