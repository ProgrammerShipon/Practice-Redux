import { clearCompleted } from "../TodosActions";

const thunkCompleteClearTodo = (arrayIds) => {
  console.log("arrayIds ", arrayIds);
  if (arrayIds) {
    async (dispatch) => {
      for (const todo of arrayIds) {
        // console.log("todo ", todo);
        await fetch(`http://localhost:9000/todos/${todo.id}`, {
          method: "DELETE",
        });
      }

      dispatch(clearCompleted());
    };

    // arrayIds.map((todoId) => async (dispatch) => {
    //   await fetch(`http://localhost:9000/todos/${todoId.id}`, {
    //     method: "DELETE",
    //   });

    //   dispatch(removeTodos(todoId.id));
    // });
  }
};

export default thunkCompleteClearTodo;
