const logger = (store) => (next) => (action) => {
  console.log("**Action**:", action);
  return next(action); // moves the action to the next middleware or the reducer if no middleware exists
}

export default logger;
