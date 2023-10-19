import React, { useContext } from 'react';
import { Authcontext } from '../Component/Authprovider/Authprovider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Media = () => {

    const{userGooglesigin} = useContext(Authcontext)

    const location = useLocation()
    const navigate = useNavigate()

     const handleprovider = media => {

        userGooglesigin(media)
        .then(result => {
          // Signed up 
          const user = result.user;
          console.log(user)
   
          toast.success("Successfully login")
        
          navigate(location?.state ? location?.state : "/")
        
          // ...
        })
        .catch((error) => {
         
          console.log(error)
          return toast.error(error.message);
        
      
          // ..
        });


     }
    return (
        <div>
             <div>
            <div>
      <div className="mt- flex justify-center gap-4">
        <button
          onClick={() => handleprovider(userGooglesigin)}
          className="btn bg-[#fff] btn-outline "
        >
          <FaGoogle></FaGoogle>
          <span> Google</span>
        </button>

        {/* <button
          onClick={() => handleprovider(Gitsigin)}
          className="btn bg-[#fff] btn-outline "
        >
          <FaGithub></FaGithub>
          <span> Github</span>
        </button> */}
      </div>
    </div>
        </div>
        </div>
    );
};

export default Media;