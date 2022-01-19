import React from 'react';
import { FaGithub, FaNpm, SiReadthedocs, SiSonarcloud } from 'react-icons/all';
import { SkeletonType } from '../content';
import openNew from './openWindow';
import GIcon from '../img/GIcon';

const SkeletonBlockItem: React.FC<{ item: SkeletonType }> = (props) => {
  const { item } = props;
  const { projectKey, description, projectName, command, includes, icon } =
    item;
  return (
    <div className="glx-repo--block-item">
      {icon ? (
        <span className="glx-repo--block-icon">
          <GIcon type={icon} height="30px" />
        </span>
      ) : null}
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
