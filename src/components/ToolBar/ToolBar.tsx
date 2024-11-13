import { NavLink } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/">
            <span className="navbar-brand mb-0 text-white fs-1">TW Shows</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default ToolBar;
