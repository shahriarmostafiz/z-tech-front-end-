import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const { login } = useContext(AuthContext)
    const [showpass, setShowPass] = useState(false)
    const navigate = useNavigate()
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
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        login(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('logged in', toastInfo)
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                console.log(err)
                return toast.error('password or email does not match', toastInfo)
            })
    }
    return (
        <div>
            <div className="flex w-full flex-col justify-center min-h-[600px] items-center ">
                <div className="border w-4/5 lg:w-1/3 py-8 lg:py-16 rounded ">
                    <h1 className="text-3xl font-semibold px-8 text-red-900">Login to Continue</h1>
                    <form onSubmit={handleLogin}>
                        <div className="p-8 space-y-8 w-full">

                            <div className="border-b-2 border-gray-700">
                                <input className=" rounded  w-full border-none outline-none py-2 px-4" placeholder="Email" type="email" name="email" id="email" />
                            </div>
                            <div className=" w-full border-b-2 relative border-gray-700">
                                <input className="rounded w-full border-none outline-none py-2 pl-4 pr-8"
                                    type={showpass ? 'text' : 'password'} placeholder="password" name="password" id="password" />
                                <span onClick={() => setShowPass(!showpass)}
                                    className="absolute right-4 bottom-2 text-lg"> {showpass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </span>

                            </div>
                            <button type="submit" className="btn btn-accent btn-outline hover:bg-red-500 hover:text-white w-full">Login </button>
                        </div>
                        <p className="text-center">Dont have an account? <Link className="text-rose-500 font-semibold" to={'/signup'}>Register here </Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;