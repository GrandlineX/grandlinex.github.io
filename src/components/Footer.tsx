import React from 'react';
import { menuItems } from '../content';

const Footer: React.FC<any> = (props) => {
  return (
    <div className="glx-footer">
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
      <div className="glx--only-on-desktop">
        {menuItems
          .filter((menu) => menu.mobile)
          .map((menu) => {
            return (
              <button
                type="button"
                onClick={() => window.open(menu.url, '_blank')}
              >
                {menu.name}
              </button>
            );
          })}
      </div>
      <div>
        <ul>
          <li>©GrandLineX</li>
          <li>
            <a href="https://github.com/Elschnagoo">@ElSchnagoo</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
