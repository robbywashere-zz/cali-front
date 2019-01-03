import { Link, LinkProps } from "react-router-dom";
import Button, { ButtonProps } from "@material-ui/core/Button";
import React from "react";
export const B: React.SFC<ButtonProps & LinkProps["to"]> = props => (
  <Button component={Link} {...props} />
);
export default B;
