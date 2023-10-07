import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const { logIn, GoogleSignIn } = useContext(AuthContext)
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
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        logIn(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('logged in ', toastInfo)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message);
                return toast.error(err.message, toastInfo)
            })
    }
    const handleGoogleLogin = () => {
        GoogleSignIn()
            .then(() => {
                toast.success('logged in ', toastInfo)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message)
                return toast.error(err.message, toastInfo)
            })

    }
    return (
        <div >
            <div className="flex flex-col justify-center h-screen items-center">
                <div className="border lg:w-1/3 py-16 rounded ">
                    <h1 className="text-3xl font-semibold px-8 text-rose-400">Login </h1>
                    <form onSubmit={handleLogin}>
                        <div className="p-8 space-y-4 w-full">

                            <div className="border-b-2 border-black">
                                <input className=" rounded  w-full border-none outline-none p-4" placeholder="Email" type="email" name="email" id="email" />
                            </div>
                            <div className=" w-full border-b-2 border-black">
                                <input className="  rounded w-full border-none outline-none p-4"
                                    type="password" placeholder="password" name="password" id="password" />
                            </div>
                            <button type="submit" className="btn btn-error hover:bg-red-500 hover:text-white w-full">Login </button>
                        </div>
                        <p className="text-center">Dont have an account? <Link className="text-rose-500 font-medium" to={'/register'}>Register here </Link></p>
                    </form>

                </div>
                <div className="flex flex-col gap-4 mt-6 justify-center items-center">
                    <div className="flex items-center gap-1">
                        <div className="border bg-slate-400 h-0.5 w-32"></div> <p>OR</p> <div className="border h-0.5 w-32 bg-slate-500"></div>
                    </div>
                    <button className="btn  text-xl rounded-full btn-outline btn-error hover:text-white " onClick={handleGoogleLogin}> <FcGoogle />Login with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;