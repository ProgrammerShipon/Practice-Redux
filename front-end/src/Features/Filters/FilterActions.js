import { COLORcHANGED, STATUScHANGED } from "./FiltersTypes";

export function colorChanged(color, changeType) {
  return {
    type: COLORcHANGED,
    payload: {
      color,
      changeType,
    },
  };
}

export function statusChanged(status) {
  return {
    type: STATUScHANGED,
    payload: status,
  };
}
