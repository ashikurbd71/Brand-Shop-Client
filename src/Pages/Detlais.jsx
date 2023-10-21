import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Detailsbanner from '../Component/Detailsbanner';

const Detlais = () => {

    const singledata = useLoaderData()

      console.log(singledata)

      const name = singledata?.name
      const photo = singledata?.photo
      const type = singledata?.type
      const description = singledata?.description
      const brand = singledata?.brand
      const ratting = singledata?.ratting
      const price = singledata?.price

      const userdata = {

        name,
        photo,
        type,
        description,
        brand,
        ratting,
        price
      }

      const handlecart = () => {

        console.log('cart added')

        fetch('https://brand-shop-sever.vercel.app/carts',{

        method:'POST',
        headers:{

          'Content-Type' : 'application/json'
        },

        body:JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {

          console.log(data)
          toast.success('Product Add To Cart Successfuly!')
        })
      }
    return (


          <>

        <Detailsbanner></Detailsbanner>
          

        <div className=' min-h-screen mx-auto max-w-screen-xl my-10 px-5 lg:px-0'>



            <div>

              

            <div className="card lg:card-side bg-base-100  dark:bg-black shadow-xl border-2 my-20">
  <figure><img src={singledata?.photo} className='w-[400px] h-[300px] p-10' alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{singledata?.name}</h2>

       <div className='flex items-center gap-10'>
          <div  className='text-xl font-semibold' >
          Type : {singledata?.type}
          </div>
         
          <div className='text-xl font-semibold'>
          Brand : {singledata?.brand}
          </div>
       </div>
    <p>{singledata?.description}</p>

       <div>
       <div className="flex items-center mt-2.5 mb-5">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {singledata?.ratting}
            </span>
          </div>
       </div>

       <div className='text-xl font-semibold'>

        ${singledata?.price}
       </div>

    <div className="card-actions justify-end">
     <Link> <button onClick={handlecart} className="btn btn-neutral  btn-outline">Add Cart</button></Link>
    </div>
  </div>
</div>
            </div>

        </div>

      

</>
    );
};

export default Detlais;