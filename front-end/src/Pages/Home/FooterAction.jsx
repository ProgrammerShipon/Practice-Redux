import { useDispatch, useSelector } from "react-redux";
import {
  colorChanged,
  statusChanged,
} from "../../Features/Filters/FilterActions";

const numberOfTodos = (numbers) => {
  switch (numbers) {
    case 0:
      return "No tasks";

    case 1:
      return "1 task";

    default:
      return `${numbers} tasks`;
  }
};

export default function FooterAction() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;
  const todosRemaining = todos.filter((todo) => todo.completed).length;

  const handleStatusChange = (statusText) => {
    dispatch(statusChanged(statusText));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p> {numberOfTodos(todosRemaining)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            onClick={() => handleStatusChange("all")}
            className={`cursor-pointer ${status === "all" && "font-bold"}`}
          >
            All
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("incomplete")}
            className={`cursor-pointer ${
              status === "incomplete" && "font-bold"
            }`}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("complete")}
            className={`cursor-pointer ${status === "complete" && "font-bold"}`}
          >
            Complete
          </li>
          <li
            onClick={() => handleColorChange("green")}
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              colors?.includes("green") && "bg-green-500"
            }`}
          ></li>
          <li
            onClick={() => handleColorChange("red")}
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              colors?.includes("red") && "bg-red-500"
            }`}
          ></li>
          <li
            onClick={() => handleColorChange("yellow")}
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              colors?.includes("yellow") && "bg-yellow-500"
            }`}
          ></li>
        </ul>
      </div>
    </>
  );
}
