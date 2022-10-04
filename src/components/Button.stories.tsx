import Button, { Props } from "./Button";

export default {
  title: "Atom/Button",
  component: Button,
};

export const Primary = (args: Props) => <Button {...args} />;
Primary.args = {
  text: "Button",
};

export const Secondary = (args: Props) => <Button {...args} />;
Secondary.args = {
  text: "Button",
  variant: "secondary",
};
