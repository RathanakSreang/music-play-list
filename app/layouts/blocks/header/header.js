import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './styles.scss';
class Header extends React.Component {

  render() {
    return (
      <nav className={styles.nav}>
        <ul className="app-container">
          <li>
            <NavLink to="/" exact activeClassName={styles.active}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={styles.active}>All Musics</NavLink>
          </li>
          <li className = {styles.right_item}>
            <NavLink to="/about" activeClassName={styles.active}>About</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
