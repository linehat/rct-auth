import React from "react";
import _ from "lodash";
import authHOC from "../src/";
import renderer from "react-test-renderer";

it("render auth", () => {
  const Div = props => <div>{props.children}</div>;
  const AuthDiv = authHOC(Div, id => _.includes(["1", "2", "3"], id));
  const tree = renderer
    .create(
      <div>
        <AuthDiv authId="1"><h2>auth ok</h2></AuthDiv>
        <AuthDiv authId="0"><h2>no auth</h2></AuthDiv>
        <AuthDiv authId="1" noCached><h2>no auth</h2></AuthDiv>
        <AuthDiv authId="0" noCached><h2>no auth</h2></AuthDiv>
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
