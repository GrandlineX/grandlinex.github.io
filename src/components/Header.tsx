import React from 'react';
import { Grid } from '@grandlinex/react-components';
import { menuItems } from '../content';
import GIcon from '../img/GIcon';
import { Page, RoutingFunction } from '../routing';

function Header({ setPage }: { setPage: RoutingFunction }) {
  return (
    <div className="glx-header">
      <div className="glx-header--content-left">
        <h1 className="glx-pointer" onClick={() => setPage(Page.App)}>
          GrandLine <GIcon type="LOGO-TRANS" height="40px" />
        </h1>
      </div>
      <Grid flex flexR vCenter className="glx-header--content-right">
        {menuItems.map(({ name, url, mobile, icon, page }) => (
          <a
            className={mobile ? 'glx--only-on-desktop' : 'glx--hide-on-mobile'}
            href={url}
            target="_blank"
            title={name}
            rel="noreferrer"
            onClick={page ? () => setPage(page) : undefined}
          >
            {icon || name}
          </a>
        ))}
      </Grid>
    </div>
  );
}

export default Header;
