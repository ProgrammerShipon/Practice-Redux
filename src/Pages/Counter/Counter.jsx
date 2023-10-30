import { useState } from "react";
import Count from "../../Components/Counter/Count";
import Stats from "../../Components/Counter/Stats";

const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];

const Counter = () => {
  const [state, setState] = useState(initialState);

  const increment = (id) => {
    const updateState = state.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          count: s.count + 1,
        };
      } else
        return {
          ...s,
        };
    });

    setState(updateState);
  };

  const decrement = (id) => {
    const updateState = state.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          count: s.count,
        };
      } else return { ...s };
    });

    setState(updateState);
  };

  return (
    <section className="bg-slate-300">
      <div className="container mx-auto">
        <p> React Counter Systems </p>
        {/* counter component */}
        <div className="py-6 my-4 flex flex-wrap gap-6">
          <Count />
          <Count />

          {state &&
            state.map((c) => (
              <Count
                key={c.id}
                idx={c.id}
                // count={}
                increment={increment}
                decrement={decrement}
              />
            ))}

          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Counter;
