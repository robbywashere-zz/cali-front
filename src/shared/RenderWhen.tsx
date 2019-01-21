import React from "react";

type RenderWhenProps = {
  when: boolean;
  children: React.ReactNode;
};
export const RenderWhen = ({ when, children }: RenderWhenProps) =>
  !when ? null : <React.Fragment>{children}</React.Fragment>;
