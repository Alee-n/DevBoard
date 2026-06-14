import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <Link to="/">
                Dashboard
            </Link>
            
            {" | "}

            <Link to="/learning">
                Learning
            </Link>
            
            {" | "}

            <Link to="/tasks">
                Tasks
            </Link>

            {" | "}

            <Link to="/projects">
                Projects
            </Link>

            {" | "}

            <Link to="/profile">
                Profile
            </Link>

        </nav>

    );
}

export default Navbar;