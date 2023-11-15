// Input value elements or events
const inputIncrement = document.querySelector("input.lws-increment");
const inputDecrement = document.querySelector("input.lws-decrement");
//-------
const BtnLwsAddMatch = document.querySelector(".lws-addMatch");

// show output elements
const lwsReset = document.querySelector(".lws-reset");
const singleResult = document.querySelector(".lws-singleResult");
const AllMatchElement = document.querySelector(".all-matches");

//-------------- Redux Start -------------------

// initialize keys or actions
const incrementKey = "INCREMENT";
const decrementKey = "DECREMENT";
const resetKey = "RESET";
const incrementFc = (value) => {
  return {
    type: incrementKey,
    payload: value,
  };
};
const decrementFc = (value) => {
  return {
    type: decrementKey,
    payload: value,
  };
};
const resetFc = () => {
  return {
    type: resetKey,
  };
};
const initialize = {
  value: 0,
};

const counterReducer = (state = initialize, actions) => {
  if (actions.type == incrementKey) {
    return {
      ...state,
      value: Number(state.value) + Number(actions.payload),
    };
  } else if (actions.type == decrementKey) {
    if (Number(state.value) >= Number(actions.payload)) {
      return {
        ...state,
        value: Number(state.value) - Number(actions.payload),
      };
    } else {
      return {
        ...state,
        value: 0,
      };
    }
  } else if (actions.type == resetKey) {
    return {
      ...state,
      value: 0,
    };
  } else {
    return { ...state };
  }
};

// redux store function
const store = Redux.createStore(counterReducer);

store.subscribe(renderFC);

// render functions
function renderFC() {
  const state = store.getState();
  singleResult.innerText = state.value.toString();
}

renderFC();

//-------------- Redux End -------------------

//  Increment Input field
inputIncrement.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    const value = e.target.value;

    // redux call
    store.dispatch(incrementFc(value));
  }
});

// Decrement Input Field
inputDecrement.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    const value = e.target.value;

    // redux call
    store.dispatch(decrementFc(value));
  }
});

// reset value
lwsReset.addEventListener("click", () => store.dispatch(resetFc()));

// Function to handle "Add Another Match" button click
function addMatch() {
  // Clone the first match node
  const matchNode = document.querySelector(".match");
  const newMatch = matchNode.cloneNode(true);

  // Reset values and IDs for the cloned match
  newMatch.querySelector(".lws-matchName").textContent =
    "Match " + (document.querySelectorAll(".match").length + 1);
  newMatch.querySelector(".lws-increment").value = "";
  newMatch.querySelector(".lws-decrement").value = "";
  newMatch.querySelector(".lws-singleResult").textContent = "0";

  // Add the cloned match to the container
  document.querySelector(".all-matches").appendChild(newMatch);

  // Attach event listeners for the new match
  attachEventListeners(newMatch);
}

// Function to handle delete button click
function deleteMatch(matchNode) {
  matchNode.remove();
}

// Function to handle increment and decrement changes
function updateScore(matchNode) {
  const incrementValue =
    parseInt(matchNode.querySelector(".lws-increment").value) || 0;
  const decrementValue =
    parseInt(matchNode.querySelector(".lws-decrement").value) || 0;

  const currentScore =
    parseInt(matchNode.querySelector(".lws-singleResult").textContent) || 0;

  console.log({ currentScore, incrementValue, decrementValue });

  const newScore = currentScore + incrementValue - decrementValue;

  matchNode.querySelector(".lws-singleResult").textContent = newScore;
}

// Function to attach event listeners for a match
function attachEventListeners(matchNode) {
  matchNode.querySelector(".lws-delete").addEventListener("click", function () {
    deleteMatch(matchNode);
  });

  matchNode
    .querySelector(".incrementForm")
    .addEventListener("input", function () {
      updateScore(matchNode);
    });

  matchNode
    .querySelector(".decrementForm")
    .addEventListener("input", function () {
      updateScore(matchNode);
    });

  // Listen for Enter key press on input fields
  matchNode
    .querySelectorAll(".lws-increment, .lws-decrement")
    .forEach(function (inputField) {
      inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          updateScore(matchNode);
        }
      });
    });
}

// Attach event listener for "Add Another Match" button
document.querySelector(".lws-addMatch").addEventListener("click", function () {
  addMatch();
});

// Attach event listeners for the initial match
attachEventListeners(document.querySelector(".match"));
