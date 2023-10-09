
import { GiStairsCake } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
const toastInfo = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                return toast.error('logged out', toastInfo)

            })
            .catch(err => console.log(err.message))
    }
    const links = <>
        <li className='hover:border-b-2 hover:border-rose-500 text-md  font-medium text-rose-500'><NavLink to={'/'}>Home</NavLink></li>
        <li className='hover:border-b-2 hover:border-rose-500 text-md  font-medium text-rose-500'><NavLink to={'/about'}>About Us </NavLink></li>
        <li className='hover:border-b-2 hover:border-rose-500 text-md font-medium text-rose-500'><NavLink to={'/blog'}>Blog</NavLink></li>
        {
            user &&
            <>
                <li className='hover: hover:border-b-2 hover:border-rose-500 text-md font-medium text-rose-500'><NavLink to={'/mySelection'}>My Selections</NavLink></li>
                <li className='hover: hover:border-b-2 hover:border-rose-500 text-md font-medium text-rose-500'><NavLink to={'/reviews'}>All the Reviews </NavLink></li>
            </>

        }    </>
    return (
        <div className='md:max-w-3xl mx-auto lg:max-w-7xl lg:mx-auto bg-white'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white bg-opacity-50 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="btn btn-ghost normal-case text-xl">
                        <div className="flex items-center gap-1 md:gap-2  md:text-3xl text-rose-500 font-semibold ">
                            <h1 className="font-bold font-special ">
                                Wedding Wizard
                            </h1>
                            <h1 className='md:text-3xl  '>
                                <GiStairsCake></GiStairsCake>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex list-none lg:gap-6   menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {user ? <div className='flex gap-1 md:gap-2 items-center justify-center'>
                            <div className='w-fit'>
                                {<img src={user.photoURL} className='rounded w-5 md:w-8' alt="userImage" />}
                            </div>
                            <p className='text-gray-500 bg-rose-50 p-1  rounded md:text-base'>
                                {user.displayName}
                            </p>
                            <div>
                                <button
                                    className='btn btn-xs md:btn-sm btn-outline btn-error'
                                    onClick={handleLogOut}>Log Out
                                </button>
                            </div>
                        </div>
                            : <div className='flex gap-1 md:gap-2'>
                                <Link to={'/login'}>
                                    <button className='btn btn-outline btn-error btn-xs md:btn-sm md:px-6'> Login </button>
                                </Link>
                                <Link to={'/register'}>
                                    <button className='btn  btn-outline btn-error btn-xs md:btn-sm md:px-4'> Register </button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Navbar;