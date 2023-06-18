import React from 'react';
import { Grid } from '@grandlinex/react-components';
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
      <Grid flex flexR vCenter className="glx-header--content-right">
        {menuItems.map(({ name, url, mobile, icon }) => (
          <a
            className={mobile ? 'glx--only-on-desktop' : 'glx--hide-on-mobile'}
            href={url}
            target="_blank"
            title={name}
            rel="noreferrer"
          >
            {icon || name}
          </a>
        ))}
      </Grid>
    </div>
  );
};

export default Header;
