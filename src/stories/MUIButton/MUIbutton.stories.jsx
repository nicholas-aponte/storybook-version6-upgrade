import React from 'react';

import Button from "@mui/material/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Demo/MUIbutton',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} >{args.label}</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "primary",
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  size: "small",
  label: "Outlined",
  variant: "outlined",
  color: "primary",
};

export const Contained = Template.bind({});
Contained.args = {
  size: "small",
  label: "Contained",
  variant: "contained",
  color: "primary",
};
export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  size: "Large",
  label: "PrimaryColor",
  variant: "contained",
  color: "primary",
};


export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  size: "Large",
  label: "SecondayColor",
  variant: "contained",
  color: "secondary",
};

