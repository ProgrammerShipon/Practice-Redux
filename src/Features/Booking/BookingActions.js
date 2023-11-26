import { FlightBooking, FlightCancel } from "./BookingType";

export const booking = (obj) => {
  return {
    type: FlightBooking,
    payload: obj,
  };
};

export const cancelBooking = (id) => {
  return { type: FlightCancel, payload: id };
};
