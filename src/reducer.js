let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

dispatch({ type: "counter/increment" });
dispatch({ type: "counter/increment" });
dispatch({ type: "counter/increment" });
dispatch({ type: "counter/increment" });

function render() {
  document.body.textContent = state.count;
}

// call the render function
