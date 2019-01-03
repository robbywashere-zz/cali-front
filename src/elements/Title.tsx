import Typography from "@material-ui/core/Typography";

import React from "react";

const Title: React.SFC<{}> = ({ children }) => (
  <Typography variant="title" gutterBottom>
    {children}
  </Typography>
);

export default Title;
