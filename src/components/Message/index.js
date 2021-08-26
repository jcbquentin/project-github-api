import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Message as SemanticUIMessage } from 'semantic-ui-react';

const Message = ({ message, isError, setIsMessageVisible}) => {
  useEffect(
    () => {
      // console.log('j\'applique l\'effet');
      const timer = window.setTimeout(
        () => {
          // console.log('je file !');
          setIsMessageVisible(false);
        },
        7000,
      );
      return () => {
        // console.log('je nettoie l\'effet');
        clearTimeout(timer);
      };
    },
    [message],
  );
  return (
    <SemanticUIMessage negative={isError}>
      {message}
    </SemanticUIMessage>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  setIsMessageVisible: PropTypes.func.isRequired,
};
Message.defaultProps = {
  isError: false,
};

export default Message;
