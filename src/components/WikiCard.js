function WikiCard({ data, index }) {
  return (
    <div className="flex items-center justify-center h-64 px-6 m-4 overflow-hidden text-center bg-white shadow-xl w-72 rounded-xl">
      {index}
      .
      {' '}
      {data[0].toUpperCase() + data.slice(1)}
    </div>
  );
}
export default WikiCard;
