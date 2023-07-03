import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/tv">TV</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;
