import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

test("<App/> renders correctly using enzyme", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
