import React, { FunctionComponent } from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import { EventModel } from "../models/EventModel";

interface IEventListItemDetailProps {
  isOpen: boolean;
  closed: () => void;
  eventItemDetail: EventModel;
}

const EventListItemDetail: FunctionComponent<IEventListItemDetailProps> = ({
  closed,
  isOpen,
  eventItemDetail,
}) => {
  const handleClose = () => {
    closed();
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <MuiDialogContent dividers>
          <Typography variant="h4" gutterBottom>
            {eventItemDetail.Title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {`${eventItemDetail.Location.City}, ${eventItemDetail.Location.State}, ${eventItemDetail.Location.Country}`}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {`Date: ${new Date(eventItemDetail.Time).toLocaleString()}`}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {`Image: ${eventItemDetail.Image}`}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Available Seats:
          </Typography>
          <ul>
            {eventItemDetail.AvailableSeats ? (
              eventItemDetail.AvailableSeats.map((event, index) => (
                <li key={index}>{event.id}</li>
              ))
            ) : (
              <li>No seats available</li>
            )}
          </ul>
        </MuiDialogContent>
      </Dialog>
    </div>
  );
};

export default EventListItemDetail;
