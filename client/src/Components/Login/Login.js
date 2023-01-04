import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/login (2).jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/home'
    //Changing title based on route
    useTitle("Login");

    //LogIn
    const handleLogin = data => {
        const user = {
            email: data.email,
            password: data.password,
        }
        fetch('https://creativeit-demo-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    logIn(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            navigate(from, { replace: true });
                            toast.success('LogIn Successfull')
                        })
                        .catch(err => {
                            console.error(err)
                            setLoginError(err.message)
                        })
                } else {
                    setLoginError("User Invaild")
                }


            }

            )



    }

    return (
        <section className='my-24 block lg:flex justify-between lg:mx-16'>
            <div className='md:w-full lg:w-1/2 mb-16 lg:mb-0'>
                <img className='md:mx-auto lg:mx-0' src={loginImage} alt="" />
            </div>
            <div className='md:w-full lg:w-[400px] lg:h-[400px] shadow-xl  border px-[29px] py-[30px] mx-auto lg:mx-0 mt-40'>
                <h2 className='text-xl text-center text-black'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full  text-black" />
                        {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full  text-black" />
                        {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                    </div>



                    <button className="btn btn-success text-white w-full mt-5 mb-[11px]">Login</button>
                    <div>
                        {
                            loginError && <p className='text-red-700 mb-5'>{loginError}</p>
                        }
                    </div>
                    <p className='text-black'>New to Fitness Center? <span className='text-success'><Link to='/register'>Create new account</Link></span></p>

                </form>
            </div>
        </section>
    );
};

export default Login;