import { NavLink } from "react-router-dom";
import { navItems } from "../static/data";

function Navbar() {
  return (
    <div>
      <div className="flex items-center gap-6 lg:gap-12">
        {navItems.map((item, index) => (
          <p key={index}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                isActive
                  ? "text-[#17dd1f] font-semibold"
                  : "text-white font-semibold"
              }
            >
              {item.title}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;