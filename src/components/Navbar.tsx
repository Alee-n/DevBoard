import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <Link to="/">
        Dashboard
      </Link>

      {" | "}

      <Link to="/login">
        Login
      </Link>

      {" | "}

      <Link to="/register">
        Register
      </Link>

      <Link to="/users">
        Users
      </Link>

      <Link to="/tasks">
        Tasks
      </Link>

      <Link to="/profile">
        Profile
      </Link>

    </nav>
  );
}

export default Navbar;