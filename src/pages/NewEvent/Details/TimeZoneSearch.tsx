import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { List, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { TZType, TZFinder } from "./timezoneFinder";
import { anyEvent, ChangeHandlerProps } from "../../../shared/HandleChange";

export const TimeZoneList = styled(List)`
  && {
    height: 300px;
    overflow-y: auto;
    padding-top: 0px;
    background-color: ${p => p.theme.palette.background.paper};
  }
`;
export const TimeZoneListUL = styled.ul`
  background-color: ${p => p.theme.palette.background.paper};
  padding-left: 0;
`;

export const TZListSubHeader = styled(ListSubheader)`
  && {
    padding-right: 0;
    padding-left: 0;
    width: calc(100% - ${p => p.theme.spacing.unit * 5}px);
  }
`;

export interface TimeZoneSearchProps
  extends ChangeHandlerProps<{ tzLocale: string }> {
  tzFinder: TZFinder;
}

const TZSinitialState = {
  zones: {} as TZType
};
export class TimeZoneSearch extends React.Component<
  TimeZoneSearchProps,
  typeof TZSinitialState
> {
  state = TZSinitialState;

  tzFinder: TZFinder;

  constructor(props: TimeZoneSearchProps) {
    super(props);
    this.tzFinder = props.tzFinder;
  }

  componentDidMount() {
    this.setState({ zones: this.tzFinder.getAll() });
  }

  search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchStr = e.target.value;
    await new Promise(rs => setImmediate(rs));
    if (!searchStr.length) {
      this.setState({ zones: this.tzFinder.getAll() });
    } else {
      let zones = await this.tzFinder.search(searchStr);
      this.setState({ zones });
    }
  };

  render() {
    const { handleChange, tzLocale } = this.props;
    const TZ = this.state.zones;
    return (
      <TZSelectorContainer>
        <TextField
          fullWidth
          onChange={this.search}
          type="search"
          placeholder="search"
          margin="normal"
        />
        <Typography variant="subtitle2">TIME ZONE</Typography>
        <TimeZoneList>
          {Object.keys(TZ).map(continent => (
            <li key={continent}>
              <TimeZoneListUL>
                <TZListSubHeader>{continent}</TZListSubHeader>
                {TZ[continent].map(([locale, time], i) => (
                  <ListItem
                    value={locale}
                    onClick={() => handleChange(anyEvent("tzLocale", locale))}
                    selected={locale === tzLocale}
                    button
                    key={`${locale}-${i}`}
                  >
                    <ListItemText primary={locale} secondary={time} />
                  </ListItem>
                ))}
              </TimeZoneListUL>
            </li>
          ))}
        </TimeZoneList>
      </TZSelectorContainer>
    );
  }
}

export const TZSelectorContainer = styled.div`
  border: 1px solid ${p => p.theme.palette.primary.main};
  border-radius: ${p => p.theme.shape.borderRadius}px;
  padding: ${p => p.theme.spacing.unit * 2}px;
  margin-top: ${p => p.theme.spacing.unit * 2}px;
  margin-bottom: ${p => p.theme.spacing.unit * 2}px;
`;

export default hot(module)(TimeZoneSearch);
