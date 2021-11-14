import React, { ReactNode } from 'react';

type ContentProps = {
  children?: ReactNode;
};

const ContentRow: React.FC<ContentProps> = (props) => {
  const { children } = props;
  return <div className="glx-content--row">{children}</div>;
};
ContentRow.defaultProps = {
  children: undefined,
};

export default ContentRow;
