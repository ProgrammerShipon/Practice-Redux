const { createStore, applyMiddleware } = require("redux");
const {
  delayActionMiddleware,
  fetchTodosMiddleware,
} = require("./Middlewares/delayAction");
const { fetchTodos } = require("./functions");
const { thunk } = require("redux-thunk");

// initial state
const initialState = {
  todos: [],
};

// reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/todoLoaded":
      return {
        ...state.todos,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));

// subscribe to state changes
store.subscribe(() => {
  console.log("state -> ", store.getState());
});

// dispatch actions

// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "this is Shipon",
// });

// store.dispatch({
//   type: "todos/fetchTodos",
// });

store.dispatch(fetchTodos);
