// A thunk is an action that occurs after something else has already
// Return our action after it runs

const thunk = (store) => (next) => (action) => {
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
};

export default thunk;
