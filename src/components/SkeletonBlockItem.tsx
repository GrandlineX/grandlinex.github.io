import React from 'react';
import { FaGithub, FaNpm, SiReadthedocs, SiSonarcloud } from 'react-icons/all';
import { BadgeType } from './Badge';
import RepoVersion from './RepoVersion';
import { RepoType, SkeletonType } from '../content';

type ContentProps = {
  projectName: string;
  projectKey: string;
  description?: string;
  badges?: BadgeType[];
};

const openNew = (
  projectKey: string,
  type: 'github' | 'docs' | 'sonar' | 'npm'
) => {
  let url = '';
  switch (type) {
    case 'sonar':
      url = `https://sonarcloud.io/project/overview?id=GrandlineX_${projectKey}`;
      break;
    case 'github':
      url = `https://github.com/GrandlineX/${projectKey}`;
      break;
    case 'docs':
      url = `https://grandlinex.github.io/${projectKey}`;
      break;
    case 'npm':
      url = `https://www.npmjs.com/package/@grandlinex/${projectKey}`;
      break;
    default:
  }
  window.open(url, '_blank');
};

const SkeletonBlockItem: React.FC<{ item: SkeletonType }> = (props) => {
  const { item } = props;
  const { projectKey, description, projectName, command, includes } = item;
  return (
    <div className="glx-repo--block-item">
      <h3 className="glx-mono">{projectName} </h3>

      <p className="glx-description">{description}</p>

      <pre className="glx--hide-on-mobile">
        <code>{command} </code>
      </pre>

      {includes ? <p className="glx-description">Includes:</p> : null}
      <ul>
        {includes?.map((dot) => (
          <li>{dot}</li>
        ))}
      </ul>

      <div className="glx-card-footer--space" />
      <div className="glx-card-footer">
        <hr />
        <div className="glx-button-grid">
          <button type="submit" onClick={() => openNew(projectKey, 'github')}>
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBlockItem;
