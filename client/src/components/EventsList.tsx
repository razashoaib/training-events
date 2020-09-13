import React, { FunctionComponent, useState } from "react";
import {
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Event from "@material-ui/icons/Event";
import { EventModel } from "../models/EventModel";
import EventListItemDetail from "./EventListItemDetail";
import { LocationModel } from "../models/LocationModel";

interface IEventsListProps {
  data: Array<EventModel>;
}

const EventsList: FunctionComponent<IEventsListProps> = ({ data }) => {
  const [isEventDetailOpen, setIsEventDetailOpen] = useState(false);
  const [selectedEventItem, setSelectedEventItem] = useState(
    new EventModel(
      "title",
      "time",
      "image",
      new LocationModel("city", "state", "country")
    )
  );

  const handleListItemClick = (event: any) => {
    setSelectedEventItem(event);
    setIsEventDetailOpen(true);
    console.log("kuch hua?");
  };

  const closeEventDetail = () => {
    setIsEventDetailOpen(false);
  };

  return (
    <div>
      {data.length < 1 ? (
        <Chip
          style={{
            marginTop: "20px",
          }}
          label="No events found"
          variant="outlined"
        />
      ) : null}
      <List>
        {data.map((event, index) => (
          <ListItem
            className="eventListItem"
            alignItems="flex-start"
            key={index}
            onClick={() => handleListItemClick(event)}
          >
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
                  {` -- Date: ${new Date(event.Time).toLocaleString()} `}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
      <EventListItemDetail
        isOpen={isEventDetailOpen}
        eventItemDetail={selectedEventItem}
        closed={closeEventDetail}
      />
    </div>
  );
};

export default EventsList;
