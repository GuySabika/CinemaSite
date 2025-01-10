import { Outlet } from 'react-router';
import { NavLink } from 'react-router';
import { useState } from 'react';

const MyLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="app-container">
            <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>CinemaSite</h2>
                    <button
                        className="toggle-btn"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? '←' : '→'}
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <NavLink to="/" className="nav-item">
                        Home
                    </NavLink>
                    <NavLink to="/add" className="nav-item">
                        Add Items
                    </NavLink>
                </nav>
            </aside>
            <main className="main-content">
                <header className="main-header">
                    <h1>Cinema Management System</h1>
                </header>
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MyLayout;