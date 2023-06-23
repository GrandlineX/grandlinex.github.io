import React from 'react';
import { Grid } from '@grandlinex/react-components';
import { FeatureType } from '../content';

const FeatureBlockItem: React.FC<{ item: FeatureType; right: boolean }> = (
  props
) => {
  const { item, right } = props;
  const { name, icon, description, dots } = item;
  return (
    <Grid
      flex
      flexR
      className="glx-feature--block-item"
      flexMobile
      hCenter
      flexSpaceA
    >
      {!right && (
        <Grid flex vCenter className="glx-icon glx--hide-on-mobile">
          {icon}
        </Grid>
      )}
      <div>
        <h2 className="glx-mono">{name} </h2>
        <p className="glx-description">Description:</p>
        <p className="glx-description--text">{description}</p>
        <ul>
          {dots.map((dot) => (
            <li>{dot}</li>
          ))}
        </ul>
      </div>
      {right && (
        <Grid flex vCenter className="glx-icon glx--hide-on-mobile">
          {icon}
        </Grid>
      )}
    </Grid>
  );
};

export default FeatureBlockItem;
