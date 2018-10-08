import React from "react";
export const RenderWhen = ({ when, children }) =>
  !when ? null : <React.Fragment>{children}</React.Fragment>;
