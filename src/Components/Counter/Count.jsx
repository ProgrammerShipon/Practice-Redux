import { connect } from "react-redux";
import { decrementT, incrementT } from "../../Redux/ToPropsCounter/ActionTP";

const Count = ({ count, increment, decrement }) => {
  return (
    <div className=" mx-5 max-w-max my-5">
      <p className="mb-3  text-center">
        {" "}
        {`connect(mapStateToProps, mapDispatchToPros)(Count);`}{" "}
      </p>
      <div className="flex items-center justify-between">
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.ToPropsCounter.value,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    increment: (value) => dispatch(incrementT(value)),
    decrement: (value) => dispatch(decrementT(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Count);
