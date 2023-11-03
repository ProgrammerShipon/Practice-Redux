// catch dom element
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// initialState
const initialState = {
  count: 0,
};

// create reducer function
function counterReducer(state = initialState, actions) {
  if (actions.type == "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (actions.type == "decrement") {
    return {
      ...state,
      count: state.count - 1,
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
  store.dispatch({ type: "increment" });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});
