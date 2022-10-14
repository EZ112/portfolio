import type { Meta, Story } from "@storybook/react";
import Hero, { Props } from "./Hero";

export default {
  title: "Molecules/Hero",
  components: Hero,
} as Meta;

const Template: Story<Props> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
};
