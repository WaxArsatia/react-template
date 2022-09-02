import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const Active = ({ isActive }) => {
    const data = 'px-4 py-1 rounded-full';
    return (isActive ? `${data} bg-blue-600 ` : data);
  };

  return (
    <div className="w-full py-3 bg-gray-800 shadow-xl">
      <div className="container flex justify-between mx-auto text-white">
        <div>
          <Link
            to="/home"
          >
            Home
          </Link>
        </div>
        <div className="flex justify-center font-semibold">
          <NavLink
            to="/wiki"
            className={Active}
          >
            Daily Wiki
          </NavLink>
          <NavLink
            to="/contact"
            className={Active}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={Active}
          >
            About
          </NavLink>
        </div>
        <div>
          <Link
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
