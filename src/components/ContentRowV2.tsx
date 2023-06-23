import React, { ReactNode } from 'react';

type ContentProps = {
  children?: ReactNode;
  title?: string;
  icon?: ReactNode;
  smoke?: boolean;
  hideLine?: boolean;
};

function ContentRowV2(props: ContentProps) {
  const { hideLine, children, title, icon, smoke } = props;
  return (
    <div
      className={`glx-content--row glx--hide-on-mobile${
        smoke ? ' glx-content--row-smoke' : ''
      }`}
    >
      {title ? (
        <div className="title">
          {icon ? <span>{icon}</span> : null}
          <span className="title-content">{title}</span>
        </div>
      ) : null}
    </div>
  );
}
ContentRowV2.defaultProps = {
  children: undefined,
  title: undefined,
  icon: undefined,
  smoke: undefined,
  hideLine: undefined,
};

export default ContentRowV2;
