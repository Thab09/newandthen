import { Link } from "react-router-dom";
import { NavBar } from "../styles/NavBar.styled";

function NavigationBar() {
  return (
    <NavBar>
      <h1>now&then</h1>
      <div className="nav">
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
    </NavBar>
  );
}

export default NavigationBar;
