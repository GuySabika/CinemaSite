import { Outlet } from 'react-router';
import { LoginUserProvider } from '../Contexts/LoginUserContext';
// import { NavLink } from 'react-router';
// import { useState } from 'react';

const MyLayout = () => {

    return (
        <div className="content-wrapper">
            <LoginUserProvider>
                <Outlet />
            </LoginUserProvider>
        </div>

    );
};

export default MyLayout;