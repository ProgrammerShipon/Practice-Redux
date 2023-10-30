import ButtonCount from "../Button/ButtonCount";

const Count = ({ idx, increment, decrement }) => {
  return (
    <div className="items-center justify-between mx-5 max-w-md min-h-min inline-block my-5 bg-slate-50 py-5 px-6 rounded-lg shadow gap-5">
      <ButtonCount handle={() => increment(idx)}> Increment </ButtonCount>

      <strong className="text-2xl px-1 md:px-2"> {count} </strong>

      <ButtonCount handle={() => decrement(idx)}> Decrement </ButtonCount>
    </div>
  );
};

export default Count;
