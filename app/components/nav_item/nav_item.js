import React from 'react';

export default class NavItem extends React.Component {
  // static contentType = {
  //   router: React.PropTypes.object.isRequired,
  // };

  render(){
    const { router } = this.context;
    const { onlyActiveOnIndex, to, children, activeClassName, className } = this.props;
    const isActive = false;//router.isActive(to, onlyActiveOnIndex);

    return (
      <li className = { className + (isActive ? 'activeClassName' : '') }>
        {children}
      </li>
    );
  }
}
