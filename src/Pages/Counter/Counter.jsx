import Count from "../../Components/Counter/Count";
import DynamicCount from "../../Components/Counter/DynamicCount";
import HooksCount from "../../Components/Counter/HooksCount";

const Counter = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-center items-center flex-col">
        <p> React Counter Systems </p>
        {/* counter component */}
        <div className="py-2 my-1 flex flex-col gap-2">
          <Count />
          <HooksCount />
          <DynamicCount />
        </div>
      </div>
    </section>
  );
};

export default Counter;
