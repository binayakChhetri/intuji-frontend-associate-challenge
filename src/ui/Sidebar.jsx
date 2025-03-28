import "../styles/ui/Sidebar.css";
import { sidebarLinks1, sidebarLinks2, sidebarLinks3 } from "../constants";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <aside>
      <nav>
        <div>
          {sidebarLinks1.map((link) => (
            <NavLink key={link.id} to={link.id}>
              {link.title}
            </NavLink>
          ))}
        </div>
        <div>
          {sidebarLinks2.map((link) => (
            <NavLink key={link.id} to={link.id}>
              {link.title}
            </NavLink>
          ))}
        </div>
        <div>
          {sidebarLinks3.map((link) => (
            <NavLink key={link.id} to={link.id}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};
