import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ isLogin }) {
  const navigate = useNavigate();
  const logout = () => {
    document.cookie = `hexToken=;`;
    window.location.reload();
    return navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand">9SCODES</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/books"}>
                  Books
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`dropdown-item ${isLogin ? "" : "disabled"}`}
                      aria-disabled={isLogin ? false : true}
                      to={"/admin"}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {isLogin ? (
                      <button className="dropdown-item" onClick={logout}>
                        Logout
                      </button>
                    ) : (
                      <NavLink className="dropdown-item" to={"/login"}>
                        Login
                      </NavLink>
                    )}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link ">
                  <i className="bi bi-bag-fill"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
                </button>
              </li>
            </ul>
            <form className="d-flex d-none" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
