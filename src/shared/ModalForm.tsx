import styled from "styled-components";
import React from "react";

export const ModalForm = styled.form`
  width: ${({ width = "275px" }) => width};
  margin: auto;
` as React.SFC<{ width?: string }>;
