import { FlightBooking, FlightCancel } from "./BookingType";

const initializeState = [];

export function BookingFlight(state = initializeState, action) {
  switch (action.type) {
    case FlightBooking:
      if (state.length < 3) {
        return [...state, action?.payload];
      }

    case FlightCancel:
      // return [...state, action?.payload]
      return state.filter((item) => item?.id != action?.payload);

    default:
      return state;
  }
}
