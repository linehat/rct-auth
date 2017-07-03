import React from "react";
import _ from "lodash";
// import {div} from 'react-dom';
import authHOC from "../src/";

const Div = props => <div>{props.children}</div>;
const authDict = ["1", "2", "3", "4", "5"];

const authFn = authId => {
  console.log(`authFn called with authid: ${authId}`);
  return _.includes(authDict, authId);
};
const AuthDiv = authHOC(Div, authFn);

class NamedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: false };
  }
  getName() {
    return "inner name";
  }
  render() {
    return <div>this is named label</div>;
  }
}
const AuthNamedComponent = authHOC(NamedComponent, authFn);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeAuthId = this.changeAuthId.bind(this);
    this.state = {
      noAuth: "99"
    };
  }
  changeAuthId() {
    this.setState({
      noAuth: "1"
    });
  }
  render() {
    return (
      <div>
        <h1>cached auth</h1>
        <button onClick={this.changeAuthId}>change authId</button>
        <AuthDiv authId="3"><h2>will display</h2></AuthDiv>
        <AuthDiv authId={this.state.noAuth}><h2>will not display</h2></AuthDiv>
        <h1>nocached auth</h1>
        <AuthDiv authId={this.state.noAuth} noCached>
          <h2>will display in nocached</h2>
        </AuthDiv>
        <AuthNamedComponent
          authId="3"
          innerRef={_ => console.log(_.getName())}
        />
      </div>
    );
  }
}
