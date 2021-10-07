import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ ...props }) => {
  console.log("test");
  return <Button size={size} style={style} color={color}></Button>;
};

Button.propTypes = {
  textcolor: PropTypes.color,
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
  backgroundcolor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  test: PropTypes.oneOf(["one", "two", "three"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {};
