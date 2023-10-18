import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  console.log(brand);
  return (
    <div>
      <Link to={`/products/${brand.brand}`}>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-[400px] h-[300px]"
              src={brand?.image_name}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-3xl text-center font-bold tracking-tight text-[#E2136E] dark:text-white">
                {brand?.brand}
              </h5>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
