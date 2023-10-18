import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const { signUp, updateData, logOut } = useContext(AuthContext)
    const [error, setError] = useState('')
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

    const handdleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const thispassword = form.password.value
        const img = form.img.value
        console.log(name, email, thispassword, img);
        const thisUser = { name, email, thispassword, img }
        const capitalLetter = /(?=.*[A-Z])/
        const specialChar = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-])/
        if (thispassword.length < 6) {
            setError('Password should be longer than 6 characters')
            return
        }
        else if (!capitalLetter.test(thispassword) && !specialChar.test(thispassword)) {
            setError(null)
            setError('password must contain atleast one capital letter and one special character')
            return
        }
        else if (!capitalLetter.test(thispassword)) {
            setError(null)
            setError('Password must contain at least one capital letter ')
            return
        }
        else if (!specialChar.test(thispassword)) {
            setError(null)
            setError('Password must contain a special character')
            return
        }
        setError(null)
        signUp(email, thispassword)
            .then(res => {
                console.log(res.user)
                updateData(name, img)
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(thisUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success('Registration completed Login to continue', toastInfo)
                        }
                    })
                logOut()
                    .then()
                    .catch()
                // navigate('/login')

            })
            .catch(err => {
                console.log(err)
                return toast(error.message, toastInfo)
            })
    }
    return (
        <div className="p-4">
            <h1 className="text-4xl text-center font-semibold my-7">Sign Up today</h1>
            <div className="max-w-3xl md:mx-auto ">
                <form className="card-body" onSubmit={handdleSignUp}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name </span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-success input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-success input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-success input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url </span>
                        </label>
                        <input type="url" placeholder="Image Url " name="img" className="input input-success input-bordered" required />
                    </div>
                    {error && <p className="text-center text-red-600 font-medium">{error}</p>}
                    <div className="form-control mt-6 ">
                        <button type="submit" className="btn btn-success  w-96 mx-auto ">SignUP </button>
                    </div>

                </form>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Register;