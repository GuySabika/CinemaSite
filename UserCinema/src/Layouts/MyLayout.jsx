import { Outlet } from 'react-router';
// import { NavLink } from 'react-router';
// import { useState } from 'react';

const MyLayout = () => {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (

        <div className="content-wrapper">
            <Outlet />
        </div>

    );
};

export default MyLayout;