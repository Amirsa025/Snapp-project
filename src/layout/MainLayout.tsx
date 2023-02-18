import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Vendors from "../pages/Vendor-list";
interface RoutesProps {
    children?: React.ReactNode;
    location?: Partial<Location> | string;
}
const MainLayout:React.FC<RoutesProps> = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="restaurant" element={<Vendors />} />
            </Routes>
        </>
    );
};

export default MainLayout;
