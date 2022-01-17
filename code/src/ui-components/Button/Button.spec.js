import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("<Button/>", () => {
  test("renders", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });

  test("snapshot", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
