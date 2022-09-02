import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center h-screen max-w-md mx-auto text-center">
      <span className="-mt-48 font-extrabold text-gray-600 scale-150 drop-shadow-md text-9xl">404</span>
      <span className="mt-16 text-3xl font-semibold text-gray-500">Sorry, we couldn&apos;t find this page.</span>
      <span className="mt-4 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</span>
      <Link to="/" className="px-6 py-3 mt-12 font-bold text-white bg-blue-500 rounded shadow-md hover:bg-blue-600 focus:outline-blue-300">Back to homepage</Link>
    </div>
  );
}
export default NotFound;
