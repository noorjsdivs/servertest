import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/download.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import profileImage from '../../../assets/images/profile.jpg'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    let [currentUser, setCurrentUser] = useState("");
    const navigate = useNavigate();

    //LogOut
    const handleSignOut = () => {

        logOut()
            .then(() => {
                navigate('/')
                setCurrentUser("")

            })
            .catch(err => { console.error(err) })
    }


    //Geting specific user data from the server
    useEffect(() => {
        if (user?.email) {
            fetch(`https://creativeit-demo-server.vercel.app/users/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCurrentUser(data.username)
                })
        }
    }, [user?.email])

    //Navbar Items
    const menuItems = <>
        <li><Link to='/home' className='font-bold text-[16px]'>Home</Link></li>








    </>
    return (
        <div className="navbar px-10 mx-auto" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {menuItems}
                        {
                            currentUser !== "" &&
                            <div className='block lg:flex items-center ml-3 lg:ml-0'>
                                <button><img className='w-[35px]' src={profileImage} alt="" /></button>
                                <p className='text-success font-semibold'>{currentUser}</p>
                            </div>
                        }
                        {
                            user?.email ? <li><Link onClick={handleSignOut} to='/home'><button className="btn btn-success text-white">LogOut</button></Link></li>
                                :
                                <li><Link to='/'><button className="btn btn-success text-white">Login</button></Link></li>
                        }
                    </ul>
                </div>
                <a href='/home' className="btn btn-ghost normal-case text-xl"><img className='w-44' src={logo} alt="" /></a>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    <div className='block lg:flex items-center ml-96'>
                        {
                            currentUser !== "" &&
                            <div className='block lg:flex items-center ml-3 lg:ml-0'>
                                <button><img className='w-[35px]' src={profileImage} alt="" /></button>
                                <p className='text-success font-semibold'>{currentUser}</p>
                            </div>

                        }
                        {
                            user?.email ? <li><Link onClick={handleSignOut} to='/home'><button className="btn btn-success text-white">LogOut</button></Link></li>
                                :
                                <li><Link to='/'><button className="btn btn-success text-white">Login</button></Link></li>
                        }
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default Header;