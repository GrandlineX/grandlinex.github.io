import React from 'react';
import logo from '../img/logo192.png';

const Header: React.FC<any> = (props) => {
  return (
    <div className="glx-header">
      <div className="glx-header--content">
        <img src={logo} alt="logo" />
        <h1>GrandLineX Project</h1>
      </div>
    </div>
  );
};

export default Header;
