import { connect } from "react-redux";
import { decrement, increment } from "../../Redux/Counter/Action";

const Count = ({ count, increment, decrement }) => {
  return (
    <div className="flex items-center justify-between mx-5 max-w-xs my-5">
      <button
        onClick={increment}
        className="text-lg py-2 px-5 rounded-lg text-blue-950 bg-blue-400"
      >
        Increment
      </button>

      <strong className="text-2xl px-2"> {count} </strong>

      <button
        onClick={decrement}
        className="text-lg py-2 px-5 rounded-lg text-red-950 bg-red-400"
      >
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Count);
