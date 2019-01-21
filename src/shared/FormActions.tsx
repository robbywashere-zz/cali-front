import React from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Container, Item } from "../elements/Gridding";
import { RenderWhen } from "./RenderWhen";

export type FormActionProps = {
  handleNext: React.MouseEventHandler;
  handleCancel: React.MouseEventHandler;
  dividerTop?: boolean;
  dividerBottom?: boolean;
};
export const FormActions: React.SFC<FormActionProps> = ({
  dividerTop = false,
  dividerBottom = false,
  handleNext,
  handleCancel
}) => (
  <React.Fragment>
    <RenderWhen when={dividerTop}>
      <Divider />
    </RenderWhen>
    <Container justify="flex-end">
      <Item>
        <Button size="small" onClick={handleCancel}>
          Cancel
        </Button>
        <Button size="small" type="submit" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Item>
    </Container>
    <RenderWhen when={dividerBottom}>
      <Divider />
    </RenderWhen>
  </React.Fragment>
);
