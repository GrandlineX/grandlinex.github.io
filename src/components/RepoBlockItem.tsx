import React from 'react';
import { FaGithub, FaNpm, SiReadthedocs, SiSonarcloud } from 'react-icons/all';
import RepoVersion from './RepoVersion';
import { RepoType } from '../content';
import openNew from './openWindow';
import GIcon from '../img/GIcon';

const RepoBlockItem: React.FC<{ item: RepoType }> = (props) => {
  const { item } = props;
  const { projectKey, description, projectName, icon, includes } = item;
  return (
    <div className="glx-repo--block-item">
      {icon ? (
        <span className="glx-repo--block-icon">
          <GIcon type={icon} height="30px" />
        </span>
      ) : null}

      <h3 className="glx-mono">{projectName} </h3>

      <p className="glx-mono">
        Latest version: <RepoVersion projectKey={projectKey} />
      </p>
      <p className="glx-description">{description}</p>
      <pre className="glx--hide-on-mobile">
        <code>$ npm install @grandlinex/{projectKey} </code>
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
          <button type="submit" onClick={() => openNew(projectKey, 'npm')}>
            <FaNpm />
          </button>
          <button type="submit" onClick={() => openNew(projectKey, 'docs')}>
            <SiReadthedocs />
          </button>
          <button type="submit" onClick={() => openNew(projectKey, 'sonar')}>
            <SiSonarcloud />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepoBlockItem;
