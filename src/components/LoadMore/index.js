import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment } from 'semantic-ui-react';

const LoadMore = ({ loadMore, loading }) => (
  <Segment>
    <Button onClick={loadMore} fluid loading={loading}>
      Plus de résultats
    </Button>
  </Segment>
);

LoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoadMore;
