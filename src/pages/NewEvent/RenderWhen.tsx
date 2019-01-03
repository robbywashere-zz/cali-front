import React from "react";
type RenderWhenProps = {
  when: boolean;
  children: JSX.Element;
};
export const RenderWhen = ({ when, children }: RenderWhenProps) =>
  !when ? null : <React.Fragment>{children}</React.Fragment>;
