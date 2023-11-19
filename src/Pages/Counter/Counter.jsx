import { connect } from "react-redux";
import Count from "../../Components/Counter/Count";
import { decrement, increment } from "../../Redux/Counter/Action";

const Counter = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-center items-center flex-col">
        <p> React Counter Systems </p>
        {/* counter component */}
        <div className="py-2 my-1 flex flex-col gap-2">
          <Count />
        </div>
      </div>
    </section>
  );
};

export default Counter;
