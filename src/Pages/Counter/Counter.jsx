import Count from "../../Components/Counter/Count";

const Counter = () => {
  return (
    <section>
      <div className="container mx-auto">
        <p> React Counter Systems </p>
        {/* counter component */}
        <div className="py-6 my-4">
          <Count />
          <Count />
        </div>
      </div>
    </section>
  );
};

export default Counter;
