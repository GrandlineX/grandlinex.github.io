import React from 'react';
import Badge, { BadgeType } from './Badge';
import BaseLogo from '../img/BaseLogo';

type ContentProps = {
  projectName: string;
  projectKey: string;
  gltoolKey: string;
  description?: string;
  badges?: BadgeType[];
};

const SkeletonBlockItem: React.FC<ContentProps> = (props) => {
  const { projectKey, description, projectName, badges, gltoolKey } = props;
  return (
    <div className="glx-repo--block-item">
      <h3>{projectName}</h3>
      <p>
        <a href={`https://github.com/GrandlineX/${projectKey}`}>
          <img
            src={`https://badge.fury.io/gh/grandlinex%2F${projectKey}.svg`}
            alt="version"
          />
        </a>
      </p>
      <p>
        <img
          src="https://img.shields.io/static/v1?label=type&message=Skeleton&color=blue&logo=DPD"
          alt="version"
        />
      </p>

      <p>
        {badges?.map((badge) => {
          return <Badge type={badge} />;
        })}
      </p>
      <pre className="glx--hide-on-mobile">
        <code>$ gltool --template={gltoolKey} </code>
      </pre>
      <p>{description}</p>
      <p>
        <a
          href="https://grandlinex.github.io/docs/utils/#project-tool"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="img"
            height="24"
            src={`https://img.shields.io/static/v1?label=&message=Install GLX-Tool&color=grey&logo=${BaseLogo}`}
          />
        </a>
      </p>
    </div>
  );
};
SkeletonBlockItem.defaultProps = {
  description: '',
  badges: undefined,
};
export default SkeletonBlockItem;
