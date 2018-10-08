import React from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Container, Item } from "elements/Gridding";
import { RenderWhen } from "./RenderWhen";

export const FormActions = (
  dividerTop: boolean,
  dividerBottom: boolean,
  handleNext: React.MouseEventHandler,
  handleCancel: React.MouseEventHandler
) => (
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
