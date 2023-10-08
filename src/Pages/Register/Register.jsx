import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
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
    const [showpass, setShowPass] = useState(false)

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
            setError('Password Must Contain At least One Capital letter and one Special Character')
            return
        }
        setError(null)
        signUp(email, thispassword)
            .then(res => {
                console.log(res.user)
                update(name, photo)
                toast.success('Signed up', toastInfo)
                navigate('/login')

            })
            .catch(error => {
                console.log(error.message)
                return toast(error.message, toastInfo)
            })
    }

    return (
        <div>
            <div className="bg-white my-8" >
                <div className="flex justify-center h-screen items-center">
                    <div className="border w-4/5 lg:w-2/5 py-16 lg:px-12  rounded">
                        <h1 className="text-3xl text-rose-400 font-bold px-8">Sign Up Today  </h1>
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
                                <div className=" w-full border-b-2 border-black relative">
                                    <input className=" bg-white rounded w-full border-none outline-none py-2 px-2"
                                        type={showpass ? 'text' : 'password'} placeholder="password" name="password" id="password" required />
                                    <span onClick={() => setShowPass(!showpass)}
                                        className="absolute right-4 bottom-2 text-lg"> {showpass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </span>

                                </div>

                                <button type="submit" className="btn btn-error w-full">SignUp  </button>
                            </div>
                            {
                                error && <p className="text-center text-red-600">{error}</p>
                            }
                            <p className="text-center">Already have an account? <Link className="text-rose-500 font-bold" to={'/login'}>Login Here</Link></p>
                        </form>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;