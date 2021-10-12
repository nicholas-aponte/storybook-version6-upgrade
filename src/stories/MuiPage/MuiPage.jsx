import { React, useState } from "react";
import { Form } from "../form/form";

export const MuiPage = ({ docName, theme, listName }) => {
  const lists = JSON.parse(localStorage.getItem("Lists"));
  
  let selectedList = [];

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]["listName"] === listName) {
      selectedList = lists[i];
    }
  }
  
  const displayList = selectedList["list"].map((item) => {
    return <li>{item}</li>;
  });
  

  return (
    <div
      style={{
        paddingRight: "20%",
        paddingBottom: "20%",
        paddingLeft: "20%",
      }}
    >
      <Form theme={theme} docName={docName} displayList={displayList} />
    </div>
  );
};
MuiPage.propTypes = {
  docName: {
    options: ["Document", "Comment"],
    control: { type: "radio" },
  },
};

MuiPage.defaultProps = {
  docName: "Document",
  theme: "Light",
};
