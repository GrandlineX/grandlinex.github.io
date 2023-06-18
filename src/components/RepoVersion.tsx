import React from 'react';
import { Grid } from '@grandlinex/react-components';

type ContentProps = {
  projectKey: string;
};
// [![GitHub](https://badge.fury.io/gh/grandlinex%2Fcore.svg)](https://github.com/GrandlineX/core)
function RepoVersion({ projectKey }: ContentProps) {
  return (
    <Grid className="glx-repo--app-verison">
      <a href={`https://github.com/GrandlineX/${projectKey}`} target="__blank">
        <img
          alt=""
          src={`https://badge.fury.io/gh/grandlinex%2F${projectKey}.svg`}
        />
      </a>
    </Grid>
  );
}

export default RepoVersion;
