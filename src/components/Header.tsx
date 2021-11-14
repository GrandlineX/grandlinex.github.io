import React from 'react';

const Header: React.FC<any> = (props) => {
  return (
    <div className="glx-header">
      <div className="glx-header--content">
        <img src="/favicon.ico" alt="logo" />
        <h1>GrandLineX Project</h1>
      </div>
    </div>
  );
};

export default Header;
