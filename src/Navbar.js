import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Warframe Hub</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
            </div>
        </nav>
    );
}

export default Navbar;