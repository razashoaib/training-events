const express = require("express");
const router = express.Router();
const EventsFilterService = require("../services/EventsFilterService");

/**
 * Returns events filered via query string
 */
router.get("/", function (req, res) {
  const { date, location, query } = req.query;
  let result = EventsFilterService.getEvents();

  if (query && query !== "") {
    result = EventsFilterService.filterEventsByTitle(query);
  }
  if (location && location !== "") {
    result = EventsFilterService.filterEventsByLocation(location);
  }
  if (date !== "" && date) {
    // send date as UNIX timestamp
    result = EventsFilterService.filterEventsByDate(Date.parse(date) / 1000);
  }

  // flush the static class property
  EventsFilterService.destroy();

  res.json({
    status: "success",
    events: result,
  });
});

module.exports = router;
