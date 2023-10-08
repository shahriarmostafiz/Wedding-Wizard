
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
        <li className='hover:border-b-2 hover:border-rose-500 font-medium text-rose-500'><NavLink to={'/'}>Home</NavLink></li>
        <li className='hover:border-b-2 hover:border-rose-500 font-medium text-rose-500'><NavLink to={'/about'}>About Us </NavLink></li>
        <li className='hover:border-b-2 hover:border-rose-500 font-medium text-rose-500'><NavLink to={'/blog'}>Blog</NavLink></li>
        {
            user &&
            <>
                <li className='hover: hover:border-b-2 hover:border-rose-500 font-medium text-rose-500'><NavLink to={'/mySelection'}>My Selections</NavLink></li>
                <li className='hover: hover:border-b-2 hover:border-rose-500 font-medium text-rose-500'><NavLink to={'/reviews'}>All the Reviews </NavLink></li>
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
                        <div className="flex items-center gap-2 text-2xl text-rose-500 font-semibold ">
                            <h1 className="font-bold font-special ">
                                Wedding Wizard
                            </h1>
                            <h1 className='text-xl'>
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
                        {user ? <div className='flex gap-2 items-center justify-center'>
                            {/* <div className="dropdown dropdown-hover dropdown-end dropdown-bottom">
                                <label tabIndex="0" className="cursor-pointer w-9  m-1">{user.photoURL ? <img src={user.photoURL} className='rounded w-9' alt="userImage" /> : <h1>{user.email}</h1>}</label>
                                <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
                                    <li><a>{user.displayName}</a></li>
                                    <li><a>{user.email}</a></li>
                                </ul>
                            </div> */}
                            <div className='w-fit'>
                                {user.photoURL ? <img src={user.photoURL} className='rounded w-8' alt="userImage" /> : <h1>{user.email}</h1>}
                            </div>
                            <div>
                                <p className='text-rose-gold'>
                                    {user.displayName ? user.displayName : ''}
                                </p>
                            </div>
                            <button className='btn btn-sm btn-outline btn-error' onClick={handleLogOut}>Log Out </button>
                        </div>
                            : <Link to={'/login'}>
                                <button className='btn btn-outline btn-error btn-sm md:px-8'> Login </button>
                            </Link>}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Navbar;