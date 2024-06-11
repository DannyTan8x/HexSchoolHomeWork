import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar start-0 end-0 z-3 navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand btn">Navbar</button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  // console.log("NavLink", isActive);
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/album">
                Album
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
