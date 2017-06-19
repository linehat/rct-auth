import React from "react";

const getDisplayName = Component => Component.displayName || Component.name || 'Component';
// authHOC :: Component -> (fn -> bool) -> Component
const authHOC = (WrapperComponent, fn) => class Auth extends React.Component {
  // static displayName = `HOC(${getDisplayName(WrapperComponent)})`;
  
  render() {
    if(fn()) {
      return <WrapperComponent {...this.props}/>
    } else {
      return null;
    }
  }
}
export default authHOC;
