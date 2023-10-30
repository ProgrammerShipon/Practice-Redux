const Stats = ({ count }) => {
  return (
    <div className="max-w-md min-w-min text-2xl font-semibold text-center">
      <p>
        Total Counts: <strong> {count} </strong>
      </p>
    </div>
  );
};

export default Stats;
