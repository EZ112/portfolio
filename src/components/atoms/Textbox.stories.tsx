import type { Meta, Story } from "@storybook/react";
import Textbox, { Props } from "./Textbox";

export default {
  title: "Atoms/Textbox",
  components: Textbox,
} as Meta;

const Template: Story<Props> = (args) => <Textbox {...args} />;

export const left = Template.bind({});
left.args = {
  label: "label",
  value: "value",
};

export const right = Template.bind({});
right.args = {
  label: "label",
  value: "value",
  align: "right",
};
