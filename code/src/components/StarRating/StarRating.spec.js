import React from "react";
import { shallow } from "enzyme";
import StarRating from "./StarRating";

describe("<StarRating/>", () => {
  test("snapshot test", () => {
    const wrapper = shallow(<StarRating />);
    expect(wrapper).toMatchSnapshot();
  });
});
