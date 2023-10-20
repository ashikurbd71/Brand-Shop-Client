import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Mycartcard = ({card,setDelete,deletes}) => {

    // console.log(card)



    const handledelete = _id => {

         console.log('delete',_id)

         Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
           

            fetch(`https://brand-shop-sever-2rw6jgw08-ashikur-rahman-ovis-projects.vercel.app/users/${_id}`, {

       
            method: 'DELETE'
   
            }).then(res => res.json())
            .then(data => {
             
             console.log(data)
             if(data.deletedCount > 0){
   
               Swal.fire(
                   'Deleted!',
                   'Your Product has been deleted.',
                   'success'
                 )
   
          
   
               const remaning = deletes.filter( user => user._id !== _id)
               setDelete(remaning)
            
           
           }
           
           
           })
          }
        })

       }

     

    return (
        <div>
            

<div>

<div className="card lg:card-side bg-base-100 dark:bg-black shadow-xl border-2">
<figure><img src={card?.photo}  className='w-[400px] h-[300px] p-10' alt="Movie"/></figure>
<div className="card-body">
<h2 className="card-title">{card?.name}</h2>

<div className='flex items-center gap-10'>
<div  className='text-xl font-semibold' >
Type : {card?.type}
</div>

<div className='text-xl font-semibold'>
Brand : {card?.brand}
</div>
</div>
<p>{card?.description}</p>

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
{card?.ratting}
</span>
</div>
</div>

<div className='text-xl font-semibold'>

${card?.price}
</div>

<div className="card-actions justify-end">
<Link> <button onClick={() => handledelete(card?._id)} className="btn btn-neutral  btn-outline">Delete</button></Link>
</div>
</div>
</div>
</div>


        </div>
    );
};

export default Mycartcard;