// create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log("actions -> ", action);
  console.log("store.getState -> ", store.getState());

  // pass action
  return next(action);
};

export default myLogger;
