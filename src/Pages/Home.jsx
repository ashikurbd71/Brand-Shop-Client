import React from "react";
import Banner from "../Component/Banner";
import { useLoaderData } from "react-router-dom";
import Brand from "../Component/Brand";
import About from "./About";
import Whychoseus from "./Whychoseus";
const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <>
      <div>
        <Banner></Banner>
      </div>

      <div className="my-10 ">
        <h1 className="text-4xl text-center  font-bold text-[#E2136E]">
          Our Brand
        </h1>

        <div className="flex justify-center items-center">
        <p className="w-[700px] text-center mt-5  fon font-medium lg:text-lg px-5 lg:px-0">
          Discover the essence of BD Shop. Our brand stands for
          innovation, style, and uncompromising quality. Each product embodies
          our commitment to excellence, designed to elevate your lifestyle and
          leave a lasting impression.
        </p>
        </div>
      

        <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto gap-4 px-5 lg:px-0  my-10 max-w-screen-xl">
          {brands.map((brand) => (
            <Brand brand={brand} key={brand.id}></Brand>
          ))}
        </div>
      </div>

        <div>

            <About></About>
        </div>

        <div>
            <Whychoseus></Whychoseus>
        </div>
    </>
  );
};

export default Home;
