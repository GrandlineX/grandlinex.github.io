import React, { ReactNode } from 'react';

type ContentProps = {
  children?: ReactNode;
};

const ContentSpace: React.FC<ContentProps> = (props) => {
  const { children } = props;

  return <div className="glx-content--space">{children}</div>;
};
ContentSpace.defaultProps = {
  children: undefined,
};
export default ContentSpace;
