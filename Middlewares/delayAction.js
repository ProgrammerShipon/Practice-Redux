const { default: fetch } = require("node-fetch");

fetch;

const delayActionMiddleware = (store) => (next) => (action) => {
  console.log("I am delaying you!");

  setTimeout(() => {
    next(action);
  }, 2000);

  return;
};

const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState());
  }

  return next(action);
};

module.exports = { delayActionMiddleware, fetchTodosMiddleware };
