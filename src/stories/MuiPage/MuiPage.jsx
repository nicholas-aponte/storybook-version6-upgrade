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
export const  MuiPage = ({ docName }) => {
  


  return (
    <div
      style={{
        paddingRight: "20%",
        paddingBottom: "20%",
        paddingLeft: "20%",
      }}
    >
      <Form docName = {docName}/>
      <Grid container>
        <Grid item xs={12}>
          <Button>Submit</Button>
        </Grid>
      </Grid>
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

