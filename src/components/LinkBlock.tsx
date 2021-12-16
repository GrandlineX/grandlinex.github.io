import React from 'react';

type ContentProps = {
  children: React.ReactNode;
};

const LinkBlock: React.FC<ContentProps> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="glx-repo--block">{children}</div>
      <br />
    </>
  );
};
export default LinkBlock;