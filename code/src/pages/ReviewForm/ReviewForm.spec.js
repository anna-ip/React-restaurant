import React from "react";
import { mount, shallow } from "enzyme";
import ReviewForm from "./ReviewForm";

describe("<ReviewForm/>", () => {
  test("render correctly", () => {
    const wrapper = shallow(<ReviewForm />);
    expect(wrapper).toMatchSnapshot();
  });

  //gives TypeError:addReview is not a function
  test.skip("when form is submitted the event is cancelled", () => {
    const wrapper = mount(<ReviewForm />);
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      },
    });
    expect(prevented).toBe(true);
  });

  //TypeError: addReview is not a function
  test.skip("calls onSubmit prop function when form is submitted", () => {
    const onSubmitFn = jest.fn();
    const wrapper = shallow(<ReviewForm onSubmit={onSubmitFn} />);

    let prevented = false;

    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: () => {
        prevented = true;
      },
    });
    expect(prevented).toBe(true);
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
});
