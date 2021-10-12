import { React, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "../form/form"

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
export const  MuiPage = ({ docName, theme, listName }) => {
  const lists = JSON.parse(localStorage.getItem("Lists"))
  console.log(lists)
  let selectedList = [];

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]["listName"] === listName) {

      selectedList = lists[i];
    }
  }
  console.log(selectedList)
  const displayList = selectedList["list"].map((item) => {
 
    return <li>{item}</li>;
  });
console.log(displayList)

  return (
    <div
      style={{
        paddingRight: "20%",
        paddingBottom: "20%",
        paddingLeft: "20%",
      }}
    >
      <Form theme={theme} docName={docName} displayList = {displayList} />
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


