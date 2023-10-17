import React from "react";
import img1 from "../assets/download (1).jpeg";
import img2 from "../assets/download (2).jpeg";
import img3 from "../assets/download (3).jpeg";
import img4 from "../assets/download (4).jpeg";

const About = () => {
  return (
    <>
      <h1 className="lg:text-3xl text-2xl text-center font-bold text-[#E2136E] my-10">
        What People Say About Us
      </h1>

      <div className="flex justify-center">

      <p className="w-[700px] fon font-medium lg:text-lg mb-10 text-center px-5 lg:px-0">
        Welcome to BD shop, where passion meets purpose. As a brand
        born from a vision to innovate, inspire, and empower, we strive to
        redefine the way you experience. Discover
        our journey, values, and the heart that fuels everything we do
      </p>

      </div>

      <div className="mx-auto gap-3 max-w-screen-xl grid gap grid-cols-1 px-5 lg:px-0 lg:grid-cols-4">
        <div className=" rounded-t-2xl p-5 bg-[#FFFFFF] border-2">
          <div>
            <p className=" text-[#E2136E] font-medium">
              Wow, I'm already in love with the idea of a brand that values
              innovation and style. Can't wait to explore your unique products!
            </p>

            <div className="rating my-5">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <img src={img1} alt="" className="w-12  h-14 rounded-full" />

              <div>
                <h1 className="text-lg font-medium">Sophia</h1>
                <p className="">Kurigram,Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" rou rounded-t-2xl grid p-5 bg-[#FFFFFF] border-2">
          <div>
            <p className=" text-[#E2136E] font-medium">
              Impressive commitment to quality and craftsmanship! Your brand
              seems like the perfect place to find items that truly stand ou!
            </p>

            <div className="rating my-5">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <img src={img2} alt="" className="w-12  h-14 rounded-full" />

              <div>
                <h1 className="text-lg font-medium">Michael</h1>
                <p className="">Rangpur,Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" rou rounded-t-2xl p-5 bg-[#FFFFFF] border-2">
          <div>
            <p className=" text-[#E2136E] font-medium">
              Elegance and variety in one place? Count me in! Looking forward to
              shopping with you and discovering exceptional pieces
            </p>

            <div className="rating my-5">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <img src={img3} alt="" className="w-12  h-14 rounded-full" />

              <div>
                <h1 className="text-lg font-medium">Emily</h1>
                <p className="">Rajshahi,Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" rou rounded-t-2xl p-5 bg-[#FFFFFF] border-2">
          <div>
            <p className=" text-[#E2136E] font-medium">
              Your brand description has piqued my interest. I'm always on the
              lookout for innovative products. Excited to see what you have in
              store
            </p>

            <div className="rating my-5">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <img src={img4} alt="" className="w-12  h-14 rounded-full" />

              <div>
                <h1 className="text-lg font-medium">Sophia</h1>
                <p className="">Kurigram,Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
