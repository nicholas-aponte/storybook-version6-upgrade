import { React, useState } from "react";
import PropTypes from "prop-types";
import { } from "@storybook/design-system";
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
import { makeStyles } from "@mui/styles";
import { Themes } from "../form/formstyles";

function themePicker(theme) {
  
  for (let i = 0; i < Themes.length; i++) {
  
    if (theme === Themes[i].name) {
      return Themes[i];
    }
  }
}

export const Form = ({ docName, theme }) => {
  const selectedTheme = themePicker(theme);

    const useStyles = makeStyles({
      label: {
        "&&": {
          color: selectedTheme.textField.color,
        },
      },
      contentText: {
        "&&": {
          color: selectedTheme.textField.color,
        },
      },
    });
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState("firstOption");

  const selectOnChange = (e) => {
    let selected = e.target.value;
    setSelectValue(selected);
  };
    return (
      <div style={selectedTheme.container}>
        
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Typography style={selectedTheme.titles} variant="h1">
              Form: {docName}
            </Typography>
          </Grid>
        </Grid>
        {docName === "Comment" ? (
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                style={selectedTheme.textField}
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  className: classes.label,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
                fullWidth
                label="Last Name"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
                multiline
                rows={4}
                rowsMax={10}
                fullWidth
                label="Please leave a comment"
              ></TextField>
            </Grid>
            <Grid item xs={1}>
              <Rating fullWidth></Rating>
            </Grid>
          </Grid>
        ) : null}
        {docName === "Document" ? (
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
                fullWidth
                label="First Name"
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
                fullWidth
                label="Last Name"
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
                fullWidth
                label="Doc Name"
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
                fullWidth
                label="Doc Number"
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <Select
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
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
              <TextField
                InputProps={{
                  className: classes.contentText,
                }}
                InputLabelProps={{
                  className: classes.label,
                }}
                style={selectedTheme.textField}
                fullWidth
                label="Expiration Date m/dd/yyyy"
              ></TextField>
            </Grid>
          </Grid>
        ) : null}
        <Button style={selectedTheme}>Submit</Button>
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
