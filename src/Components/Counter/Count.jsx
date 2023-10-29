import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-between mx-5 max-w-xs my-5">
      <button
        onClick={increment}
        className="text-lg py-2 px-5 rounded-lg text-blue-950 bg-blue-400"
      >
        Increment{" "}
      </button>
      <strong className="text-2xl"> {count} </strong>
      <button
        onClick={decrement}
        className="text-lg py-2 px-5 rounded-lg text-red-950 bg-red-400"
      >
        Decrement{" "}
      </button>
    </div>
  );
};

export default Count;
