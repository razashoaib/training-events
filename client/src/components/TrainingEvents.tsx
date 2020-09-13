import React, { FunctionComponent, useEffect, useState } from "react";
import EventsFilter from "./EventsFilters";
import EventsList from "./EventsList";
import { AppBar, Toolbar } from "@material-ui/core";
import Constants from "../common/Constants";
import axios from "axios";
import EventsMap from "./EventsMap";

const TrainingEvents: FunctionComponent = () => {
  const [events, setEvents] = useState([]);

  const getEventsFromAPI = async (url: string) => {
    try {
      const response = await axios.get(url);

      setEvents(response.data.events);
    } catch (err) {
      console.log("error while making api request");
      console.log(err);
    }
  };

  const filterEventsData = (title: string, location: string, date: string) => {
    let url = `${Constants.BASE_URL}/events`;
    let isParamAdded = false;

    if (title !== "") {
      url += `?query=${title}`;
      isParamAdded = true;
    }
    if (location !== "") {
      url += isParamAdded ? `&location=${location}` : `?location=${location}`;
      isParamAdded = true;
    }
    if (date !== "") {
      url += isParamAdded ? `&date=${date}` : `?date=${date}`;
      isParamAdded = true;
    }

    getEventsFromAPI(url);
  };

  useEffect(() => {
    getEventsFromAPI(`${Constants.BASE_URL}/events`);
  }, []);

  return (
    <>
      <AppBar className="mrg" position="static">
        <Toolbar className="navBarToolbar">Training Events</Toolbar>
      </AppBar>
      <div className="leftSection">
        <EventsFilter
          filterEventsData={(title, location, date) =>
            filterEventsData(title, location, date)
          }
        />
        <EventsList data={events} />
      </div>
      <div className="rightSection">
        <EventsMap events={events} />
      </div>
    </>
  );
};

export default TrainingEvents;
