import React from 'react';
import BaseLogo from '../img/BaseLogo';

export type BadgeType = 'CORE' | 'KERNEL' | 'E-KERNEL';

const Badge: React.FC<{ type: BadgeType }> = (props) => {
  const { type } = props;
  return (
    <img
      alt="img"
      height="24"
      src={`https://img.shields.io/static/v1?label=&message=${type}&color=black&logo=${BaseLogo}`}
    />
  );
};
export default Badge;
