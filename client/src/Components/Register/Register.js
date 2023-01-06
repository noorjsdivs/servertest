
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/Register (2).jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [registerError, setRegisterError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [username, setUsername] = useState('')


    //Getting Data from context api
    const { createUser, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();

    //Changing the title based on router
    useTitle("Register")


    //Getting the values of the form
    const values = getValues();
    console.log(values);
    const firstName = values.firstname;
    const lastName = values.lastname;
    const user = firstName + lastName;
    const randomNumber = Math.floor(Math.random() * 1000);
    const genarateUsername = user + randomNumber;


    //Genarating Username base on firstname and lastname
    const handleUsername = () => {
        setUsername(genarateUsername);
    }

    //Sign Up
    const handleRegister = data => {
        console.log(data);
        saveUser(data.username, data.email, data.password)

    }
    const saveUser = (username, email, password) => {
        const user = { username, email, password };
        fetch('https://creativeit-demo-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    createUser(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            verifyEmail()
                                .then(() => {
                                    toast.success('Please verify your Email');
                                    saveUser(data.username, data.email, data.password)
                                })
                        })
                        .catch(err => {
                            setRegisterError(err.message);
                            console.error(err)
                        })
                    toast.success('User Created Successfully');
                    navigate('/home');
                }
                else {
                    //Getting error from form validation
                    setUsernameError(data.message)
                    setEmailError(data.message2)

                }
            })
    }

    return (
      <section className="my-10 block lg:flex justify-between">
        <div className="md:w-full lg:w-1/2 mb-16 lg:mb-0">
          <img className="md:mx-auto lg:mx-0" src={registerImage} alt="" />
        </div>
        <div className="w-full md:w-[500px] shadow-xl border border-gray-400 px-10 py-4 mx-auto">
          <h2 className="text-2xl text-center text-white font-semibold tracking-wider">
            Register
          </h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="flex flex-col gap-[1px]">
              <label className="label">First Name</label>
              <input
                type="text"
                {...register("firstname", {
                  required: "Firstname is required",
                })}
                className="input"
              />
              {errors.firstname && (
                <p role="alert" className="text-red-500 text-sm">
                  {errors.firstname?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">Last Name</label>
              <input
                type="text"
                {...register("lastname", { required: "Lastname is required" })}
                className="input"
              />
              {errors.lastname && (
                <p role="alert" className="text-red-500 text-sm">
                  {errors.lastname?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full  ">
              <label className="label">Username</label>
              <input
                type="text"
                {...register("username", { required: "Username required" })}
                className="input"
                value={username}
              />
              {/* <p>{username}</p> */}
              <button
                onClick={handleUsername}
                className="w-full bg-green-400 text-white mt-2 text-[14px] rounded-md"
              >
                Genarate Username
              </button>
              {errors.username && (
                <p role="alert" className="ttext-red-500 text-sm">
                  {errors.username?.message}
                </p>
              )}
              {usernameError && (
                <p role="alert" className="text-red-500 text-sm">
                  {usernameError}
                </p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input"
              />
              {errors.email && (
                <p role="alert" className="text-red-500 text-sm">
                  {errors.email?.message}
                </p>
              )}
              {emailError && (
                <p role="alert" className="text-red-500 text-sm">
                  {emailError}
                </p>
              )}
            </div>

            <div className="form-control w-full  ">
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input"
              />
              {errors.password && (
                <p role="alert" className="text-red-500 text-sm">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full  ">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                {...register("confirm_password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input"
              />
              {errors.confirm_password && (
                <p role="alert" className="text-red-500 text-sm">
                  {errors.confirm_password?.message}
                </p>
              )}
            </div>

            <div>
              {registerError && (
                <p className="text-red-500 text-sm">{registerError}</p>
              )}
            </div>

            <button className="btn btn-success text-white w-full mt-5 mb-[11px]">
              Register
            </button>
            <p className="text-gray-400 text-center">
              Already have an account?{" "}
              <span className="text-success">
                <Link to="/">Please Login</Link>
              </span>
            </p>
          </form>
        </div>
        <Toaster></Toaster>
      </section>
    );
};

export default Register;