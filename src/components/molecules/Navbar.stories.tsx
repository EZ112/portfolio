import type { Meta, Story } from "@storybook/react";
import Navbar, { Props } from "./Navbar";

export default {
  title: "Molecules/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "200vh" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  navList: [
    { key: "nav-01", text: "link-1", href: "#" },
    { key: "nav-02", text: "link-2", href: "#" },
  ],
};
