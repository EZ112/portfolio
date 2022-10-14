import type { Meta, Story } from "@storybook/react";
import Link, { Props } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
} as Meta;

const Template: Story<Props> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Link",
  href: "#",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Link",
  href: "#",
  variant: "secondary",
};
