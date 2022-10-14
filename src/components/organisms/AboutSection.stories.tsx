import type { Meta, Story } from "@storybook/react";
import AboutSection from "./AboutSection";

export default {
  title: "Organisms/AboutSection",
  component: AboutSection,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story = (args) => <AboutSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
