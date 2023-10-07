
import { GiStairsCake } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err.message))
    }
    const links = <>
        <li className='hover: hover:border-b-2 hover:border-rose-500 font-medium '><NavLink to={'/'}>Home</NavLink></li>
        <li className='hover: hover:border-b-2 hover:border-rose-500 font-medium '><NavLink to={'/about'}>About Us </NavLink></li>
        <li className='hover: hover:border-b-2 hover:border-rose-500 font-medium '><NavLink to={'/services'}>Services</NavLink></li>
        {
            user &&
            <li className='hover: hover:border-b-2 hover:border-rose-500 font-medium '><NavLink to={'/mySelection'}>My Selections</NavLink></li>

        }    </>
    return (
        <div className="flex flex-col md:flex-row items-center justify-between lg:max-w-7xl mx-auto space-y-4 md:space-y-0 py-3">
            {/* logo */}
            <div className="flex items-center gap-2 text-2xl text-rose-500 font-semibold ">
                <h1 className="font-bold font-special ">
                    Wedding Wizard
                </h1>
                <h1 className='text-xl'>
                    <GiStairsCake></GiStairsCake>
                </h1>
            </div>
            {/* navigations  */}
            <div className='flex list-none lg:gap-6 '>
                {links}
            </div>
            {/* login button  */}
            <div>
                {user ? <div className='flex gap-2 items-center justify-center'>
                    <div className="dropdown dropdown-end dropdown-bottom">
                        <label tabIndex="0" className="btn btn-sm  m-1">{user.photoURL ? user.photoURL : user.displayName ? user.displayName : user.email}</label>
                        <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
                            <li><a>{user.email}</a></li>
                            <li><a>{user.displayName}</a></li>
                        </ul>
                    </div>
                    <button onClick={handleLogOut}>Log Out </button>
                </div>
                    : <Link to={'/login'}>
                        <button className='btn btn-outline btn-error px-8'> Login </button>
                    </Link>}
            </div>
        </div>
    );
};

export default Navbar;