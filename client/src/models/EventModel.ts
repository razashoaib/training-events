import { LocationModel } from "./LocationModel";
import { AvailableSeatModel } from "./AvailableSeatModel";

export class EventModel {
  Title: string;
  Time: string;
  Image: string;
  Location: LocationModel;
  AvailableSeats?: Array<AvailableSeatModel>;

  constructor(
    title: string,
    time: string,
    image: string,
    location: LocationModel
  ) {
    this.Title = title;
    this.Time = time;
    this.Image = image;
    this.Location = location;
    this.Title = title;
  }
}
