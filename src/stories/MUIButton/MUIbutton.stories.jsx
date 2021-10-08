import React from "react";

import Button from "@mui/material/Button";

export default {
  title: "Demo/MUIbutton",
  component: Button,

  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    variant: {
      options: ["contained", "outlined", "default"],
      control: { type: "radio" },
    },
  },
};

function Template(args) {
  const style = {
    backgroundColor: args.backgroundcolor,
    color: args.textcolor,
  };
  console.log(style);
  return (
    <Button
      size={args.size}
      style={style.color && style.backgroundColor ? style : null}
      color={args.color}
      {...args}
    >
      {args.label}
    </Button>
  );
}

export const Default = Template.bind({});

export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  label: "Test",
  backgroundcolor: "blue",
  textcolor: "red",
  variant: "contained",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
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
export const MUIColor = Template.bind({});
MUIColor.args = {
  size: "Large",
  label: "PrimaryColor",
  variant: "contained",
};

export const customStyle = Template.bind({});
customStyle.args = {
  size: "Large",
  label: "style",
  style: {
    color: "yellow",
    backgroundColor: "green",
  },
};
