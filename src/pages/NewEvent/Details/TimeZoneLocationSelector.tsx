import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { List, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TZ from "../../../tz.json";

type TZType = { [continent: string]: string[][] };

export const TimeZoneList = styled(List)`
  && {
    max-height: 300px;
    overflow-y: auto;
    padding-top: 0px;
    background-color: ${p => p.theme.palette.background.paper};
  }
`;
export const TimeZoneListUL = styled.ul`
  background-color: ${p => p.theme.palette.background.paper};
  padding-left: 0;
`;

//export class TimeZoneSearch

export const TimeZoneLocationSelector: React.SFC<{}> = props => (
  <TZSelectorContainer>
    <TextField type="search" placeholder="search" margin="normal" />
    <Typography variant="subtitle2">TIME ZONE</Typography>
    <TimeZoneList>
      {Object.keys(TZ).map(continent => (
        <li key={continent}>
          <TimeZoneListUL>
            <ListSubheader>{continent}</ListSubheader>
            {(TZ as TZType)[continent].map(([locale, time], i) => (
              <ListItem button key={`${locale}-${i}`}>
                <ListItemText primary={locale} secondary={time} />
              </ListItem>
            ))}
          </TimeZoneListUL>
        </li>
      ))}
    </TimeZoneList>
  </TZSelectorContainer>
);

export const TZSelectorContainer = styled.div`
  border: 1px solid ${p => p.theme.palette.primary.main};
  border-radius: ${p => p.theme.shape.borderRadius}px;
  padding: ${p => p.theme.spacing.unit * 2}px;
  margin-top: ${p => p.theme.spacing.unit * 2}px;
  margin-bottom: ${p => p.theme.spacing.unit * 2}px;
`;

export default hot(module)(TimeZoneLocationSelector);
