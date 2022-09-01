import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="container flex flex-col items-center justify-center h-full max-w-md mx-auto text-center">
        <span className="-mt-48 font-extrabold text-gray-600 scale-150 drop-shadow-sm text-9xl">404</span>
        <span className="mt-16 text-3xl font-semibold text-gray-500">Sorry, we couldn&apos;t find this page.</span>
        <span className="mt-4 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</span>
        <Link to="/home" className="px-8 py-4 mt-8 font-bold text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600">Back to homepage</Link>
      </div>
    </div>
  );
}
export default NotFound;
