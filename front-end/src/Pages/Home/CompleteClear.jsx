import { useDispatch } from "react-redux";
import {
  allCompleted,
  clearCompleted,
} from "../../Features/Todos/TodosActions";
import doubleTick from "../../assets/images/double-tick.png";

export default function CompleteClear() {
  const dispatch = useDispatch();

  const handleAllTaskComplete = () => {
    dispatch(allCompleted());
  };

  const handleCompleteClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <>
      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={() => handleAllTaskComplete()}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={() => handleCompleteClear()} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </>
  );
}
