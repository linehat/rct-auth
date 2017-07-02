import React from "react";

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";
// authHOC :: Component -> (fn -> bool) -> Component
const authHOC = (WrapperComponent, fn) => {
  class Auth extends React.Component {
    componentWillMount() {
      // cached the auth result
      this.isAuthed = fn(this.props.authId);
      console.log(WrapperComponent.name);
    }
    render() {
      if (this.props.noCached) {
        if (fn(this.props.authId)) {
          return <WrapperComponent {...this.props} />;
        }
      } else {
        if (this.isAuthed) {
          return <WrapperComponent {...this.props} />;
        }
      }
      return null;
    }
  }
  Auth.displayName = `HOC(${getDisplayName(WrapperComponent)})`;
  return Auth;
};
export default authHOC;
