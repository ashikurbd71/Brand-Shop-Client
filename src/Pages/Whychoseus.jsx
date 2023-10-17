import React from "react";
import why from "../assets/why.jpg";

const Whychoseus = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="lg:text-3xl text-2xl text-center font-bold text-[#E2136E] my-10">
        Why choose Us
      </h1>

      <div className="flex justify-center">
        <p className="w-[700px] fon font-medium lg:text-lg mb-10 text-center px-5 lg:px-0">
          we're a destination of choice. With an unparalleled selection of
          top-tier products, a commitment to exceptional quality, and a passion
          for customer satisfaction, we're your trusted partner in finding the
          perfect blend of style, innovation, and value.
        </p>
      </div>

      <img src={why} alt="" className="h-[500px] w-full" />
      <div className="grid grid-cols-4">
        <div className=" rounded-none p-5 bg-[#FFFFFF] border-2">
          <div>
            <h1 className="text-[#E2136E] text-2xl  mb-5 font-bold">
              Diverse Product Selection
            </h1>
            <p className="  font-medium">
              Discover a curated collection of products ranging from [mention
              types of products, e.g., fashion, electronics, home decor]
              carefully chosen to cater to a wide array of tastes and
              preferences. Our expansive product range ensures you'll find the
              perfect match for your unique style and needs.
            </p>
          </div>
        </div>

        <div className=" rounded-none p-5 bg-[#FFFFFF] border-2">
          <div>
            <h1 className="text-[#E2136E] text-2xl  mb-5 font-bold">
              Customer-Centric Approach
            </h1>
            <p className="  font-medium">
              Your satisfaction is our mission. We prioritize delivering an
              exceptional shopping experience, offering dedicated customer
              support, hassle-free returns, and a seamless ordering process. Our
              team is here to assist you at every step, making sure your journey
              with us is smooth and enjoyable.
            </p>
          </div>
        </div>

        <div className=" rounded-none p-5 bg-[#FFFFFF] border-2">
          <div>
            <h1 className="text-[#E2136E] text-2xl  mb-5 font-bold">
              Competitive Pricing and Value
            </h1>
            <p className="  font-medium">
              We believe in providing value without compromise. Enjoy
              competitive prices on all our products, without sacrificing
              quality. With special promotions, discounts, and loyalty programs,
              we strive to make your shopping experience cost-effective and
              rewarding, ensuring you get the best bang for your buck.
            </p>
          </div>
        </div>

        <div className=" rounded-none p-5 bg-[#FFFFFF] border-2">
          <div>
            <h1 className="text-[#E2136E] text-2xl mb-5 font-bold">
              Quality Assurance
            </h1>
            <p className="  font-medium">
              At BD Shop, quality is our priority. Every product
              we offer undergoes rigorous quality checks to ensure durability,
              functionality, and a premium experience. We stand by the quality
              of our merchandise, providing you with confidence and peace of
              mind in every purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoseus;
