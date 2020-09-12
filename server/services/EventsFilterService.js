const events =
  process.env.NODE_ENV === "test"
    ? require("../tests/eventsDataForTesting")
    : require("../data/events");

class EventsFilterService {
  /**
   * Filter events by Title
   *
   * @param {*} query
   */
  static filterEventsByTitle = (query) => {
    this.eventsData = this.getEvents().filter((event) => {
      return event.Title.toLowerCase().includes(query.toLowerCase());
    });
    return this.eventsData;
  };

  /**
   * Filter events by Location (City, State Or Country)
   *
   * @param {*} location
   */
  static filterEventsByLocation = (location) => {
    this.eventsData = this.getEvents().filter((event) => {
      return (
        event.Location.City.toLowerCase().includes(location.toLowerCase()) ||
        event.Location.State.toLowerCase().includes(location.toLowerCase()) ||
        event.Location.Country.toLowerCase().includes(location.toLowerCase())
      );
    });
    return this.eventsData;
  };

  /**
   * Filter events by date (Returns events occured on and after the given date)
   *
   * @param {*} date
   */
  static filterEventsByDate = (date) => {
    this.eventsData = this.getEvents().filter((event) => {
      return Date.parse(event.Time) / 1000 >= date;
    });
    return this.eventsData;
  };

  /**
   * Returns the static class property
   */
  static getEvents = () => {
    return this.eventsData || events;
  };

  /**
   * Flush the static class property
   */
  static destroy = () => {
    this.eventsData = null;
  };
}

module.exports = EventsFilterService;
