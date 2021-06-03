import React from "react";
import { shallow } from "enzyme";
import ReviewForm from "./ReviewForm";

describe("<ReviewForm/>", () => {
  test("render correctly", () => {
    const wrapper = shallow(<ReviewForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
