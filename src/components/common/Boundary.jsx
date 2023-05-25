import PropType from 'prop-types';
import React, { Component, useState } from 'react';

const Boundary = ({ children }) => {

  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="loader">
        <h3>:( Something went wrong.</h3>
      </div>
    )
  }
  return children;
}

Boundary.propTypes = {
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default Boundary;