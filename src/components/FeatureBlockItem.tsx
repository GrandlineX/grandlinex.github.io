import React from 'react';
import { FeatureType } from '../content';

const FeatureBlockItem: React.FC<{ item: FeatureType }> = (props) => {
  const { item } = props;
  const { name, icon, description, dots } = item;
  return (
    <div className="glx-feature--block-item">
      <h3 className="glx-mono">{name} </h3>
      <p className="glx-icon">{icon}</p>
      <p className="glx-description">Description:</p>
      <p className="glx-description--text">{description}</p>
      <ul>
        {dots.map((dot) => (
          <li>{dot}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureBlockItem;
