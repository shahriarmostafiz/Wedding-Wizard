
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;