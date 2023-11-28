import { COLORcHANGED, STATUScHANGED } from "./FiltersTypes";

const initialState = {
  status: "All",
  colors: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUScHANGED:
      return { ...state, status: action.payload };

    case COLORcHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: {
              ...state.colors.filter(
                (existingColor) => existingColor !== color
              ),
            },
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUScHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORcHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default FilterReducer;
