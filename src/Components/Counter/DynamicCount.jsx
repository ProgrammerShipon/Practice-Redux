import { useDispatch, useSelector } from "react-redux";
import { decrementD, incrementD } from "../../Redux/DynamicCounter/ActionD";

const DynamicCount = () => {
  const count = useSelector((state) => state.dynamicCounterReducer.value);
  const dispatch = useDispatch();

  const incrementHandle = (value) => {
    dispatch(incrementD(value));
  };

  const decrementHandle = (value) => {
    dispatch(decrementD(value));
  };

  return (
    <div className="mx-auto max-w-max my-5">
      <p className="mb-3 text-center">
        {`useSelector , useDispatch + combine`}
      </p>
      <div className="flex items-center justify-between mx-5 max-w-xs my-5">
        <button
          onClick={() => incrementHandle(5)}
          className="text-lg py-2 px-5 rounded-lg text-blue-950 bg-blue-400"
        >
          Increment
        </button>

        <strong className="text-2xl px-3"> {count} </strong>

        <button
          onClick={() => decrementHandle(4)}
          className="text-lg py-2 px-5 rounded-lg text-red-950 bg-red-400"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default DynamicCount;
