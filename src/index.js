import React from "react";

// const getDisplayName = Component =>
//   Component.displayName || Component.name || "Component";
// authHOC :: Component -> (fn -> bool) -> Component
const authHOC = (WrapperComponent, fn) =>
  class Auth extends React.Component {
    // static displayName = `HOC(${getDisplayName(WrapperComponent)})`;
    componentWillMount() {
      // cached the auth result
      this.isAuthed = fn(this.props.authId);
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
  };
export default authHOC;
