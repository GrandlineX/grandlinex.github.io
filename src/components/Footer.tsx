import React from 'react';
import { cnx } from '@grandlinex/react-components';
import { menuItems } from '../content';

function Footer({ rel }: { rel: boolean }) {
  return (
    <div className={cnx('glx-footer', [rel, 'glx-footer-rel'])}>
      <div className="glx--hide-on-mobile">
        <ul>
          {menuItems
            .filter((menu) => !menu.mobile)
            .map((menu) => (
              <li>
                <a href={menu.url} target="_blank" rel="noreferrer">
                  {menu.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="glx--only-on-desktop glx-footer-icons">
        {menuItems
          .filter((menu) => menu.mobile)
          .map(({ mobile, name, url, icon }) => {
            return (
              <a
                className={
                  mobile ? 'glx--only-on-desktop' : 'glx--hide-on-mobile'
                }
                href={url}
                target="_blank"
                title={name}
                rel="noreferrer"
              >
                {icon || name}
              </a>
            );
          })}
      </div>
      <div>
        <ul>
          <li>GrandLineX</li>
          <li>
            <a href="https://github.com/Elschnagoo">@ElSchnagoo</a>
          </li>
          <li>
            <a href="mailto:info@grandlinex.com">@Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://github.com/GrandlineX/grandlinex.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt=""
                src="https://badge.fury.io/gh/grandlinex%2Fgrandlinex.github.io.svg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
