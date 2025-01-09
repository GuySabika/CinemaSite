// components/Header.jsx
import { NavLink } from 'react-router'

function DinamicHeader() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/add/movie">Movie</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add/actor">Actor</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add/people">User</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add/projection">Projection</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add/ticket">Ticket</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default DinamicHeader
