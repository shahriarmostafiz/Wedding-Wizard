
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />

        </div>
    );
};

export default MainLayout;