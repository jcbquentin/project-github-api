import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';

const PlaceHolder = () => (
  <Card>
    <Placeholder>
      <Placeholder.Image square />
    </Placeholder>
    <Card.Content>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length="very short" />
          <Placeholder.Line length="short" />
        </Placeholder.Header>
      </Placeholder>
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line length="long" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>
  </Card>
);

export default PlaceHolder;
