import { React, useState } from "react";
import PropTypes from "prop-types";
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

export const Form = ({ docName }) => {
  
  const [selectValue, setSelectValue] = useState("firstOption");

  const selectOnChange = (e) => {
    let selected = e.target.value;
    setSelectValue(selected);
  };
  return (
    <>
      {docName === "Comment" ? (
        <>
          <Grid xs={12}>
            <Typography variant="h1">Form: {docName}</Typography>
          </Grid>
          <Grid xs={6}>
            <TextField fullWidth label="First Name"></TextField>
          </Grid>
          <Grid xs={6}>
            <TextField fullWidth label="Last Name"></TextField>
          </Grid>
          <Grid xs={12}>
            <TextField
              multiline
              rows={4}
              rowsMax={10}
              fullWidth
              label="Please leave a comment"
            ></TextField>
          </Grid>
          <Grid xs={1}>
            <Rating fullWidth></Rating>
          </Grid>
        </>
      ) : null}

      {docName === "Document" ? (
        <>
          <Grid xs={12}>
            <Typography variant="h1">Form: {docName}</Typography>
          </Grid>
          <Grid xs={6}>
            <TextField fullWidth label="First Name"></TextField>
          </Grid>
          <Grid xs={6}>
            <TextField fullWidth label="Last Name"></TextField>
          </Grid>
          <Grid xs={6}>
            <TextField fullWidth label="Doc Name"></TextField>
          </Grid>
          <Grid xs={6}>
            <TextField fullWidth label="Doc Number"></TextField>
          </Grid>
          <Grid xs={6}>
            <Select
              displayEmpty
              value={selectValue}
              fullWidth
              label="Doc Number"
              onChange={selectOnChange}
            >
              <MenuItem value="firstOption">firstOption</MenuItem>
              <MenuItem value="secondOption">secondOption</MenuItem>
            </Select>
            <FormHelperText>Make a selection</FormHelperText>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Expiration Date m/dd/yyyy"></TextField>
          </Grid>
        </>
      ) : null}
    </>
  );
};



Form.propTypes = {
  docName: PropTypes.shape({}),
 
};

Form.defaultProps = {
  docName: "Document",
};

