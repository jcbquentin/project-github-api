import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

const RepoResult = ({ name, description, login, avatar_url: avatarUrl }) => (
  <Card>
    <Image src={avatarUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        {login}
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
);

RepoResult.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default RepoResult;
