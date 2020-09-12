import { LocationModel } from "./LocationModel";
import { AvailableSeatModel } from "./AvailableSeatModel";

export type EventModel = {
  Title: string;
  Time: string;
  Image: string;
  Location: LocationModel;
  AvailableSeats: Array<AvailableSeatModel>;
};
