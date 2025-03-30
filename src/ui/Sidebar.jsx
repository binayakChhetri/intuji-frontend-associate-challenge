import {
  Image,
  Bolt,
  CalendarDays,
  Info,
  LayoutDashboard,
  LogOut,
  Mail,
  SquareKanban,
  UserRound,
  Users,
} from "lucide-react";
import "../styles/ui/Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const sidebarLinks1 = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: {
      default: <LayoutDashboard />,
      active: <LayoutDashboard fill="#F9BA33" stroke="#F9BA33" />,
    },
  },

  {
    id: "schedule",
    title: "Schedule",
    icon: {
      default: <CalendarDays />,
      active: <CalendarDays fill="#ffffff" stroke="#F9BA33" />,
    },
  },

  {
    id: "message",
    title: "Message",
    icon: {
      default: <Mail />,
      active: <Mail fill="#ffffff" stroke="#F9BA33" />,
    },
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: {
      default: <SquareKanban />,
      active: <SquareKanban fill="#ffffff" stroke="#F9BA33" />,
    },
  },

  {
    id: "team",
    title: "Team",
    icon: {
      default: <Users />,
      active: <Users fill="#F9BA33" stroke="#F9BA33" />,
    },
  },
];
const sidebarLinks2 = [
  {
    id: "profile",
    title: "Profile",
    icon: {
      default: <UserRound />,
      active: <UserRound fill="#F9BA33" stroke="#F9BA33" />,
    },
  },
  {
    id: "settings",
    title: "Settings",
    icon: {
      default: <Bolt />,
      active: <Bolt fill="#ffffff" stroke="#F9BA33" />,
    },
  },
];
const sidebarLinks3 = [
  {
    id: "help",
    title: "Help",
    icon: {
      default: <Info />,
      active: <Info fill="#ffffff" stroke="#F9BA33" />,
    },
  },
  {
    id: "logout",
    title: "Logout",
    icon: {
      default: <LogOut />,
      active: <LogOut fill="#F9BA33" stroke="#F9BA33" />,
    },
  },
];

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("dashboard");
  return (
    <aside>
      <div className="logo-container">
        <Image fill="#d9d9d9" />
      </div>
      <nav>
        <div className="nav-items">
          {sidebarLinks1.map((link) => (
            <NavLink
              key={link.id}
              to={link.id}
              className={`nav-link ${
                activeLink === link.id ? "active-nav-link" : ""
              }`}
              onClick={() => setActiveLink(link.id)}
            >
              {activeLink === link.id ? link.icon.active : link.icon.default}
              <span className="nav-title">{link.title}</span>
            </NavLink>
          ))}
        </div>
        <hr className="divider" />
        <div className="nav-items">
          {sidebarLinks2.map((link) => (
            <NavLink
              key={link.id}
              to={link.id}
              className={`nav-link ${
                activeLink === link.id ? "active-nav-link" : ""
              }`}
              onClick={() => setActiveLink(link.id)}
            >
              {activeLink === link.id ? link.icon.active : link.icon.default}
              <span className="nav-title">{link.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="nav-items">
          {sidebarLinks3.map((link) => (
            <NavLink
              key={link.id}
              to={link.id}
              className={`nav-link ${
                activeLink === link.id ? "active-nav-link" : ""
              }`}
              onClick={() => setActiveLink(link.id)}
            >
              {activeLink === link.id ? link.icon.active : link.icon.default}
              <span className="nav-title">{link.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};
