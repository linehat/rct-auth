import React from 'react';
import authHOC from "../src/";
import renderer from 'react-test-renderer';


const Div = props => <div>{props.children}</div>;
const AuthDiv = authHOC(Div, () => false);


it('render auth', () => {
  const tree = renderer.create(
    <AuthDiv><h2>Hello, niko</h2></AuthDiv>
  ).toJSON();
  expect(tree).toMatchSnapshot():
})