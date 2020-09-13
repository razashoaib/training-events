import React, { FunctionComponent, useState, ChangeEvent } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";

interface IEventsFilterProp {
  filterEventsData: (title: string, location: string, date: string) => void;
}

const EventsFilter: FunctionComponent<IEventsFilterProp> = ({
  filterEventsData,
}) => {
  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [dateQuery, setDateQuery] = useState("");

  const handleTitleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitleQuery(e.target.value);
  };

  const handleLocationChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLocationQuery(e.target.value);
  };

  const handleDateChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDateQuery(e.target.value);
  };

  const handleFilterClick = () => {
    filterEventsData(titleQuery, locationQuery, dateQuery);
  };

  return (
    <form className="filterEventsForm" autoComplete="off">
      <TextField
        id="standard-basic"
        className="filterEventsInput"
        label="Filter Title"
        onChange={(e) => handleTitleChange(e)}
      />
      <TextField
        id="standard-basic"
        className="filterEventsInput"
        label="Filter Location"
        placeholder="City/State/Country"
        onChange={(e) => handleLocationChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Filter By Date"
        className="filterEventsInput"
        type="date"
        onChange={(e) => handleDateChange(e)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <IconButton
        color="primary"
        aria-label="filter events"
        component="span"
        onClick={handleFilterClick}
      >
        <Search />
      </IconButton>
    </form>
  );
};

export default EventsFilter;
