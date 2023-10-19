import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Authcontext } from './Authprovider/Authprovider';

import userpic from'../assets/user.png'

const Navber = () => {
  const{user,userlogout} = useContext(Authcontext)

  const handlelogout = () => {

    userlogout()
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      console.log(user)
      // ...
    })
    .catch((error) => {
     
      console.log(error)

    })
  }

   return (
    <div>
      <div className="navbar bg-[#E2136E] pb-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content mt-3  z-[1] p-2 shadow  bg-white rounded-box w-52"
            >
              <li className="text-lg font-bold ">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="text-lg font-bold ">
                <NavLink
                  to="/addproduct"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                  }
                >
                  Addproduct
                </NavLink>
              </li>

              <li className="text-lg font-bold">
                <NavLink
                  to="/mycart"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-green-500" : ""
                  }
                >
                  Mycart
                </NavLink>
              </li>
            </ul>
          </div>
           <Link to={"/"}> <div className='flex  items-center'>

             <img src={logo} alt="" className='w-8 h-8' />
             <a  className="btn btn-ghost font-bold normal-case lg:text-3xl text-xl text-[#EEEEEE]">
            BD <span className="lg:text-2xl text-lg text-black">Shop</span>
          </a>
            </div> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" py-1  menu-horizontal px-1 text-[#fff]">
            <li className="text-lg font-bold mr-10">
              {" "}
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500 " : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="text-lg font-bold mr-10">
              {" "}
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500 " : ""
                }
              >
                Addcart
              </NavLink>
            </li>

            <li className="text-lg font-bold">
              {" "}
              <NavLink
                to="/mycart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500 " : ""
                }
              >
                Mycart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">

          <div>

    

      

         
          </div>

          <div>



          </div>

          {

user ?  <div className="dropdown dropdown-end">
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img src={user?.photoURL} />
  </div>
</label>
<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
  
  <li className="text-xl font-semibold"><h1>{user?.displayName}</h1></li>
  <li className="text-xl font-semibold"><h1>{user?.email}</h1></li>
 <Link onClick={handlelogout}> <li className="text-xl font-semibold"><button>Logout</button></li></Link>
   

</ul>
</div> : <div className="avatar">
<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
<img src={userpic} className="w-8"/>
</div>
</div>

   
}

<div>
{user ?  <Link to={'/login'}> <button className="btn btn-outline hidden btn-success ml-4 ">Login</button></Link> :  <Link to={'/login'}> <button className="btn btn-outline btn-neutral text-[#fff] ml-4">Login</button></Link>}
</div>
          
       

        </div>
      </div>
    </div>
  );
};

export default Navber;