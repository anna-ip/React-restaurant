import React from "react";
import Reviews from "./Reviews";
import { shallow } from "enzyme";

jest.mock("React", () => ({
  ...jest.requireActual("React"),
  useContext: () => [fakeContext],
}));

const fakeContext = {
  reviews: [
    {
      id: 1,
      date: "Mon May 31 2021",
      name: "susan smith",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      date: "Mon May 31 2021",
      name: "anna johnson",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      date: "Mon May 31 2021",
      name: "peter jones",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      date: "Mon May 31 2021",
      name: "bill anderson",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
  ],
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("<Reviews/>", () => {
  test("<Renders correctly using enzyme", () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper).toMatchSnapshot();
  });

  test("reviews exist", () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
