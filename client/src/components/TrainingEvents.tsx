import React, { FunctionComponent, useEffect, useState } from "react";
import EventsFilter from "./EventsFilters";
import EventsList from "./EventsList";
import { AppBar, Toolbar } from "@material-ui/core";
import Constants from "../common/Constants";
import axios from "axios";

const TrainingEvents: FunctionComponent = () => {
  const [events, setEvents] = useState([]);

  const getEventsFromAPI = async () => {
    try {
      const response = await axios.get(`${Constants.BASE_URL}/events`);

      console.log(response.data.events);
      setEvents(response.data.events);
    } catch (err) {
      console.log("error while making api request");
      console.log(err);
    }
  };

  useEffect(() => {
    getEventsFromAPI();
  }, []);

  return (
    <>
      <AppBar className="mrg" position="static">
        <Toolbar className="navBarToolbar">Training Events</Toolbar>
      </AppBar>
      <EventsFilter />
      <EventsList data={events} />
    </>
  );
};

export default TrainingEvents;
