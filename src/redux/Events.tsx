export const EventDefault = {
  name: "my event",
  location: "",
  description: "",
  link: "my-event",
  eventColor: "blue",
  duration: 30
};

export type EventState = typeof EventDefault;

export type EventActions = {
  type: "SAVE_EVENT";
  event: EventState;
};

export const saveEvent = (event: EventState): EventActions => ({
  type: "SAVE_EVENT",
  event
});

export const eventActions = {
  saveEvent
};

export const Events = (
  state: EventState = EventDefault,
  action: EventActions
): EventState => {
  switch (action.type) {
    case "SAVE_EVENT":
      return { ...state, ...action.event };
    default:
      return state;
  }
};
export type EventReducer = { Events: EventState };
