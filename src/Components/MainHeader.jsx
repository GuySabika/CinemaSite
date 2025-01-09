// components/Header.jsx
import { NavLink } from 'react-router'

function MainHeader() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/add">Cinema Management</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Project Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader
