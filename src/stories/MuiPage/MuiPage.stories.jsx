import React from "react";
import {getLists} from "./../../data/api"
import { MuiPage } from "../MuiPage/MuiPage";
import * as formStories from "../form/form.stories";

 getLists()

const lists = JSON.parse(localStorage.getItem("Lists"))
let listOptions = []
for (let i = 0; i < lists.length; i++){
  listOptions.push(lists[i]["listName"]);
}
console.log(listOptions)
console.log(listOptions);
const optionsArray = ["Dark", "Light", "Red", "Blue"]


export default {
  title: "Demo/MuiPage",
  component: MuiPage,
  argTypes: {
    docName: {
      options: ["Document", "Comment"],
      control: { type: "radio" },
    },
    theme: {
      defaultValue: "Light",
      options: optionsArray,
      control: { type: "select" },
    },
    listName: {
      defaultValue: "List-A",
      options: listOptions,
      control: { type: "select" },
    },
  },
};

const Template = (args) => {

    return (<MuiPage {...args} />)
}


export const DynamicForm = Template.bind({});
DynamicForm.args = {
  ...formStories.DynamicForm.args,

};



