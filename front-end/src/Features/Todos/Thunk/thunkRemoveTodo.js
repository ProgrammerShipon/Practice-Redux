import { removeTodos } from "../TodosActions";

const thunkRemoveTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(removeTodos(todoId));
  };
};

export default thunkRemoveTodo;
