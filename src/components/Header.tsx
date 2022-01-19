import React, { ReactNode } from 'react';
import { menuItems } from '../content';
import GIcon from '../img/GIcon';

const Header: React.FC<any> = (props) => {
  return (
    <div className="glx-header">
      <div className="glx-header--content-left">
        <h1>
          GrandLine <GIcon type="LOGO-TRANS" height="40px" />
        </h1>
      </div>
      <div className="glx-header--content-right">
        {menuItems.map(({ name, url, mobile }) => (
          <button
            className={mobile ? 'glx--only-on-desktop' : 'glx--hide-on-mobile'}
            type="button"
            onClick={() => window.open(url, '_blank')}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
