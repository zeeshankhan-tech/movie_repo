import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black text-amber-50 backdrop-blur-md border-b border-zinc-800">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1  className="text-3xl font-bold text-red-500 tracking-wide cursor-pointer">
          <NavLink to='/'>Movie hub</NavLink>
        </h1>

        {/* Nav Links */}
        <ul className="flex items-center gap-6 text-sm sm:text-base font-medium">

          <li>
            <NavLink
              to="/trending"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition duration-300"
              }
            >
              Trending
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/top-rated"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition duration-300"
              }
            >
              Top Rated
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/bollywood"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition duration-300"
              }
            >
              Bollywood
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/hollywood"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition duration-300"
              }
            >
              Hollywood
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
};