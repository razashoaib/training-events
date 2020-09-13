# training-events
It is a simple application to retrieve, filter and display training events based on an input location, keyword(s) and a date. These training events will be retrieved from an API. The backend of this project is developed using ExpressJS (Framework for NodeJS) and frontend is developed using ReactJS with Typescript.

### Demo

![DemoGif](demo.gif?raw=true "Gif")

## Client

- Display the events in a list view and have appropriated interface for the back-end functions
- The event shows relevant summary information
- Clicking on the event opens a new interface with the event's full information
- Support all the modern browsers

## Server (API)

- By default, return the events supplied in the data dump (placed at `server/data/events.js`)
- Accept keyword string query parameters for title
- Accept a location input to filter to nearest events
- Accept a date input to filter events
- **Note**: The events data dump should be an array of an object that looks like below: (Location should have **Latitude** and **Longitude** for the maps to work) 
```{
    Title: "Place 2",
    Time: "2018-07-24T02:30:00.000Z",
    Image: "http://example.com/image.png",
    Location: {
      City: "Cairns",
      State: "Queensland",
      Country: "Australia",
      Latitude: -16.888363,
      Longitude: 145.743713,
    }
  }
  ```


## Getting Started

The code assumes you have Docker running on your machine.  If you do not, they offer easy to install binaries ([Mac](https://docs.docker.com/docker-for-mac/install/)) ([Windows](https://docs.docker.com/docker-for-windows/install/)).

- Clone this repository
- Create a `.env` file inside `client` folder and copy the contents from `.env-example`. Now add an appropriate Google Maps API Key for Google Maps to work 
- Make sure you don't have anything running on port `3000` and `4000`
- From the docker folder of this project, run `sudo chmod +x ./configure-app.sh` which will make `./configure-app.sh` script executable
- Now run `./configure-app.sh` which will take a while as it will setup everything for you and run the client and server both. It will perform the following steps: 
    - Build the docker containers needed for this application to run in the local environment for both client and server
    - Install all the dependencies while building the docker containers for client and server
    - After building the containers, it will start the containers and run tests for server and client both
    - Finally after runnnig the tests, it will start the client and server on the localhost
- You should now have the UI running at http://localhost:3000 and the server running at http://localhost:4000

### Project Built Using

- git
- Node.js
- NPM
- Yarn
- Typescript v3.7.2
- React v16.13.1 with Typescript
- ExpressJS Framework for NodeJS v4.17.1
- Docker v19.03.8

### Acknowledgements

- [W3Schools](https://www.w3schools.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React With Typescript](https://create-react-app.dev/docs/adding-typescript/)
- [Stack Overflow](https://stackoverflow.com/)
- [Node.js Documentation](https://nodejs.org/docs/latest-v12.x/api/)
- [Express For Node.js Documentation](https://expressjs.com/en/api.html)