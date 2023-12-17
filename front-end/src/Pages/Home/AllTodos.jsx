import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import thunkLoadTodos from "../../Features/Todos/Thunk/thunkLoadTodos";
import Todo from "./Todo";

export default function AllTodos() {
  const todos = useSelector((state) => state?.todos);
  const { colors, status } = useSelector((state) => state?.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkLoadTodos);
  }, []);

  const filterByStatus = (todo) => {
    switch (status) {
      case "complete":
        return todo?.completed;

      case "incomplete":
        return !todo?.completed;

      default:
        return true;
    }
  };
  const filterByColor = (todo) => {
    if (colors.length > 0) {
      return colors?.includes(todo?.color);
    }

    return true;
  };

  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos &&
          todos
            ?.filter(filterByStatus)
            ?.filter(filterByColor)
            .map((todo) => <Todo todo={todo} key={todo?.id} />)}
      </div>
    </>
  );
}
