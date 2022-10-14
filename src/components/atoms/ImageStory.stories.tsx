import type { Meta, Story } from "@storybook/react";
import ImageStory, { Props } from "./ImageStory";

export default {
  title: "Atoms/ImageStory",
  component: ImageStory,
} as Meta;

const Template: Story<Props> = (args) => <ImageStory {...args} />;

export const LeftPotrait = Template.bind({});
LeftPotrait.args = {
  image: "/src/assets/images/img-1.jpg",
  story: (
    <>
      “A Legendary hero is usually the founder of something - the founder of new
      age, the founder of a new religion, the founder of a new city, the founder
      of a new way of life.
      <br />
      In order to found Something new, one has to leave old and go on a quest of
      the seed idea, a germinal idea that will have the potential of bring forth
      that new thing”
    </>
  ),
  author: "Joseph Campbell, The hero with a Thousand Faces",
};

export const RightLandscape = Template.bind({});
RightLandscape.args = {
  image: "/src/assets/images/img-2.jpg",
  story: (
    <>
      When I strive to build on something, I always have the notion that doing
      so is a noble endeavor that we would partake in to find a better way of
      living.
      <br />
      In terms of starting a business, we are looking for something that the
      majority of people will find valuable. This also became the rationale
      behind our MVP experimentation. To determine whether our small prototype
      is useful or not.
    </>
  ),
  align: "right",
  orient: "landscape",
};
