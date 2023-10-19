import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycartcard from '../Component/Mycartcard';

const Mycart = () => {

     const cartdata = useLoaderData()
    //   console.log(cartdata)
    return (
        <div className='min min-h-screen mx-auto max-w-screen-xl my-10 '>

            <div className='grid gap-5 grid-cols-1 px-5 lg:px-0'>

            {
            cartdata?.map(card => <Mycartcard card={card} key={card._id}></Mycartcard>)
           }

            </div>
         
        </div>
    );
};

export default Mycart;;