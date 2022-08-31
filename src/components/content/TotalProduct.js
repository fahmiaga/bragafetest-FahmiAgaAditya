import React from "react";
import Image from "../../assets/path4.svg";

const TotalProduct = ({ data }) => {
  return (
    <>
      <div className="flex justify-end h-20 relative -z-10">
        <img
          src={Image}
          alt="phoo"
          className="absolute bottom-0 -right-10 top-2"
        />
        <img src={Image} alt="phoo" className="absolute right-28 top-2" />
      </div>
      <div className="h-36 bg-primary rounded-md">
        <div className="w-3/4 mx-auto py-12 flex justify-between text-4xl text-white">
          <span>Total Produk</span>
          <span>{data.total}</span>
        </div>
      </div>
    </>
  );
};

export default TotalProduct;
