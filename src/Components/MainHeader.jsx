// components/Header.jsx
import { NavLink } from 'react-router';

function MainHeader() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/add" className="nav-link">Cinema Management</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="nav-link">Project Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
