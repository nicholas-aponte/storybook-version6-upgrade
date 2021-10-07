import React from 'react';

import Button from "@mui/material/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Demo/MUIbutton',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
    color: {
      options: ['primary', 'secondary'],
      control: {type: 'radio'}
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {type: 'radio'}
    },
    variant: {
      options: ['contained', 'outlined', 'default'],
      control: {type: 'radio'}
    }
  },


};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <Button {...args} >{args.label}</Button>;
function Template(args) {
  const style = {
    backgroundColor: args.backgroundcolor,
    color: args.textcolor
  }
console.log(style)
  return (
    <Button
      size={args.size}
      style={style.color && style.backgroundColor ? style : null}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      color={args.color}
      {...args}
    >
      {args.label}
    </Button>
  );
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args


export const Default = Template.bind({});

export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  label: "Test",
  backgroundcolor: "blue",
  textcolor: "red",
  variant: "contained"
  
 }

export const Primary = Template.bind({});
Primary.args = {
  primary : true,
  label: 'Button',
  test: "one"
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
export const customStyle = Template.bind({});
customStyle.args = {
  size: "Large",
  label: "style",
  style: {
   color: "yellow",
   backgroundColor: "green"
   
}
};





