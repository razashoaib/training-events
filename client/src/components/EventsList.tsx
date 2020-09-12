import React, { FunctionComponent } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Event from "@material-ui/icons/Event";
import { EventModel } from "../models/EventModel";

interface IEventsListProps {
  data: Array<EventModel>;
}

const EventsList: FunctionComponent<IEventsListProps> = ({ data }) => (
  <div>
    <h3>Events List</h3>
    <List className="eventListItem">
      {data.map((event, index) => (
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar>
            <Avatar>
              <Event />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={event.Title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className="descrption"
                  color="textPrimary"
                >
                  {`${event.Location.City}, ${event.Location.State}, ${event.Location.Country}`}
                </Typography>
                {` -- Date: ${event.Time} `}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  </div>
);

export default EventsList;
