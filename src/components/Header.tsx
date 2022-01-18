import React, { ReactNode } from 'react';
import Ico from '../img/ico-bg-transparent.svg';
import { menuItems } from '../content';

const Header: React.FC<any> = (props) => {
  return (
    <div className="glx-header">
      <div className="glx-header--content-left">
        <h1>
          GrandLine <img height="40px" src={Ico} alt="ico" />
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
