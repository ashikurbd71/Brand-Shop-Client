import cover from "../assets/cover-1.jpg";

const Banner = () => {
  return (
    <div
      className=" min-h-screen w-full bg-blend-overlay bg-opacity-90 "
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } }
    >
      <div className="">

        <div className="text-center pt-32">
        <h1 className="mb-5 lg:text-5xl text-3xl font text-[#E2136E] font-extrabold">Unleashing Creativity</h1>

         <div className="flex justify-center">
        <p className="w-[700px] lg:text-xl text-lg font-medium ">
          Welcome to our one-stop shop, where versatility meets variety! Explore
          a world of endless choices at BD shop. Discover the perfect blend of quality,
          style, and affordability as you navigate through our diverse product
          range. Whatever you seek, find it here at BD shop. Your
          go-to destination for all things exceptional.
        </p>
        </div>

 <div className="mt-10 flex justify-center items-center mr-20">

 <div>
 <input type="text" placeholder="serach product" className="input input-bordered rounded-none lg:w-[400px] pr-16" /> 
        <button className="btn btn-primary absolute bg-[#E2136E] border-none rounded-l-none">Search</button>
 </div>

 </div>
        
        </div>



        



      </div>

     <div>

        

        </div>
    </div>

    
  );
};

export default Banner;
