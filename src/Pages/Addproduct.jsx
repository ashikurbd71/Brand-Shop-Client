import React from 'react';
import toast from 'react-hot-toast';

const Addproduct = () => {


 const handleadd = e => {
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


    fetch('https://brand-shop-sever.vercel.app/products',{

    method:'POST',
    headers:{

        'Content-Type' : 'application/json'
    },
    body:JSON.stringify(productinfo)
    })

    .then(res => res.json())
    .then(data => {

      e.target.reset()
      console.log(data)

      if(data.insertedId){
        toast.success('Product Added Successfuly!')
       }
    })

 }

 


    return (
        <div className=''>
           
    <div className="mx-auto  max-w-screen-xl px-5 lg:px-0">
      <div className="bg-[#E2136E]  dark:bg-black min-h-screen my-10 py-10 lg:mx-20">
        <div className="text-center ">
          <h1 className="text-[#fff] text-[30px] font-bold">Add New Product</h1>
          <p className="lg:px-28 px-5 py-4 font-medium text-[#fff]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a  page when looking at its layout.  The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleadd}>

         <div className="lg:md:flex mx-10 mb-5">

         <div className="form-control lg:w-1/2">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter product name" name="name" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control lg:w-1/2 lg:ml-4">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Brand Name" name="brand" className="input input-bordered w-full" />
  </label>
</div>

         </div>


         <div className="lg:md:flex mx-10 mb-5">

         <div className="form-control lg:w-1/2">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Type" name="type" className="input input-bordered w-full" />
  </label>
</div>

<div className="form-control lg:w-1/2 lg:ml-4">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Price" name="price" className="input input-bordered w-full" />
  </label>
</div>

         </div>


         <div className="lg:md:flex mx-10 mb-5">

<div className="form-control lg:w-1/2">
<label className="label">
<span className="label-text">short description</span>
</label>
<label className="input-group">

<input type="text" placeholder="Enter short description" name="description" className="input input-bordered w-full" />
</label>
</div>

<div className="form-control lg:w-1/2 lg:ml-4">
<label className="label">
<span className="label-text">Ratting</span>
</label>
<label className="input-group">

<input type="text" placeholder="Enter Ratting" name="ratting" className="input input-bordered w-full" />
</label>
</div>

</div>

<div className="form-control w-full px-10">
<label className="label">
<span className="label-text">Photo</span>
</label>
<label className="input-group">

<input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered w-full" />
</label>
</div>

     <div className="px-10 pt-5">
     <input type="submit" value="Add Product"  className=" w-full px-10 btn  btn-neutral my-5"/>
     </div>
        </form>
      </div>
    </div>

        </div>
    );
};

export default Addproduct;