import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

/**
 * Primary UI component for user interaction
 */
export const Button = ({color, backgroundColor, size, label, style, ...props }) => {
  return (
    <Button
      size = {size}
      style = {style}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      color={color}
    >
      {test}
    </Button>
  );
};

Button.propTypes = {
  /**
   * component css styles
   */
  style: PropTypes.object,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'small',
  onClick: undefined,
};
