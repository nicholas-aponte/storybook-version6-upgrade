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
import { Themes } from "../form/formstyles";

function themePicker(theme) {
  // console.log(Themes)
  for (let i = 0; i < Themes.length; i++) {
    console.log(theme);
    console.log(Themes.length);
    if (theme === Themes[i].name) {
      return Themes[i];
    }
  }
}

export const Form = ({ docName, theme }) => {
  console.log(theme);
  const selectedTheme = themePicker(theme);
  console.log(selectedTheme);

  const [selectValue, setSelectValue] = useState("firstOption");

  const selectOnChange = (e) => {
    let selected = e.target.value;
    setSelectValue(selected);
  };
  return (
    <div style={selectedTheme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography variant="h1">Form: {docName}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        {docName === "Comment" ? (
          <>
            <Grid xs={6}>
              <TextField
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                fullWidth
                label="First Name"
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                style={selectedTheme}
                fullWidth
                label="Last Name"
              ></TextField>
            </Grid>
            <Grid xs={12}>
              <TextField
                style={selectedTheme}
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
            
            <Grid xs={6}>
              <TextField
                style={selectedTheme}
                fullWidth
                label="First Name"
              ></TextField>
            </Grid>
            <Grid xs={6}>
              <TextField
                style={selectedTheme}
                fullWidth
                label="Last Name"
              ></TextField>
            </Grid>
            <Grid xs={6}>
              <TextField
                style={selectedTheme}
                fullWidth
                label="Doc Name"
              ></TextField>
            </Grid>
            <Grid xs={6}>
              <TextField
                style={selectedTheme}
                fullWidth
                label="Doc Number"
              ></TextField>
            </Grid>
            <Grid xs={6}>
              <Select
                style={selectedTheme}
                displayEmpty
                value={selectValue}
                fullWidth
                label="Doc Number"
                onChange={selectOnChange}
              >
                <MenuItem value="firstOption">firstOption</MenuItem>
                <MenuItem value="secondOption">secondOption</MenuItem>
              </Select>
              <FormHelperText style={selectedTheme}>
                Make a selection
              </FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={selectedTheme}
                fullWidth
                label="Expiration Date m/dd/yyyy"
              ></TextField>
            </Grid>
          </>
        ) : null}
        <Button style={selectedTheme}>Submit</Button>
      </Grid>
    </div>
  );
};

Form.propTypes = {
  docName: PropTypes.shape({}),
  theme: PropTypes.shape({}),
};

Form.defaultProps = {
  docName: "Document",
};
