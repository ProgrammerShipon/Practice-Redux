const ButtonCount = ({ children, handle }) => {
  return (
    <button
      onClick={handle}
      className="items-center justify-between mx-5 max-w-md min-h-min inline-block my-5 bg-slate-50 py-5 px-6 rounded-lg shadow gap-5"
    >
      {children}
    </button>
  );
};

export default ButtonCount;
