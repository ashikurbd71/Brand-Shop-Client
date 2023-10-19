import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Productcard from '../Component/Productcard';
import slide1 from '../assets/iphone-bn.jpg'
import slide2 from '../assets/google-bn.jpg'
import slide3 from '../assets/intel-bn.jpg'
import slide4 from '../assets/keyboard-bn.jpg'

const Products = () => {

    const productsdata = useLoaderData()
    
    console.log(productsdata)

    
    
    return (

        <>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative h-[500px] w-full">
    <img src={slide1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative h-[500px] w-full">
    <img src={slide2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative h-[500px] w-full">
    <img src={slide3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative h-[500px] w-full">
    <img src={slide4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        <div className=' min-h-screen mx-auto max-w-screen-xl dark:bg-black my-10'>
            
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