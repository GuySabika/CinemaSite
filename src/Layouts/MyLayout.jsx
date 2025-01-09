import React from 'react';
import { NavLink, Outlet } from 'react-router'
import MainHeader from '../Components/MainHeader.jsx';
// import FindMealProvider from '../Contexts/FindMealContext';
// import MealIdContextProvider from '../Contexts/MealIdContext';

const MyLayout = () => {
    return (
        <div>
            <MainHeader />
            {/* <MealIdContextProvider>
                <FindMealProvider> */}
            <Outlet></Outlet>
            {/* </FindMealProvider>
            </MealIdContextProvider> */}
        </div>
    );
};

export default MyLayout;