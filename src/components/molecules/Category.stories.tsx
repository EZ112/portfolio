import type { Meta, Story } from "@storybook/react";
import Category, { Props } from "./Category";

export default {
  title: "Molecules/Category",
  component: Category,
} as Meta;

const Template: Story<Props> = (args) => <Category {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title",
  catList: [
    {
      key: "cat-01",
      num: 1,
      text: "Text 1",
      href: "#",
    },
    {
      key: "cat-01",
      num: 2,
      text: "Text 2",
      href: "#",
    },
  ],
};
