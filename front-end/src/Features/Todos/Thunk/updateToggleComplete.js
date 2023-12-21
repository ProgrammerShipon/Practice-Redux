import { toggled } from "../TodosActions";

const updateToggleComplete = (todoId, currentState) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentState,
      }),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(toggled(todo?.id));
  };
};

export default updateToggleComplete;
