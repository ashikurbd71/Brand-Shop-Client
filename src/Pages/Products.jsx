import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Productcard from '../Component/Productcard';

const Products = () => {

    const productsdata = useLoaderData()
    
    console.log(productsdata)

    
    
    return (
        <div className=' min-h-screen mx-auto max-w-screen-xl my-10'>
            
            <div className='grid grid-cols-1 px-5 lg:px-0 lg:grid-cols-3'>
                
           {
            productsdata?.map(product => <Productcard product={product} key={product._id}></Productcard>)
           }

            </div>

        </div>
    );
};

export default Products;