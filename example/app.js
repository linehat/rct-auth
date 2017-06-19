import React from "react";
// import {div} from 'react-dom';
import authHOC from "../src/";

const Div = props => <div>{props.children}</div>;
const AuthDiv = authHOC(Div, () => false);

export default class App extends React.Component {
  render() {
    return <AuthDiv><h2>Hello, niko</h2></AuthDiv>;
  }
}
