import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Update = () => {


   const updatedata = useLoaderData()

   console.log(updatedata)

    const handleupdate = e => {
        e.preventDefault()
        const name = e.target.name.value
        const brand = e.target.brand.value.toLowerCase()
        const type = e.target.type.value
        const price = e.target.price.value
        const description = e.target.description.value
        const ratting = e.target.ratting.value
        const photo = e.target.photo.value
    
        const productinfo = {
            name,brand,type,price,description,ratting,photo
        }
        console.log(productinfo)
    
    
        fetch(`https://brand-shop-sever-2rw6jgw08-ashikur-rahman-ovis-projects.vercel.app/details/${updatedata?._id}`,{
    
        method:'PUT',
        headers:{
    
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(productinfo)
        })
    
        .then(res => res.json())
        .then(data =>{

           console.log(data)

           if(data.modifiedCount > 0){
            toast.success('Product Update Successfuly!')
           }
        })
    
     }
    
     
    
    
        return (
            <div>
               
        <div className="mx-auto  max-w-screen-xl px-5 lg:px-0">
          <div className="bg-[#E2136E] dark:bg-black min-h-screen my-10 py-10 lg:mx-20">
            <div className="text-center ">
              <h1 className="text-[#fff] text-[30px] font-bold">Update Product</h1>
              <p className="lg:px-28 px-5 py-4 font-medium text-[#fff]">
                It is a long established fact that a reader will be distraceted by
                the readable content of a  page when looking at its layout.  The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here.
              </p>
            </div>
    
            <form onSubmit={handleupdate}>
    
             <div className="lg:md:flex mx-10 mb-5">
    
             <div className="form-control lg:w-1/2">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <label className="input-group">
    
        <input type="text" placeholder="Enter product name" name="name" defaultValue={updatedata?.name}  className="input input-bordered w-full" />
      </label>
    </div>
    
    <div className="form-control lg:w-1/2 lg:ml-4">
      <label className="label">
        <span className="label-text">Brand Name</span>
      </label>
      <label className="input-group">
    
        <input type="text" placeholder="Enter Brand Name" defaultValue={updatedata?.brand} name="brand" className="input input-bordered w-full" />
      </label>
    </div>
    
             </div>
    
    
             <div className="lg:md:flex mx-10 mb-5">
    
             <div className="form-control lg:w-1/2">
      <label className="label">
        <span className="label-text">Type</span>
      </label>
      <label className="input-group">
    
        <input type="text" placeholder="Enter Type" defaultValue={updatedata?.type} name="type" className="input input-bordered w-full" />
      </label>
    </div>
    
    <div className="form-control lg:w-1/2 lg:ml-4">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <label className="input-group">
    
        <input type="text" placeholder="Enter Price" defaultValue={updatedata?.price} name="price" className="input input-bordered w-full" />
      </label>
    </div>
    
             </div>
    
    
             <div className="md:flex mx-10 mb-5">
    
    <div className="form-control lg:w-1/2">
    <label className="label">
    <span className="label-text">short description</span>
    </label>
    <label className="input-group">
    
    <input type="text" placeholder="Enter short description" defaultValue={updatedata?.description} name="description" className="input input-bordered w-full" />
    </label>
    </div>
    
    <div className="form-control lg:w-1/2 lg:ml-4">
    <label className="label">
    <span className="label-text">Ratting</span>
    </label>
    <label className="input-group">
    
    <input type="text" placeholder="Enter Ratting" defaultValue={updatedata?.ratting} name="ratting" className="input input-bordered w-full" />
    </label>
    </div>
    
    </div>
    
    <div className="form-control w-full px-10">
    <label className="label">
    <span className="label-text">Photo</span>
    </label>
    <label className="input-group">
    
    <input type="text" placeholder="Enter photo URL" defaultValue={updatedata?.photo} name="photo" className="input input-bordered w-full" />
    </label>
    </div>
    
         <div className="px-10 pt-5">
         <input type="submit" value="Update Product"  className=" w-full px-10 btn  btn-neutral my-5"/>
         </div>
            </form>
          </div>
        </div>
    
            </div>
        );
};

export default Update;