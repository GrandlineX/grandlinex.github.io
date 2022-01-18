import React, { ReactNode } from 'react';

type ContentProps = {
  children?: ReactNode;
  title?: string;
  icon?: ReactNode;
};

const ContentRow: React.FC<ContentProps> = (props) => {
  const { children, title, icon } = props;
  return (
    <div className="glx-content--row">
      {title ? (
        <>
          <div className="title">
            {icon ? <span>{icon}</span> : null}
            <span>{title}</span>
          </div>
          <hr />
        </>
      ) : (
        <hr />
      )}
      <div className="glx-content--row-body">
        <br />

        {children}
      </div>
    </div>
  );
};
ContentRow.defaultProps = {
  children: undefined,
  title: undefined,
  icon: undefined,
};

export default ContentRow;
