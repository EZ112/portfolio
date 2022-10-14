import type { Meta, Story } from "@storybook/react";
import HeroSection, { Props } from "./HeroSection";

export default {
  title: "Organisms/HeroSection",
  component: HeroSection,
} as Meta;

const Template: Story<Props> = (args) => <HeroSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
};
