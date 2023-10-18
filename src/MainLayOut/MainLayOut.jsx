import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayOut = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;