import type { Meta, Story } from "@storybook/react";
import CatLink, { Props } from "./CatLink";

export default {
  title: "Atoms/CatLink",
  component: CatLink,
};

const Template: Story<Props> = (args) => <CatLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  num: 1,
  text: "Text",
  href: "#",
};
