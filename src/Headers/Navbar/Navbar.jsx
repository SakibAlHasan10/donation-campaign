import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav>
      <div className="navbar bg-base-100  max-w-screen-xl py-5 mx-auto px-8">
        <div className=" w-full lg:navbar-start flex justify-between">
          <div className="dropdown">
            <label
              onClick={() => setOpen(!open)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-2xl"
            >
              {open ? <HiMenuAlt1 /> : <AiFillCloseCircle />}
            </label>
            {open ? (
              ""
            ) : (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-red-600 underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/donation`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-red-600 underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/statistics`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-red-600 underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
              </ul>
            )}
          </div>
          <img src="/public/Logo.png" className="h-10 pr-4 lg:pr-0" alt="logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gl font-bold">
            <li>
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-red-600 underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/donation`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-red-600 underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/statistics`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-red-600 underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
