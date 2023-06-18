import React, { ReactNode } from 'react';

type ContentProps = {
  children?: ReactNode;
  title?: string;
  icon?: ReactNode;
  smoke?: boolean;
  hideLine?: boolean;
};

function ContentRow(props: ContentProps) {
  const { hideLine, children, title, icon, smoke } = props;
  return (
    <div
      className={`glx-content--row${smoke ? ' glx-content--row-smoke' : ''}`}
    >
      {title ? (
        <div className="title">
          {icon ? <span>{icon}</span> : null}
          <span className="title-content">{title}</span>
        </div>
      ) : null}
      {hideLine ? null : <hr />}
      <div className="glx-content--row-body">
        <br />
        {children}
      </div>
    </div>
  );
}
ContentRow.defaultProps = {
  children: undefined,
  title: undefined,
  icon: undefined,
  smoke: undefined,
  hideLine: undefined,
};

export default ContentRow;
