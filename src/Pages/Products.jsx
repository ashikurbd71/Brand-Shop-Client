import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Productcard from '../Component/Productcard';
import Slider from '../Slider';
// import slide1 from '../assets/iphone-bn.jpg'
// import slide2 from '../assets/google-bn.jpg'
// import slide3 from '../assets/intel-bn.jpg'
// import slide4 from '../assets/keyboard-bn.jpg'

const Products = () => {

    const productsdata = useLoaderData()
    
    console.log(productsdata)

    
    
    return (

        <>


     <Slider></Slider>


           

      
        <div className=' min-h-screen mx-auto max-w-screen-xl  dark:bg-slate-800 my-10'>
            
            <div className='grid grid-cols-1 gap-5 px-5 lg:px-0 lg:grid-cols-3'>
                
           {
            productsdata?.map(product => <Productcard product={product} key={product._id}></Productcard>)
           }

            </div>

        </div>

        </>
    );
};

export default Products;