import React, { FunctionComponent } from "react";
import GoogleMapReact from "google-map-react";
import Event from "@material-ui/icons/Event";
import { Avatar, createStyles, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { EventModel } from "../models/EventModel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    green: {
      color: "#fff",
      backgroundColor: green[500],
    },
  })
);

const Marker = (props: any) => {
  const classes = useStyles();
  const { name } = props;
  return (
    <div
      className="marker"
      style={{
        cursor: "pointer",
        width: "30px",
        height: "30px",
      }}
      title={name}
    >
      <Avatar className={classes.green}>
        <Event />
      </Avatar>
    </div>
  );
};

interface IEventsMap {
  events: Array<EventModel>;
}

const EventsMap: FunctionComponent<IEventsMap> = ({ events }) => {
  const center = { lat: -37.909016, lng: 144.76757 };
  const zoom = 4;

  return (
    <div
      className="google-map"
      style={{
        width: "35em",
        height: "35em",
      }}
    >
      <h4 className="map-h4">Come Visit Us At Our Events</h4>
      <GoogleMapReact
        resetBoundsOnResize={true}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {events.map((event, index) => {
          return (
            <Marker
              key={index}
              lat={event.Location.Latitude}
              lng={event.Location.Longitude}
              name={`${event.Title} in ${event.Location.City}, ${event.Location.State}, ${event.Location.Country}`}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default EventsMap;
