import React, { ReactNode } from 'react';
import { FiExternalLink } from 'react-icons/all';

type ContentProps = {
  title: string;
  description: string;
  icon: ReactNode;
  url: string;
};

const LinkBlockItem: React.FC<ContentProps> = (props) => {
  const { title, description, icon, url } = props;
  return (
    <div className="glx-repo--block-item">
      <h3>{title}</h3>
      <h3>{icon}</h3>
      <h3>{description}</h3>
      <h3>
        <a href={url} className="glx-button">
          <FiExternalLink /> OPEN
        </a>
      </h3>
    </div>
  );
};
export default LinkBlockItem;
