// A thunk is an action that occurs after something else has already
// Return our action after it runs

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};

export default thunk;
