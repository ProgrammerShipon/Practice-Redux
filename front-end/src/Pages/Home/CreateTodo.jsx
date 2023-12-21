import { useState } from "react";
import { useDispatch } from "react-redux";
import thunkLoadTodoAdd from "../../Features/Todos/Thunk/thunkLoadTodoAdd";
import notes from "../../assets/images/notes.png";
import plus from "../../assets/images/plus.png";

export default function SearchNav() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(thunkLoadTodoAdd(input));
    setInput(" ");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleInput}
          value={input}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8"
          style={{
            backgroundImage: `url(${plus})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></button>
      </form>
    </>
  );
}
