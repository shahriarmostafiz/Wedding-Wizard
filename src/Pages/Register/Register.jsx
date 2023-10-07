import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { signUp, update } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
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
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const thispassword = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(email, thispassword);
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/
        if (!passwordRegex.test(thispassword)) {
            toast.error('Password Must Contain At least One Capital letter and one Special Character ', toastInfo)
            return
        }
        setError(null)
        signUp(email, thispassword)
            .then(res => {
                console.log(res.user)
                update(name, photo)
                navigate('/')
                return toast.success('signed up', toastInfo)

            })
            .catch(error => {
                console.log(error.message)
                return toast(error.message, toastInfo)
            })
    }

    return (
        <div>
            <div className="bg-white">
                <div className="flex justify-center h-screen items-center">
                    <div className="border lg:w-2/5 py-16 px-12  rounded">
                        <h1 className="text-3xl text-yellow-400 font-bold px-8">Sign Up  </h1>
                        <form onSubmit={handleRegister}>
                            <div className="p-8 space-y-4 w-full">



                                <div className="border-b-2 border-black">
                                    <input className="bg-white rounded  w-full border-none outline-none py-2 px-2" placeholder="Email" type="email" name="email" id="email" required />
                                </div>
                                <div className="border-b-2 border-black">
                                    <input className="bg-white rounded  w-full border-none outline-none py-2 px-2" placeholder="Name" type="text" name="name" id="name" required />
                                </div>
                                <div className="border-b-2 border-black">
                                    <input className="bg-white rounded  w-full border-none outline-none py-2 px-2" placeholder="Photo URL" type='url' name="photo" id="photo" required />
                                </div>
                                <div className=" w-full border-b-2 border-black">
                                    <input className=" bg-white rounded w-full border-none outline-none py-2 px-2"
                                        type="password" placeholder="password" name="password" id="password" required />
                                </div>

                                <button type="submit" className="btn btn-warning w-full">SignUp  </button>
                            </div>
                            {
                                error && <p className="text-center text-red-600">{error}</p>
                            }
                            <p className="text-center">Already have an account? <Link className="text-yellow-500" to={'/login'}>Login</Link></p>
                        </form>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;