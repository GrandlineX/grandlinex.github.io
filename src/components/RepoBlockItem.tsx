import React from 'react';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { SiReadthedocs, SiSonarcloud } from 'react-icons/si';
import { Grid } from '@grandlinex/react-components';
import RepoVersion from './RepoVersion';
import { External, RepoType } from '../content';
import openNew from './externalLink';

import GIcon, { GIconType } from '../img/GIcon';

function ConditionalLink({
  projectKey,
  type,
  children,
  disableLink,
  customLink,
}: {
  projectKey: string;
  type: External;
  children: React.ReactNode;
  disableLink?: External[];
  customLink?: { type: External; url: string }[];
}) {
  if (disableLink?.includes(type)) {
    return null;
  }
  return (
    <a
      href={
        customLink?.find((e) => e.type === type)?.url ||
        openNew(projectKey, type)
      }
      title={`Open ${type} page`}
      target="__blank"
    >
      {children}
    </a>
  );
}
ConditionalLink.defaultProps = {
  disableLink: undefined,
  customLink: undefined,
};

function RepoBlockItem({ item }: { item: RepoType }) {
  const {
    projectKey,
    description,
    newRepo,
    projectName,
    icon,
    includes,
    cmd,
    disableLink,
    customLink,
  } = item;
  return (
    <div className="glx-repo--block-item">
      {icon ? (
        <span className="glx-repo--block-icon">
          {typeof icon === 'string' ? (
            <GIcon type={icon as GIconType} height="30px" />
          ) : (
            icon
          )}
        </span>
      ) : null}
      {newRepo ? <span className="glx-repo--block-new">* NEW *</span> : null}

      <h3 className="glx-mono">{projectName} </h3>

      <Grid flex flexR className="glx-mono" vCenter gap={12}>
        <Grid>Latest version:</Grid>
        <RepoVersion projectKey={projectKey} />
      </Grid>
      <p className="glx-description">{description}</p>
      <pre className="glx--hide-on-mobile">
        <code>$ {cmd || `npm i @grandlinex/${projectKey}`} </code>
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
        <Grid flex hCenter className="glx-button-grid">
          <ConditionalLink
            projectKey={projectKey}
            type={External.github}
            disableLink={disableLink}
            customLink={customLink}
          >
            <FaGithub />
          </ConditionalLink>
          <ConditionalLink
            projectKey={projectKey}
            type={External.npm}
            disableLink={disableLink}
            customLink={customLink}
          >
            <FaNpm />
          </ConditionalLink>
          <ConditionalLink
            projectKey={projectKey}
            type={External.docs}
            disableLink={disableLink}
            customLink={customLink}
          >
            <SiReadthedocs />
          </ConditionalLink>
          <ConditionalLink
            projectKey={projectKey}
            type={External.sonar}
            disableLink={disableLink}
            customLink={customLink}
          >
            <SiSonarcloud />
          </ConditionalLink>
        </Grid>
      </div>
    </div>
  );
}

export default RepoBlockItem;
