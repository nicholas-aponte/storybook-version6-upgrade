import { React, useState } from "react";
import PropTypes from "prop-types";
import {Form} from "../form/form"
import {
  Rating,
  MenuItem,
  Grid,
  Typography,
  Select,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
// based on docname, we show a different form

// export const Form = ({ docName }) => {
export const  MuiPage = ({ docName, theme }) => {
  
console.log("test")

  return (
    <div
      style={{
        paddingRight: "20%",
        paddingBottom: "20%",
        paddingLeft: "20%",
      }}
    >
      <Form theme={theme} docName={docName} />
    </div>
  );
}
MuiPage.propTypes = {
  // docName: PropTypes.shape({}),
  docName: {
    options: ["Document", "Comment"],
    control: { type: "radio" },
  },
  
};

MuiPage.defaultProps = {
  docName: "Document",
  theme: "Light"
};


