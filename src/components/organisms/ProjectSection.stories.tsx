import type { Meta, Story } from "@storybook/react";
import ProjectSection from "./ProjectSection";

export default {
  title: "Organisms/ProjectSection",
  component: ProjectSection,
} as Meta;

const Template: Story = (args) => <ProjectSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
