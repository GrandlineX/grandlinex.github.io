import React from 'react';
import Badge, { BadgeType } from './Badge';

type ContentProps = {
  projectName: string;
  projectKey: string;
  description?: string;
  badges?: BadgeType[];
};

const RepoBlockItem: React.FC<ContentProps> = (props) => {
  const { projectKey, description, projectName, badges } = props;
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
        <a href={`https://www.npmjs.com/package/@grandlinex/${projectKey}`}>
          <img
            src="https://img.shields.io/static/v1?label=npm&message=Package&color=red&logo=NPM"
            alt="version"
          />
        </a>
      </p>
      <p>
        <a href={`https://grandlinex.github.io/${projectKey}`}>
          <img
            src="https://img.shields.io/static/v1?label=doc&message=Latest&color=blue&logo=READTHEDOCS"
            alt="version"
          />
        </a>
      </p>
      <p>
        {badges?.map((badge) => {
          return <Badge type={badge} />;
        })}
      </p>
      <pre>
        <code>$ npm install @grandlinex/{projectKey} </code>
      </pre>
      <p>{description}</p>
    </div>
  );
};
RepoBlockItem.defaultProps = {
  description: '',
  badges: undefined,
};
export default RepoBlockItem;
