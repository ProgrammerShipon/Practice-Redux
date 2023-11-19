import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/Counter/Action";

const HooksCount = () => {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  const incrementHandle = () => {
    dispatch(increment());
  };

  const decrementHandle = () => {
    dispatch(decrement());
  };

  return (
    <div className=" mx-auto max-w-max my-5">
      <p className="mb-3 text-center"> {`useSelector , useDispatch`} </p>
      <div className="flex items-center justify-between mx-5 max-w-xs my-5">
        <button
          onClick={incrementHandle}
          className="text-lg py-2 px-5 rounded-lg text-blue-950 bg-blue-400"
        >
          Increment
        </button>

        <strong className="text-2xl px-2"> {count} </strong>

        <button
          onClick={decrementHandle}
          className="text-lg py-2 px-5 rounded-lg text-red-950 bg-red-400"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HooksCount;
