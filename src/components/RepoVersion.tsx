import React from 'react';
import { Grid } from '@grandlinex/react-components';

type ContentProps = {
  projectKey: string;
  projectGroup?: string;
};
// [![GitHub](https://badge.fury.io/gh/grandlinex%2Fcore.svg)](https://github.com/GrandlineX/core)
function RepoVersion({ projectKey, projectGroup }: ContentProps) {
  return (
    <Grid className="glx-repo--app-verison">
      <a
        href={`https://github.com/${
          projectGroup || 'GrandlineX'
        }/${projectKey}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt=""
          src={`https://badge.fury.io/gh/${
            projectGroup || 'grandlinex'
          }%2F${projectKey}.svg`}
        />
      </a>
    </Grid>
  );
}

export default RepoVersion;
