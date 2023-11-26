import { combineReducers } from "redux";
import { BookingFlight } from "./Booking/BookingReducer";

export const rootReducer = combineReducers({
  BookingFlight,
});
