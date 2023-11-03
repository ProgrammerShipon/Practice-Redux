// catch dom element
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// actions identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// actions create
const increment = (value) => {
  return { type: INCREMENT, payload: value };
};
const decrement = (value) => {
  return { type: DECREMENT, payload: value };
};

// initialState
const initialState = {
  count: 0,
};

// create reducer function
function counterReducer(state = initialState, actions) {
  if (actions.type == INCREMENT) {
    return {
      ...state,
      count: state.count + actions.payload,
    };
  } else if (actions.type == DECREMENT) {
    return {
      ...state,
      count: state.count - actions.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

// render function
function renderFunction() {
  const state = store.getState();
  counterEl.innerText = state.count.toString();
}

//
renderFunction();

store.subscribe(renderFunction);

// button click listener
incrementBtn.addEventListener("click", () => {
  store.dispatch(increment(4));
});

decrementBtn.addEventListener("click", () => {
  store.dispatch(decrement(3));
});
