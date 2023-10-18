import React, { useContext } from 'react';
import { Authcontext } from '../Component/Authprovider/Authprovider';
import { FaGoogle } from 'react-icons/fa';

const Media = () => {

    const{userGooglesigin} = useContext(Authcontext)


     const handleprovider = media => {

        userGooglesigin(media)
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