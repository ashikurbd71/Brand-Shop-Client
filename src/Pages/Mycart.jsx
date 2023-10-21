import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycartcard from '../Component/Mycartcard';

const Mycart = () => {

     const cartdata = useLoaderData()
     const[deletes,setDelete] = useState(cartdata)

     
    //   console.log(cartdata)
    return (

        <>
        
        <h1 className='text-center text-4xl text-black font-bold my-10'>My Products</h1>

        <hr className=' mx-20 fon font-extrabold pb-10' />
    
        <div className='min min-h-screen mx-auto max-w-screen-xl my-10 '>

            <div className='grid gap-5 grid-cols-1 px-5 lg:px-0'>


                {
                    deletes.length > 0 ? 
                    
                    deletes?.map(card => <Mycartcard card={card} setDelete={setDelete} deletes={deletes} key={card._id}></Mycartcard>) : <h1 className='lg:text-4xl text-xl text-red-500 font-bold text-center my-32'>Not Found Any Products</h1>
                   
                }

            </div>
         
        </div>

        </>
    );
};

export default Mycart;;