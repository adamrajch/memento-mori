const Square = ({ num, passed }) => {
  return (
    <div
      className={`${
        passed ? "bg-red-200" : "bg-white"
      } border border-black h-4 w-4 inline mx-1 my-1 text-center text-xs`}
    >
      {/* {num} */}
    </div>
  );
};
export default Square;
