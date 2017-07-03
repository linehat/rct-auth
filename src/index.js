import React from "react";

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";
// authHOC :: Component -> (fn -> bool) -> Component
const authHOC = (WrapperComponent, fn) => {
  class Auth extends React.Component {
    componentWillMount() {
      // cached the auth result
      this.isAuthed = fn(this.props.authId);
    }
    render() {
      const props = Object.assign(
        {},
        this.props,
        this.props.innerRef ? { ref: this.props.innerRef } : {}
      );
      if (this.props.noCached) {
        if (fn(this.props.authId)) {
          return <WrapperComponent {...props} />;
        }
      } else {
        if (this.isAuthed) {
          return <WrapperComponent {...props} />;
        }
      }
      return null;
    }
  }
  Auth.displayName = `HOC(${getDisplayName(WrapperComponent)})`;
  return Auth;
};
export default authHOC;
