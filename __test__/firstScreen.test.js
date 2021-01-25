import React from "react";
import FirstScreen from "../Screens/FirstScreen";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("First Screen's tests", () => {
  it("renders and matches snapshot correctly", () => {
    const tree = renderer.create(<FirstScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const comp = shallow(<FirstScreen />);
    expect(comp).toHaveLength(1);
  });
  it("should render the button correctly", () => {
    const comp = shallow(<FirstScreen />);
    const button = comp.findWhere(
      (node) => node.prop("testID") === "first-button"
    );
    expect(button.length).toBe(1);
  });
  it("should not invoke function on button press", () => {
    const mockFunc = jest.fn();
    const mockprops = {
      title: "Submit",
      onPress: mockFunc,
      disabled: false,
    };
    const comp = shallow(<FirstScreen />);
    const button = comp.findWhere(
      (node) => node.prop("testID") === "first-button"
    );
    button.simulate("press");
    expect(mockFunc.mock.calls.length).toBe(0);
  });
});
