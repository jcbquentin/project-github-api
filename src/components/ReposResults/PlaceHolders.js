import React from 'react';
import { Card } from 'semantic-ui-react';

import PlaceHolder from './PlaceHolder';

const PlaceHolders = () => (
  <Card.Group itemsPerRow={3} stackable>
    <PlaceHolder />
    <PlaceHolder />
    <PlaceHolder />
    <PlaceHolder />
    <PlaceHolder />
    <PlaceHolder />
  </Card.Group>
);

export default PlaceHolders;
