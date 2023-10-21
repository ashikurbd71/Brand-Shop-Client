import React from "react";

import img1 from "../src/assets/iphone-bn.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full bg-[#192655] lg:h-[500px]">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col lg:flex-row lg:flex lg:p-24 p-4">
          <div className="space-y-6 flex-1">
            <h2 className="lg:text-5xl text-[#E2136E] text-4xl font-poppins font-bold">
              iPhone 13 Pro
            </h2>
            <p className="text-white">
              The iPhone 13 Pro offers an exceptional blend of power and
              elegance. With its A15 Bionic chip, ProRAW photography, and
              stunning Super Retina XDR display, it's a true flagship in the
              smartphone world.
            </p>
            <button className="btn btn-outline btn-neutral  text-white">
              Purchase
            </button>
          </div>

          <div className="flex-1">
            <img className="w-[400px]" src="https://i.ibb.co/Z1JDPwS/pngimg-com-iphone-13-PNG33.png" className="w-full" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col lg:flex-row lg:flex lg:p-24 p-4">
          <div className="space-y-6 flex-1">
            <h2 className="lg:text-5xl text-[#E2136E] text-4xl font-poppins font-bold">
            Microsoft Surface Pro 7
            </h2>
            <p className="text-[#fff]">
            he Microsoft Surface Pro 7 combines the power of a laptop with the versatility of a tablet. With a brilliant PixelSense display and versatile design, it's perfect for work and play.
            </p>
            <button className="btn btn-outline btn-neutral text-white">
              Purchase
            </button>
          </div>

          <div className="flex-1">
            <img
              className="w-[400px]"
              src="https://i.ibb.co/0crH9NV/pngegg.png"
              className="w-full"
            />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col lg:flex-row lg:flex lg:p-24 p-4">
          <div className="lg:space-y-6 space-y-3 flex-1">
            <h2 className="lg:text-5xl text-4xl text-[#E2136E]  font-poppins font-bold">
            Samsung Galaxy Watch 4
            </h2>
            <p className="text-[#fff]">
            The Samsung Galaxy Watch 4 is your fitness and health companion, offering advanced tracking features, a sleek design, and seamless integration with your Samsung devices.
            </p>
            <button className="btn btn-outline btn-neutral  text-white">
              Purchase
            </button>
          </div>

          <div className="flex-1">
            <img className="w[400px]" src="https://i.ibb.co/JCL3kbb/pngegg-1.png" className="w-[400px]" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="flex  flex-col lg:flex-row lg:flex lg:p-24 p-4">
          <div className="space-y-6 flex-1">
            <h2 className="lg:text-5xl text-4xl  text-[#E2136E] font-poppins font-bold">
            Sony 65" Bravia XR 4K OLED TV
            </h2>
            <p className="text-[#fff]">
            Elevate your home entertainment with the Sony 65" Bravia XR 4K OLED TV. Experience deep blacks, vibrant colors, and immersive sound in a sleek and stylish design.
            </p>
            <button className="btn btn-outline btn-neutral  text-white">
              Purchase
            </button>
          </div>

          <div className="flex-1">
            <img className="w[400px]" src="https://i.ibb.co/Bj8yQyc/pngegg-2.png" className="w-[500px]" />
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
