import { ColorChanged } from "../TodosActions";

const updateToggleColor = (todoId, currentColor) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: currentColor,
      }),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(ColorChanged(todo?.id, todo?.color));
  };
};

export default updateToggleColor;
