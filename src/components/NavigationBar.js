import { Link } from "react-router-dom";
import { NavBar } from "../styles/NavBar.styled";

function NavigationBar() {
  let date = new Date().toUTCString().slice(5, 16);
  return (
    <NavBar>
      <div className="nav">
        <div className="links">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/popular">
            <h4>Popular</h4>
          </Link>
          <Link to="/categories">
            <h4>Categories</h4>
          </Link>
        </div>
        <div className="date">
          <h4>{date}</h4>
        </div>
      </div>
    </NavBar>
  );
}

export default NavigationBar;
