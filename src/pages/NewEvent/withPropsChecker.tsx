import React, { Component } from "react";

export default function withPropsChecker(WrappedComponent: any) {
  return class PropsChecker extends Component {
    componentWillReceiveProps(nextProps: any) {
      Object.keys(nextProps)
        .filter(key => {
          return nextProps[key] !== (this.props as any)[key];
        })
        .map(key => {
          console.log(
            "changed property:",
            key,
            "from",
            (this.props as any)[key],
            "to",
            nextProps[key]
          );
        });
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
