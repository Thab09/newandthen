import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar">
      <h2 className="logo">now&then</h2>
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
    </div>
  );
}

export default NavigationBar;
