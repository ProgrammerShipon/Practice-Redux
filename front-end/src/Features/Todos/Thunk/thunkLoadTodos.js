import { loadTodos } from "../TodosActions";

const thunkLoadTodos = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  dispatch(loadTodos(todos));
};

export default thunkLoadTodos;
