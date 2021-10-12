import React from "react";
import {getLists} from "./../../data/api"
import { MuiPage } from "../MuiPage/MuiPage";
import * as formStories from "../form/form.stories";

const lists = getLists()
console.log(lists)

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
      defaultValue: 'Light',
      options: optionsArray,
      control: { type: "select" },
    },
    data: {

    }
    
  },
};

const Template = (args) => {

    return (<MuiPage {...args} />)
} 

export const DynamicForm = Template.bind({});
DynamicForm.args = {
  ...formStories.DynamicForm.args,

};

