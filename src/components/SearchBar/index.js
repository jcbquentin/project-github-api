import React from 'react';
import PropTypes from 'prop-types';

import { Segment, Form } from 'semantic-ui-react';

const SearchBar = ({ search, setSearch, manageSubmit, loading }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
    // console.log('submit');
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          loading={loading}
          icon="search"
          iconPosition="left"
          fluid
          placeholder="Rechercher..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchBar;
