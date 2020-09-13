export class LocationModel {
  City: string;
  State: string;
  Country: string;
  Latitude?: number;
  Longitude?: number;

  constructor(
    city: string,
    state: string,
    country: string,
    latitude?: number,
    longitude?: number
  ) {
    this.City = city;
    this.State = state;
    this.Country = country;
    this.Latitude = latitude;
    this.Longitude = longitude;
  }
}
