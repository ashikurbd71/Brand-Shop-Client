import details from "../assets/details.jpg";
const Detailsbanner = () => {
  return (
    <div
      className=" lg:h-[500px] h-auto w-full bg-blend-overlay bg-opacity-90 dark:bg-black   bg-fixed"
      style={{
        backgroundImage: `url(${details})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="text-center pt-32">
          <h1 className="mb-5 lg:text-5xl text-3xl font text-[#E2136E] font-extrabold">
            Product Details
          </h1>

          <div className="flex justify-center">
            <p className="w-[700px] lg:text-xl text-lg font-medium text-white px-5  pb-20 lg:pb-0 lg:px-0 ">
              At BD SHOP, we're committed to delivering innovative
              solutions that enhance your daily life. Our diverse range of
              products offers something for everyone, from cutting-edge
              technology to everyday essentials.
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Detailsbanner;
